import { Fragment } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

import { Typography, Grid } from '@mui/material'
import { fetchStrapiGroups } from '../../lib/strapi'
import { Link, Page } from '../../components'
import { Pre } from '../../components/pre'
import { ListItemCard } from '../../components/list-card'


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
      <ImageList gap={10} sx={{maxWidth: 1200,  margin: 'auto', display: 'flex', flexDirection: 'column'}}>
      {
        researchGroups.map(group => (
          <div style={{
            display: 'flex',
            margin: '1rem auto',
          }}>
            <div style={{width: '300px'}}>
              <ListItemCard group={group} contentType='researchGroups' />
            </div>
            <div style={{padding: '0 2rem', maxWidth: '900px'}}>
              <Typography variant="h2">{group.name}</Typography>
              <br/>
              {group.description}
            </div>
          </div>
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
  
  const researchGroups = await fetchStrapiGroups()
  return {
    props: { researchGroups: JSON.parse(JSON.stringify(researchGroups)) },
  }
}