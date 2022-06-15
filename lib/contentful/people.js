import { fetchGraphQL } from './'

export const fetchPeople = async (preview = false) => {
  const response = await fetchGraphQL(`query {
    personCollection(order: [lastName_ASC]) {
      items {
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
        photo {
          url
        }

      }
    }
  }`, preview)
  return await response.data.personCollection.items[0]
}

export const fetchPeopleForPeopleView = async (preview = false) => {
  const response = await fetchGraphQL(`query {
    personCollection(order: [lastName_ASC]) {
      items {
        slug
        firstName
        lastName
        title
        photo {
          url
        }
        linkedFrom {
          teamCollection {
            items {
              id
            }
          }
        }
      }
    }
  }`, preview)
  
  /*
   *
   * The people view lists all employees, with OOD separated from non-OOD folks.
   * Below, we group the personCollection.items array from the graphql response into
   * an object of shape
   * {
   *   ood: […],
   *   rest: […],
   * }
   * so that we can loop over the two people groups separately.
   *
   */
  const peopleBuckets = response.data.personCollection.items
    .reduce((buckets, person) => {
      if (
        person.linkedFrom.teamCollection.items?.length
        && person.linkedFrom.teamCollection.items.findIndex(team => team.id === 'ood') > -1
      ) {
        delete person.linkedFrom
        return { ood: [...buckets.ood, person], rest: [...buckets.rest] }
      } else {
        delete person.linkedFrom
        return { ood: [...buckets.ood], rest: [...buckets.rest, person] }
      }
    }, { ood: [], rest: [] })
  
  return peopleBuckets
}
