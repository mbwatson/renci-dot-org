import { fetchGraphQL } from './'

export const fetchTeams = async (preview = false) => {
  const { data } = await fetchGraphQL(`query {
    teamCollection(order: [name_ASC]) {
      items {
        id
        name
        description
      }
    }
  }`, preview)
  return data.teamCollection.items
}

export const fetchTeam = async (id, preview = false) => {
  const { data } = await fetchGraphQL(`query {
    teamCollection(where: { id: "${ id }" }, limit: 1) {
      items {
        id
        name
        description
        featuredImage {
          url
        }
        teamMembersCollection {
          items {
            id
            firstName
            lastName
          }
        }
      }
    }
  }`, preview)
  return data.teamCollection.items[0]
}
