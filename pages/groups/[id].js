import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Typography, Box } from '@mui/material'
import { fetchStrapiGroup } from '../../lib/strapi'
import { Link, Page, Pre } from '../../components'
import { Section } from '../../components/layout'
import { PersonList } from '../../components/people/'
import { PersonCard, PersonGrid } from "../../components/people/";

export default function ResearchGroup() {
  const router = useRouter()
  const [researchGroup, setResearchGroup] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const group = await fetchStrapiGroup(router.query.id)
      setResearchGroup(group)
    }
    fetchData()
  }, [router.query.id])

  if (!researchGroup) {
    return 'Loading...'
  }

  return (
    <Page
      title={ `${ researchGroup.name }` }
      description={ researchGroup.description }
      heroImage={ researchGroup.featuredImage ? researchGroup.featuredImage.url : null }
    >
    
      <Typography paragraph>{researchGroup.description}</Typography>
      <br/>
      
      <Section title="Current Projects">
        <ul>
          {
            researchGroup.projects
              .sort((p, q) => p.name.toLowerCase() < q.name.toLowerCase() ? -1 : 1)
              .filter(project => !project.active)
              .map(project => (
                <li key={ `${ researchGroup.name }-${ project.name }` }>
                  <Link to={ `/projects/${ project.slug }` }>{ project.name }</Link>
                </li>
              ))
          }
        </ul>
      </Section>

      <Section title="Team Members">
       <PersonGrid>
          {
            researchGroup.members.filter(person => person.active).map(person => (
              <PersonCard key={ person.slug } person={ person } showTitle={true}/>
            ))
          }
        </PersonGrid>
      </Section>

    </Page>
  )
}
