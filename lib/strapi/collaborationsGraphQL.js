import { fetchStrapiGraphQL } from './'
import { fetchPeopleByPIDs } from './'
import genericAvatar from '../../images/generic-avatar.png'

export const fetchStrapiCollaborations = async (preview = false) => {
  const { data } = await fetchStrapiGraphQL(`query {
    collaborations (pagination: { limit: 50}){
      data {
        id
        attributes {
          name
          description
          renci_role
          slug
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

const getPayload = (array) => {
  return array.map((collaboration) => ({
    id: collaboration.id,
    name: collaboration.attributes.name,
    slug: collaboration.attributes.slug,
  }))
}

const payload = getPayload(data.collaborations.data)

  return payload
}

export const fetchStrapiCollaboration = async (id, preview = false) => {

  const { data: collaborationData } = await fetchStrapiGraphQL(`query {
    collaborations(filters: { slug:{ eq:"${ id }" }} ) {
      data {
        id
        attributes {
          name
          description
          renci_role
          featured_image {
            data {
              attributes {
                url
              }
            }
          }
          slug
          contributors {
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
          partners {
            data {
              attributes {
                name
                url
                org_id
              }
            }
          }
          funding {
            data {
              attributes {
                name
                url
                org_id
              }
            }
          }
        }
      }
    }
  }`, preview)


  // create an array of PIDs for the members of the project
  const memberPIDs = await collaborationData.collaborations.data[0].attributes.contributors.data.map((member)=> ( member.attributes.pid))
  
  // call a function that takes the array of PIDs, queries those people, and returns an 
  // array of people objects that you can reference in the payload object below

  const peopleData = await fetchPeopleByPIDs(memberPIDs)

  // construct a new collaborations object combining and massaging/flattening data from 
  // the collaborations query and the fetchPeopleByPIDs query
  const payload = {
      id: collaborationData.collaborations.data[0].id,
      name: collaborationData.collaborations.data[0].attributes.name,
      description: collaborationData.collaborations.data[0].attributes.description,
      role: collaborationData.collaborations.data[0].attributes.renci_role,
      members: peopleData ? peopleData.map((member) => ({
        fullName: `${member.attributes.firstName} ${member.attributes.lastName}`,
        firstName: member.attributes.firstName,
        lastName: member.attributes.lastName,
        pid: member.attributes?.pid,
        slug: member.attributes?.slug,
        photoURL: member.attributes.photo.data[0]?.attributes ? member.attributes.photo.data[0].attributes.url : genericAvatar.src
      })) : [],
      projects: collaborationData.collaborations.data[0].attributes.projects.data ? collaborationData.collaborations.data[0].attributes.projects.data.map((project) => ({
        slug: project.attributes.project_id,
        name: project.attributes.name,
      })) : [],
      partners: collaborationData.collaborations.data[0].attributes.partners.data ? collaborationData.collaborations.data[0].attributes.partners.data.map((partner) => ({
        slug: partner.attributes.org_id,
        name: partner.attributes.name,
        orgURL: partner.attributes.url
      })) : [],
      funding: collaborationData.collaborations.data[0].attributes.funding.data ? collaborationData.collaborations.data[0].attributes.funding.data.map((partner) => ({
        slug: partner.attributes.org_id,
        name: partner.attributes.name,
        orgURL: partner.attributes.url
      })) : [],
    }

  // return one mega payload object
  return payload
}
