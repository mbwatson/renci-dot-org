import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Typography } from '@mui/material'
import { fetchStrapiProject } from '../../lib/strapi'
import { Link, Page } from '../../components'
import { Pre } from '../../components/pre'
import { Section } from '../../components/layout'
import { PersonList } from '../../components/people/'
import { PersonCard, PersonGrid } from "../../components/people/";

export default function Project() {
  const router = useRouter()
  const [project, setProject] = useState(null)

  try {
    useEffect(() => {
    const fetchData = async () => {
      const project = await fetchStrapiProject(router.query.id)
      setProject(project)
    }
    fetchData()
    .catch(console.error)
  }, [router.query.id])

  if (!project) {
    return 'Loading...'
  }
} catch (error) {
  console.log(error.response)
}



  return (
    <Page
      title={ `${ project.name }` }
      description={ project.description }
      heroImage={ project.featuredImage ? project.featuredImage : null }
    >
      {
        project.description && (
          <Typography paragraph>{project.description}</Typography>
        )
      }
      <br/>
      {
        project.renciRole && (
          <Section title="RENCI's Role">
            <Typography paragraph>{project.renciRole}</Typography>
          </Section>
        )
      }
      {
        project.members.length > 0 && (
          <Section title="Team Members">
            <PersonGrid>
              {
                project.members.filter(person => person.active).map(person => (
                  <PersonCard key={ person.slug } person={ person } showTitle={true}/>
                ))
              }
            </PersonGrid>
          </Section>
        )
      }
      {
        project.partners.length > 0 && 
        <Section title="Partners">
          <ul>
            {
              project.partners
                .sort((p, q) => p.name.toLowerCase() < q.name.toLowerCase() ? -1 : 1)
                .map(partner => (
                  <li key={ `${ project.name }-${ partner.name }` }>
                    <Link to={ partner.url }>{ partner.name }</Link>
                  </li>
                ))
            }
          </ul>
        </Section>
      }
      {
        project.funding.length > 0 && 
          <Section title="Funding">
            <ul>
              {
                project.funding
                  .sort((p, q) => p.name.toLowerCase() < q.name.toLowerCase() ? -1 : 1)
                  .map(partner => (
                    <li key={ `${ project.name }-${ partner.name }` }>
                      <Link to={ partner.url }>{ partner.name }</Link>
                    </li>
                  ))
              }
            </ul>
          </Section>
        }
    </Page>
  )
}
