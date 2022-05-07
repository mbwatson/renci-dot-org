import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Typography } from '@mui/material'
import { fetchTeam } from '../../lib/contentful'
import { Page } from '../../components'
import { Pre } from '../../components/pre'
import { Section } from '../../components/layout'

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
        Coming soon...
      </Section>

      <Pre>
        { JSON.stringify(team, null, 2) }
      </Pre>

    </Page>
  )
}
