import { fetchGraphQL } from './'

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
        photo {
          url
        }
        linkedFrom {
          researchGroupCollection {
            items {
              id
              name
            }
          }
          collaborationCollection {
            items {
              id
              name
            }
          }
          teamCollection {
            items {
              id
              name
            }
          }
        }
      }
    }
  }`, preview)
  const person = await response.data.personCollection.items[0]
  if (!response.data.personCollection.items[0]) {
    return null
  }
  person.contributions = [
    ...response.data.personCollection.items[0].linkedFrom.researchGroupCollection.items
      .map(item => ({ ...item, type: 'group' })),
    ...response.data.personCollection.items[0].linkedFrom.collaborationCollection.items
      .map(item => ({ ...item, type: 'collaboration' })),
    ...response.data.personCollection.items[0].linkedFrom.teamCollection.items
      .map(item => ({ ...item, type: 'team' })),
  ].sort((c, d) => c.name.toLowerCase() < d.name.toLowerCase() ? -1 : 1)
  delete response.data.personCollection.items[0].linkedFrom
  console.log(person)
  return person
}

