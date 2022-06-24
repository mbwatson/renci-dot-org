import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Typography, Box } from '@mui/material'
import { fetchResearchGroup } from '../../lib/contentful'
import { Page, Pre } from '../../components'
import { Section } from '../../components/layout'
import { PersonCard, PersonGrid } from '../../components/people/'

export default function ResearchGroup() {
  const router = useRouter()
  const [researchGroup, setResearchGroup] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const group = await fetchResearchGroup(router.query.id)
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
            researchGroup.projectsCollection.items
              .sort((p, q) => p.name.toLowerCase() < q.name.toLowerCase() ? -1 : 1)
              .map(project => (
                <li key={ `${ researchGroup.name }-${ project.name }` }>
                  { project.name }
                </li>
              ))
          }
        </ul>
      </Section>

      <Section title="Contributors">
        <PersonGrid>
          {
            researchGroup.groupMembersCollection.items.map(person => (
              <PersonCard key={ person.slug } person={ person } showTitle={false}/>
            ))
          }
        </PersonGrid>
      </Section>

    </Page>
  )
}
