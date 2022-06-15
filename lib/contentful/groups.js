import { fetchGraphQL } from './'

export const fetchResearchGroups = async (preview = false) => {
  const { data } = await fetchGraphQL(`query {
    researchGroupCollection(order: [name_ASC]) {
      items {
        id
        name
        description
      }
    }
  }`, preview)
  return data.researchGroupCollection.items
}

export const fetchResearchGroup = async (id, preview = false) => {
  try {
    const { data } = await fetchGraphQL(`{
      researchGroupCollection(where: { id: "${ id }"}, limit: 1) {
        items {
          id
          name
          description
          featuredImage {
            url
          }
          groupMembersCollection {
            items {
              slug
              firstName
              lastName
              title
              photo {
                url
              }    
            }
          }
          projectsCollection {
            items {
              id
              name
            }
          }
        }
      }
    }`, preview)
    return data.researchGroupCollection.items[0]
  } catch (error) {
    return []
  }
}
