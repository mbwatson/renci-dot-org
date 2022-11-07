import { fetchStrapiGraphQL } from './'
import { fetchPeopleByPIDs } from './'
import genericAvatar from '../../images/generic-avatar.png'

export const fetchStrapiGroups = async (preview = false) => {
  const { data } = await fetchStrapiGraphQL(`query {
    researchGroups {
      data {
        id
        attributes {
          name
          description
          slug
          featuredImage {
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

  const getPayload = (array) => {
    return array.map((group) => ({
      id: group.id,
      name: group.attributes.name,
      slug: group.attributes.slug,
    }))
  }
  const payload = getPayload(data.researchGroups.data)

  return payload
}

export const fetchStrapiGroup = async (id, preview = false) => {

  const { data: groupData } = await fetchStrapiGraphQL(`query {
    researchGroups (filters: { slug: { eq:"${ id }" }}) {
      data {
        id
        attributes {
          name
          description
          slug
          featuredImage {
            data {
              attributes {
                url
              }
            }
          }
          members {
            data {
              attributes {
                pid
              }
            }
          }
          projects {
            data {
              attributes {
                project_id
                name
              }
            }
          }
        }
      }
    }
  }`, preview)

  // create an array of PIDs for the members of the project
  const memberPIDs = await groupData.researchGroups.data[0].attributes.members.data.map((member)=> ( member.attributes.pid))
  
  // call a function that takes the array of PIDs, queries those people, and returns an 
  // array of people objects that you can reference in the payload object below

  const peopleData = await fetchPeopleByPIDs(memberPIDs)

  // construct a new groups object combining and massaging/flattening data from 
  // the groups query and the people query
  const payload = {
    id: groupData.researchGroups.data[0].id,
    name: groupData.researchGroups.data[0].attributes.name,
    description: groupData.researchGroups.data[0].attributes.description,
    role: groupData.researchGroups.data[0].attributes.role,
    slug: groupData.researchGroups.data[0].attributes.slug,
    members: peopleData ? peopleData.map((member) => ({
      fullName: `${member.attributes.firstName} ${member.attributes.lastName}`,
      firstName: member.attributes.firstName,
      lastName: member.attributes.lastName,
      pid: member.attributes?.pid,
      slug: member.attributes?.slug,
      photoURL: member.attributes.photo.data[0]?.attributes ? member.attributes.photo.data[0].attributes.url : genericAvatar.src
    })) : [],
    projects: groupData.researchGroups.data[0].attributes.projects.data ? groupData.researchGroups.data[0].attributes.projects.data.map((project) => ({
      slug: project.attributes.project_id,
      name: project.attributes.name,
    })) : [],
  }

  // return one mega payload object
  return payload
}
