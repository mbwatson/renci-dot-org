import { fetchGraphQL } from './'

export const fetchPeople = async (preview = false) => {
  const response = await fetchGraphQL(`query {
    personCollection(order: [lastName_ASC]) {
      items {
        pid
        slug
        firstName
        lastName
        title
      }
    }
  }`, preview)
  return response.data.personCollection.items
}

export const fetchPerson = async (slug, preview = false) => {
  const response = await fetchGraphQL(`query {
    personCollection(where: { slug: "${ slug }" }, limit: 1) {
      items {
        slug
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
