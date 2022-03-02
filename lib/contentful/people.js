import { fetchGraphQL } from './'

export const fetchPeople = async (preview = false) => {
  const { data } = await fetchGraphQL(`query {
    personCollection(order: [lastName_ASC]) {
      items {
        id
        firstName
        lastName
        title
      }
    }
  }`, preview)
  return data.personCollection.items
}

export const fetchPerson = async (id, preview = false) => {
  const response = await fetchGraphQL(`query {
    personCollection(where: { id: "${ id }", limit: 1) {
      items {
        firstName
        lastName
        title
        email
        phoneNumber
        biography
      }
    }
  }`, preview)
  return await response.data.personCollection.items[0]
}
