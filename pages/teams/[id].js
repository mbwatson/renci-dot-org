import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Typography, Box } from '@mui/material'
import { fetchStrapiTeam } from '../../lib/strapi'
import { Page } from '../../components'
import { PersonCard, PersonGrid } from "../../components/people/";
import { Section } from '../../components/layout'

export default function ResearchGroup() {
  const router = useRouter()
  const [team, setTeam] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const group = await fetchStrapiTeam(router.query.id)
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
      <Typography paragraph>{team.description}</Typography>
      <br/>
      <Section title="Team Members">
       <PersonGrid size="small">
          {
            team.members.map(person => (
              <PersonCard key={ person.slug } person={ person } showTitle={true}/>
            ))
          }
        </PersonGrid>
      </Section>

    </Page>
  )
}
