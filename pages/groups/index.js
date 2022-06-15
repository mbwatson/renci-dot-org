import { Fragment } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Typography } from '@mui/material'
import { fetchResearchGroups } from '../../lib/contentful'
import { Link, Page } from '../../components'
import { Pre } from '../../components/pre'

export default function ResearchGroups({ researchGroups }) {
  return (
    <Page
      title="Research Groups"
      description="RENCI's research groups..."
    >
      <Typography paragraph>
        Research is the heart of the work we do at RENCI.
        Centered around data science, each domain-specific group offers
        scientific and technical expertise to advance discovery within
        their field.
      </Typography>

      <Typography paragraph>
        Learn more about each research group at RENCI below. 
      </Typography>

      {
        researchGroups.map(group => (
          <Fragment key={ group.id }>
            <Link to={ `/groups/${ group.id }` }>
              { group.name }
            </Link>
            <Pre>
              { JSON.stringify(group, null, 2) }
            </Pre>
          </Fragment>
        ))
      }

    </Page>
  )
}

export async function getStaticProps(context) {
  const researchGroups = await fetchResearchGroups()
  return {
    props: { researchGroups },
  }
}