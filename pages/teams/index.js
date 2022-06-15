import { Fragment } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Typography } from '@mui/material'
import { fetchTeams } from '../../lib/contentful'
import { Link, Page } from '../../components'
import { Pre } from '../../components/pre'

export default function Teams({ teams }) {
  return (
    <Page
      title="Operational Teams"
      description="RENCI's operational teams..."
    >
      <Typography paragraph>
        Given RENCI's agile an fast-paced environment, the operations teams are
        essential to keeping things running smoothly and efficiently.
        Each of these teams plays a vital role in developing RENCI's processes,
        projects, and overall functionality. From our premier project
        management group organizing many complex and high-profile projects to
        our finance team diligently managing budgets and submitting proposals,
        RENCI has a robust and respected team of stagg members that streamline
        the foundational requirements of creating andsharing quality data
        science research.
      </Typography>

      <Typography paragraph>
        Learn more about RENCI's Operations teams below.
      </Typography>

      {
        teams.map(team => (
          <Fragment key={ team.id }>
            <Link to={ `/teams/${ team.id }` }>
              { team.name }
            </Link>
            <Pre>
              { JSON.stringify(team, null, 2) }
            </Pre>
          </Fragment>
        ))
      }

    </Page>
  )
}

export async function getStaticProps(context) {
  const teams = await fetchTeams()
  return {
    props: { teams },
  }
}