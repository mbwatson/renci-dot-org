import { fetchGraphQL } from './'

export const fetchOrganizations = async (preview = false) => {
  const { data } = await fetchGraphQL(`query {
    organizationCollection(order: [name_ASC]) {
      items {
        id
        name
        url
      }
    }
  }`, preview)
  return data.organizationCollection.items
}

export const fetchOrganization = async (id, preview = false) => {
  const { data } = await fetchGraphQL(`query {
    organizationCollection(where: { id: "${ id }", limit: 1) {
      items {
        id
        name
        url
      }
    }
  }`, preview)
  return data.organizationCollection.items[0]
}
