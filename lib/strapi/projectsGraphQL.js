import { fetchStrapiGraphQL } from './'

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
  const { data } = await fetchStrapiGraphQL(`query {
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
                firstName
                lastName
              }
            }
          }
        }
      }
    }
  people (pagination: { limit: 200}){
    data {
      attributes {
        pid
        slug
        firstName
        lastName
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
  }`, preview)
  return data
}
