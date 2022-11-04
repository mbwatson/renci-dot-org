import { fetchStrapiGraphQL } from './'
import { fetchPeopleByPIDs } from './'
import genericAvatar from '../../images/generic-avatar.png'

export const fetchStrapiProjects = async (preview = false) => {
  const { data } = await fetchStrapiGraphQL(`query {
    projects (pagination: { limit: 50}){
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
    projects(filters: { project_id:{ eq:"${ id }" }} ) {
      data {
        id
        attributes {
          name
          description
          featured_image {
            data {
              attributes {
                url
              }
            }
          }
          project_id
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
    name: projectData.projects.data[0].attributes.name,
    members: peopleData && peopleData.map((member) => ({
      fullName: `${member.attributes.firstName} ${member.attributes.lastName}`,
      firstName: member.attributes.firstName,
      lastName: member.attributes.lastName,
      pid: member.attributes?.pid,
      slug: member.attributes?.slug,
      photoURL: member.attributes.photo.data[0]?.attributes ? member.attributes.photo.data[0].attributes.url : genericAvatar.src
    }))
  }

  // return one mega payload object
  return payload
}
