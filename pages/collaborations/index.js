import { Fragment } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Typography } from '@mui/material'
import { fetchStrapiCollaborations } from '../../lib/strapi'
import { Link, Page } from '../../components'
import { Pre } from '../../components/pre'
import ImageList from '@mui/material/ImageList';
import { ListItemCard } from '../../components/card'

export default function ResearchGroups({ collaborations }) {
  return (
    <Page
      title="Collaborations"
      description="RENCI's collaborations..."
    >
      <Typography paragraph>
        RENCI’s expertise in leading and coordinating large and complex team
        science projects is recognized at the national scale, and our growing
        outreach and engagement expertise has landed us funding on multiple
        new federal projects. Though we have well-established and recognized
        expertise in many domain-specific areas, we know that our potential for
        success and impact on society is far greater when we combine our
        expertise and resources with other teams, and we strive to continuously
        and intentionally embody the spirit of collaboration.
      </Typography>

      <Typography paragraph>
        The vast majority of RENCI projects employ some form of collaboration.
        By clicking the links below, you can learn more about RENCI’s projects
        that exist explicitly to bring people together around important
        data science initiatives.
      </Typography>

      <ImageList gap={10} sx={{width: 1000,  margin: 'auto'}}>
      {
        collaborations.map(group => (
          <ListItemCard group={group}/>
        ))
      }
      </ImageList>
<br/>
<br/>

    </Page>
  )
}

export async function getServerSideProps({ res }) {
  res.setHeader(
    'Cache-Control',
    'no-cache, no-store, must-revalidate'
  )
  
  const collaborations = await fetchStrapiCollaborations()
  return {
    props: { collaborations: JSON.parse(JSON.stringify(collaborations)) },
  }
}