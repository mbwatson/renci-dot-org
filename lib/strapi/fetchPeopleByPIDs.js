import { fetchStrapiGraphQL } from '.'

export const fetchPeopleByPIDs = async (memberPIDs) => {
  // format the PID array so that the people query can accept
  const formatPIDs = memberPIDs.join('" , "')

  // build people query that accepts the pids from the project's members array
  // using the pids, query only the people whos PID matches the array
  const { data: peopleData } = await fetchStrapiGraphQL(`query {
    people(filters: {pid: { in: ["${formatPIDs}"] }}) {
      data {
        attributes {
          pid
          firstName
          lastName
          slug
          photo {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }`)

  return peopleData.people.data

}

export const fetchPeopleExcludePIDs = async (memberPIDs) => {
  // format the PID array so that the people query can accept
  const formatPIDs = memberPIDs.join('" , "')

  // build people query that accepts the pids from the project's members array
  // using the pids, query only the people whos PID matches the array
  const { data: peopleData } = await fetchStrapiGraphQL(`query {
    people(filters: {pid: { notIn: ["${formatPIDs}"] }}) {
      data {
        attributes {
          pid
          firstName
          lastName
          slug
          photo {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }`)

  return peopleData.people.data

}
