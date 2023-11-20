import { fetchStrapiGraphQL } from "./fetchStrapiGraphQL";

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
                      width
                      height
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

  if (articleGql?.data?.posts?.data?.length !== 1) return null;

  return articleGql.data.posts.data.map(({ attributes }) => ({
    ...attributes,
    renciAuthors: attributes.renciAuthors.data.map(({ attributes }) => attributes),
    people: attributes.people.data.map(({ attributes }) => ({ ...attributes, name: `${attributes.firstName} ${attributes.lastName}`})),
    researchGroups: attributes.researchGroups.data.map(({ attributes }) => attributes),
    collaborations: attributes.collaborations.data.map(({ attributes }) => attributes),
    projects: attributes.projects.data.map(({ attributes }) => attributes),
    organizations: attributes.organizations.data.map(({ attributes }) => attributes),
    postTags: attributes.tags.data.map(({ attributes }) => attributes),
  }))[0];
}