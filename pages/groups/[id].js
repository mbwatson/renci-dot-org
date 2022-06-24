import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Typography, Box } from '@mui/material'
import { fetchResearchGroup } from '../../lib/contentful'
import { Page } from '../../components'
import { Section } from '../../components/layout'
import { PersonList } from '../../components/people/'

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
            
      <Section title="News">
        Coming soon...
      </Section>

      <Section title="Current Projects">
        Coming soon...
      </Section>

      <Section title="Contributors">
        <PersonList people={ researchGroup.groupMembersCollection.items } />
      </Section>

    </Page>
  )
}
