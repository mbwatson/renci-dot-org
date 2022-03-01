import { fetchGraphQL } from './'

export const fetchCollaborations = async (preview = false) => {
  const { data } = await fetchGraphQL(`query {
    collaborationCollection(order: [name_ASC]) {
      items {
        id
        name
        description
      }
    }
  }`, preview)
  return data.collaborationCollection.items
}

export const fetchCollaboration = async (id, preview = false) => {
  const { data } = await fetchGraphQL(`query {
    collaborationCollection(where: { id: "${ id }" }, limit: 1) {
      items {
        id
        name
        description
        featuredImage {
          url
        }
      }
    }
  }`, preview)
  return data.collaborationCollection.items[0]
}
