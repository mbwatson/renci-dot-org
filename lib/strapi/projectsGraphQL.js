import { fetchStrapiGraphQL } from './'
import { fetchPeopleByPIDs } from './'
import homeHero from '../../images/racks.jpg'

export const fetchStrapiProjects = async (preview = false) => {
  const { data } = await fetchStrapiGraphQL(`query {
    projects (sort: ["name"] pagination: { limit: 150}){
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
    return array.map((project) => ({
      id: project.id,
      name: project.attributes.name,
      slug: project.attributes.slug,
      description: project.attributes.description,
      featuredImage: project.attributes.featuredImage.data?.attributes ? project.attributes.featuredImage.data.attributes.url : homeHero.src
    }))
  }

  const payload = getPayload(data.projects.data)

  return payload
}

export const fetchStrapiProject = async (id, preview = false) => {

  const { data: projectData } = await fetchStrapiGraphQL(`query {
    projects(filters: { project_id:{ eq:"${ id }" }} ) {
      data {
        id
        attributes {
          name
          description
          featuredImage {
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
  const memberPIDs = await projectData.projects.data[0].attributes.members.data.map((member)=> ( member.attributes.pid))

  // call a function that takes the array of PIDs, queries those people, and returns an 
  // array of people objects that you can reference in the payload object below

  const peopleData = await fetchPeopleByPIDs(memberPIDs)

  // construct a new project object combining and massaging/flattening data from 
  // the project query and the people query
  const payload = {
    id: projectData.projects.data[0].id,
    name: projectData.projects.data[0].attributes.name,
    members: peopleData ? peopleData : [],
  }

  // return one mega payload object
  return payload
}
