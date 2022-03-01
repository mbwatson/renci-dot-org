import { fetchGraphQL } from './'

export const fetchProjects = async (preview = false) => {
  const { data } = await fetchGraphQL(`query {
    projectCollection(order: [name_ASC]) {
      items {
        id
        name
        description
      }
    }
  }`, preview)
  return data.projectCollection.items
}

export const fetchProject = async (id, preview = false) => {
  const { data } = await fetchGraphQL(`query {
    projectCollection(where: { id: "${ id }", limit: 1) {
      items {
        id
        name
        description
        featuredImage {
          url
        }
        contributorsCollection {
          items {
            id
            firstName
            lastName
          }
        }
      }
    }
  }`, preview)
  return data.projectCollection.items[0]
}
