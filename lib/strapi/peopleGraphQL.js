import { fetchStrapiGraphQL } from './'
import { fetchPeopleByPIDs, fetchPeopleExcludePIDs } from './'
import genericAvatar from '../../images/generic-avatar.png'

// the logic :
// fetch OOD team, get PIDs
// fetch people data using OOD PIDs
// fetch remaining people excluding OOD PIDs

// Write query for individual people

export const fetchStrapiPeople = async () => {
  // fetch OOD
  const { data } = await fetchStrapiGraphQL(`query {
    teams(filters: { slug: { eq: "ood" }} ) {
      data {
        attributes {
          slug
          members {
            data {
              attributes {
                pid
              }
            }
          }
        }
      }
    }
  }`)

  const memberPIDs = await data.teams.data[0].attributes.members.data.map((member)=> ( member.attributes.pid))
  
  const oodPeopleData = await fetchPeopleByPIDs(memberPIDs)
  const otherPeopleData = await fetchPeopleExcludePIDs (memberPIDs)

return { ood: oodPeopleData, people: otherPeopleData }
}


export const fetchStrapiPerson = async (id) => {

  const { data: peopleData } = await fetchStrapiGraphQL(`query {
    people(filters: { slug:{ eq:"${id}" }} ) {
      data {
        attributes {
          pid
          firstName
          lastName
          slug
          title
          email
          biography
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

  const payload = {
    id: peopleData.people.data[0].id,
    fullName: `${peopleData.people.data[0].attributes.firstName} ${peopleData.people.data[0].attributes.lastName}`,
    firstName: peopleData.people.data[0].attributes.firstName,
    lastName: peopleData.people.data[0].attributes.lastName,
    pid: peopleData.people.data[0].attributes?.pid,
    slug: peopleData.people.data[0].attributes?.slug,
    title: peopleData.people.data[0].attributes?.title,
    email: peopleData.people.data[0].attributes?.email,
    biography: peopleData.people.data[0].attributes?.biography,
    photoURL: peopleData.people.data[0].attributes.photo.data[0]?.attributes ? peopleData.people.data[0].attributes.photo.data[0].attributes.url : genericAvatar.src
  }

  return payload
}
