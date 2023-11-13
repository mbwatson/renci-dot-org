import { fetchStrapiGraphQL } from "./fetchStrapiGraphQL";
import qs from 'qs';
import useSWR from 'swr';

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
 * SWR-enabled hook for fetch news article data
 *   @param {{
 *   filters: {
 *       researchGroups: string[],
 *       collaborations: string[],
 *       projects: string[],
 *       organizations: string[],
 *       people: string[],
 *       postTags: string[],
 *       freeSearch: string[],
 *       newsOrBlog: "news" | "blog" | undefined,
 *     },
 *     page?: number,
 *   }}
 */
export const useNewsArticles = ({
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
  page = 1,
}) => {
  if ([researchGroups, collaborations, projects, organizations, people, freeSearch, postTags].some((t) => !Array.isArray(t))) {
    throw new Error("One of the filters is not an array")
  }

  // make a list of all filters that need to be applied
  const filtersList = [
    ...researchGroups.map((rg) => ({ researchGroups: { slug: { $eq: rg }} })),
    ...collaborations.map((c) => ({ collaborations: { slug: { $eq: c }} })),
    ...projects.map((p) => ({ projects: { slug: { $eq: p }} })),
    ...organizations.map((o) => ({ organizations: { slug: { $eq: o }} })),
    ...people.map((p) => ({ people: { slug: { $eq: p }} })),
    ...postTags.map((pt) => ({ tags: { name: { $eq: pt }} })),
    ...freeSearch.map((fs) => ({
      $or: [
        {title: { $containsi: fs }},
        {slug: { $containsi: fs }},
      ]
    })),
    ...(newsOrBlog !== undefined ? [
      { newsOrBlog: { $eq: newsOrBlog } }
    ] : [])
  ];

  // if there is more than one filter, we need to boolean AND them together
  // if there is just one, it needs to be spread to the top level of the `filters` obj
  const filters = filtersList.length === 1
    ? { ...filtersList[0] }
    : { $and: filtersList }

  const queryObj = {
    sort: ['publishDate:desc'],
    populate: "*",
    fields: '*',
    pagination: {
      pageSize: 25,
      page,
    },
    publicationState: 'live',
    locale: ['en'],
    filters,
  };

  const queryString = qs.stringify(queryObj, { encode: false });
  const articlesUrl = `https://api.renci.org/api/posts?${queryString}`;

  const fetcher = (url) => fetch(url, { 
    headers: {
      'Accept': 'application/json',
    },
  })
    .then((res) => {
      if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);
      return res.json();
    })
    .then((data) => { 
      if (data.error) throw new Error(`Strapi Error: ${data.error?.message ?? "Unknown error while fetching articles"}`);
      return ({
        articles: data.entriesFormatted.map((article) => ({
          ...article,
          collaborations: article.collaborations.data.map(({ attributes }) => attributes),
          people: article.people.data.map(({ attributes }) => ({ ...attributes, name: `${attributes.firstName} ${attributes.lastName}` })),
          projects: article.projects.data.map(({ attributes }) => attributes),
          organizations: article.organizations.data.map(({ attributes }) => attributes),
          researchGroups: article.researchGroups.data.map(({ attributes }) => attributes),
          tags: article.tags.data.map(({ attributes }) => attributes),
        })),
        meta: data.meta
      });
    });

  // dedupingInterval essentially sets cache expiration time to 1 hour
  return useSWR(articlesUrl, fetcher, { dedupingInterval: 1000 * 60 * 60 });
}

export const fetchArticle = async (slug) => {
  const articleGql = await fetchStrapiGraphQL(`
    fragment PersonAttributes on PersonRelationResponseCollection {
      data {
        attributes {
          firstName
          lastName
          slug
        }
      }
    }
    
    query {
      posts(filters: { slug: { eq: "${slug}" }}) {
        data {
          attributes {
            title
            subtitle
            slug
            publishDate
            newsOrBlog
            renciAuthors {
              ...PersonAttributes
            }
            externalAuthors
            metadata {
              metaTitle
              metaDescription
              shareImage {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
            people {
              ...PersonAttributes
            }
            researchGroups {
              data {
                attributes {
                  name
                  slug
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
            projects {
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
            tags {
              data {
                attributes {
                  name
                }
              }
            }
            content {
              __typename
              ...on ComponentPostSectionsImage {
                caption
                altText
                image {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
              ...on ComponentPostSectionsRichText{
                content
              }
            }
          }
        }
      }
    }
  `);

  console.log(articleGql)

  if (articleGql?.data?.posts?.data?.length !== 1) return null;

  return articleGql.data.posts.data.map(({ attributes }) => ({
    ...attributes,
    renciAuthors: attributes.renciAuthors.data.map(({ attributes }) => attributes),
    people: attributes.people.data.map(({ attributes }) => attributes),
    researchGroups: attributes.researchGroups.data.map(({ attributes }) => attributes),
    collaborations: attributes.collaborations.data.map(({ attributes }) => attributes),
    projects: attributes.projects.data.map(({ attributes }) => attributes),
    organizations: attributes.organizations.data.map(({ attributes }) => attributes),
  }))
}