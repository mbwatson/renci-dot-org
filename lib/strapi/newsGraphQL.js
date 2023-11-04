import { fetchStrapiGraphQL } from "./fetchStrapiGraphQL";

/**
 * @returns { Promise<{
*   researchGroups: Array<{ slug: string, name: string, numOfPosts: number }>
*   collaborations: Array<{ slug: string, name: string, numOfPosts: number }>
*   projects: Array<{ slug: string, name: string, numOfPosts: number }>
*   organizations: Array<{ slug: string, name: string, numOfPosts: number }>
*   people: Array<{ slug: string, name: string, numOfPosts: number }>
*   postTags: Array<{ name: string, numOfPosts: number }>
* }> }
*/
export const fetchTags = async () => {
 const frag = (type = 'generic') => `(pagination: {limit: 500}) {
   data {
     attributes {
       ${type === 'person' ? 'firstName\nlastName' : 'name'}
       ${type !== 'postTags' ? 'slug' : ''}
       referencedInPosts {
         data {
           id
         }
       }
     }
   }
 }`;

 const query = `query {
   researchGroups ${frag()}
   collaborations ${frag()}
   projects ${frag()}
   organizations ${frag()}
   people ${frag('person')}
   postTags ${frag('postTags')}
 }`
 const { data } = await fetchStrapiGraphQL(query)

 const tags = Object.entries(data).reduce((acc, [type, instances]) => ({
   ...acc,
   [type]: instances.data.reduce((arr, { attributes: { name, referencedInPosts, firstName, lastName, slug } }) => {
     if (referencedInPosts.data.length === 0) return arr;
     const normalizedName = name ?? `${firstName} ${lastName}`
     arr.push({
       name: normalizedName,
       numOfPosts: referencedInPosts.data.length,
       slug
     })
     return arr;
   }, []).sort((a, b) => b.numOfPosts - a.numOfPosts)
 }), {})

 return tags
}

/**
 * @param {{
 *   filters: {
 *     researchGroups: string[],
 *     collaborations: string[],
 *     projects: string[],
 *     organizations: string[],
 *     people: string[],
 *     postTags: string[],
 *     freeSearch: string[],
 *     newsOrBlog: "news" | "blog" | undefined,
 *   },
 *   signal: AbortSignal,
 * }}
 */
export const fetchNewsArticles = async ({
  filters: {
    researchGroups,
    collaborations,
    projects,
    organizations,
    people,
    postTags,
    freeSearch,
    newsOrBlog,
  },
  signal,
}) => {
  if ([researchGroups, collaborations, projects, organizations, people, freeSearch, postTags].some((t) => !Array.isArray(t))) {
    throw new Error("One of the filters is not an array")
  }

  const filterPayload = {
    and: [
      ...researchGroups.map((rg) => ({ researchGroups: { slug: { eq: rg }} })),
      ...collaborations.map((c) => ({ collaborations: { slug: { eq: c }} })),
      ...projects.map((p) => ({ projects: { slug: { eq: p }} })),
      ...organizations.map((o) => ({ organizations: { slug: { eq: o }} })),
      ...people.map((p) => ({ people: { slug: { eq: p }} })),
      ...postTags.map((pt) => ({ tags: { name: { eq: pt }} })),
      ...freeSearch.map((fs) => ({
        or: [
          {title: { containsi: fs }},
          {slug: { containsi: fs }},
        ]
      })),
      ...(newsOrBlog !== undefined ? [
        { newsOrBlog: { eq: newsOrBlog } }
      ] : [])
    ]
  }

  const { data } = await fetchStrapiGraphQL(`
    query {
      posts(
        pagination: { limit: 50 }
        sort: "publishDate:desc"
        filters: ${JSON.stringify(filterPayload).replace(/"([^(")"]+)":/g,"$1:")}
      ) {
        data {
          attributes {
            title
            slug
            publishDate
            newsOrBlog
            projects {
              data {
                attributes {
                  name
                  slug
                }
              }
            }
            people {
              data {
                attributes {
                  firstName
                  lastName
                  slug
                }
              }
            }
            tags {
              data {
                attributes {
                  name
                }
              }
            }
            collaborations {
              data {
                attributes {
                  name
                  slug
                }
              }
            }
            organizations {
              data {
                attributes {
                  name
                  slug
                }
              }
            }
            researchGroups {
              data {
                attributes {
                  name
                  slug
                }
              }
            }
          }
        }
      }
    }
  `, false, signal);

  const out = data.posts.data.map(({ attributes }) => ({
    ...attributes,
    collaborations: attributes.collaborations.data.map(({ attributes }) => attributes),
    people: attributes.people.data.map(({ attributes }) => ({ ...attributes, name: `${attributes.firstName} ${attributes.lastName}` })),
    projects: attributes.projects.data.map(({ attributes }) => attributes),
    organizations: attributes.organizations.data.map(({ attributes }) => attributes),
    researchGroups: attributes.researchGroups.data.map(({ attributes }) => attributes),
    tags: attributes.tags.data.map(({ attributes }) => attributes),
  }));

  return out;
}