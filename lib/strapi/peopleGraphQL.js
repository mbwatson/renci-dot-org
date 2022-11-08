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

  const OODPayload = oodPeopleData.map((member) => ({
    fullName: `${member.attributes.firstName} ${member.attributes.lastName}`,
    firstName: member.attributes.firstName,
    lastName: member.attributes.lastName,
    pid: member.attributes?.pid,
    slug: member.attributes?.slug,
    photoURL: member.attributes.photo.data[0]?.attributes ? member.attributes.photo.data[0].attributes.url : genericAvatar.src
  }))

  const otherPeopleData = await fetchPeopleExcludePIDs (memberPIDs)
  
  const peoplePayload = otherPeopleData.map((member) => ({
    fullName: `${member.attributes.firstName} ${member.attributes.lastName}`,
    firstName: member.attributes.firstName,
    lastName: member.attributes.lastName,
    pid: member.attributes?.pid,
    slug: member.attributes?.slug,
    photoURL: member.attributes.photo.data[0]?.attributes ? member.attributes.photo.data[0].attributes.url : genericAvatar.src
  }))


return { ood: oodPeopleData, people: otherPeopleData }
}

export const fetch = async (preview = false) => {
  const { data } = await fetchStrapiGraphQL(`query {
    projects (pagination: { limit: 250}){
      data {
        id
        attributes {
          name
          description
          project_id
          featured_image {
            data {
              attributes {
                url
              }
            }
          }    
        }
      }
    }
  }`, preview)
  return data.projects.data
}

export const fetchStrapiProject = async (id, preview = false) => {

  const { data: projectData } = await fetchStrapiGraphQL(`query {


  }`, preview)


  // create an array of PIDs for the members of the project
  const memberPIDs = await projectData.projects.data[0].attributes.members.data.map((member)=> ( member.attributes.pid))

  // call a function that takes the array of PIDs, queries those people, and returns an 
  // array of people objects that you can reference in the payload object below

  const peopleData = await fetchPeopleByPIDs(memberPIDs)

  // construct a new project object combining and massaging/flattening data from 
  // the project query and the people query
  const payload = {
    id: projectData.projects.data[0].id,

  }

  // return one mega payload object
  return payload
}
