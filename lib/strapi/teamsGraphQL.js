import { fetchStrapiGraphQL } from './'
import { fetchPeopleByPIDs } from './'
import genericAvatar from '../../images/generic-avatar.png'

export const fetchStrapiTeams = async (preview = false) => {
  const { data } = await fetchStrapiGraphQL(`query {
    teams (pagination: { limit: 50}){
      data {
        id
        attributes {
          name
          description
          role
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
    return array.map((team) => ({
      id: team.id,
      name: team.attributes.name,
      slug: team.attributes.slug,
    }))
  }
  
  const payload = getPayload(data.teams.data)

  return payload
}

export const fetchStrapiTeam = async (id, preview = false) => {

  const { data: teamData } = await fetchStrapiGraphQL(`query {
    teams(filters: { slug:{ eq:"${ id }" }} ) {
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
  }`, preview)


  // create an array of PIDs for the members of the project
  const memberPIDs = await teamData.teams.data[0].attributes.members.data.map((member)=> ( member.attributes.pid))
  
  // call a function that takes the array of PIDs, queries those people, and returns an 
  // array of people objects that you can reference in the payload object below

  const peopleData = await fetchPeopleByPIDs(memberPIDs)

  // construct a new team object combining and massaging/flattening data from 
  // the team query and the people query
  const payload = {
      id: teamData.teams.data[0].id,
      name: teamData.teams.data[0].attributes.name,
      description: teamData.teams.data[0].attributes.description,
      role: teamData.teams.data[0].attributes.role,
      slug: teamData.teams.data[0].attributes.slug,
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
