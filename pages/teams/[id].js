import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Typography, Box } from '@mui/material'
import { fetchTeam } from '../../lib/contentful'
import { Page } from '../../components'
import { Section } from '../../components/layout'
import { PersonCard } from '../../components/person-card'

export default function ResearchGroup() {
  const router = useRouter()
  const [team, setTeam] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const group = await fetchTeam(router.query.id)
      setTeam(group)
    }
    fetchData()
  }, [router.query.id])

  if (!team) {
    return 'Loading...'
  }

  return (
    <Page
      title={ `${ team.name }` }
      description={ team.description }
      heroImage={ team.featuredImage ? team.featuredImage.url : null }
    >
      <Section title="Team Members">
        <Box sx={{
            flex: 1,
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          }}>
          {
            team.teamMembersCollection.items.map(person => (
              <PersonCard key={ person.slug } person={ person } />
            ))
          }
        </Box>
      </Section>

    </Page>
  )
}
