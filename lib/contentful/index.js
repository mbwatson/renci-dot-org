import { fetchGraphQL } from './fetch-graphql'

//

export * from './fetch-graphql'
export * from './collaborations'
// export * from './organizations'
export * from './groups'
export * from './people'
export * from './person'
export * from './projects'
export * from './teams'

/*
 *
 * one-off queries
 *
 */

// populate out work tray in main menu
export const fetchOurWorkTrayItems = async (preview = false) => {
  const { data } = await fetchGraphQL(`query {
    collaborationCollection {
      items {
        id
        name
      }
    }
    researchGroupCollection {
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
  }`, preview)
  return {
    collaborationCollection: data.collaborationCollection.items,
    researchGroupCollection: data.researchGroupCollection.items,
    teamCollection: data.teamCollection.items,
  }
}
