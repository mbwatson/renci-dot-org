import { Fragment } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Typography } from '@mui/material'
import { Link, Page } from '../components'
import homeHero from '../images/racks.jpg'
import { Spotlight } from '../components/spotlight'
import { fetchProjects } from '../lib/contentful'
import { fetchStrapiProjects } from '../lib/strapi'

export default function Home({ projects}) {
  return (
    <Page
      title="Home"
      description="Welcome to RENCI.org"
      heroImage={ homeHero.src }
    >
      <Typography paragraph>
        Lorem ipsum dolor eiusmod quis excepteur mollit sit elit labore non aliqua.
        Consequat voluptate elit magna laboris anim do officia ea proident ad.
        Reprehenderit consequat officia aliquip non ea laborum aliquip ut commodo aliquip exercitation ut cupidatat eiusmod fugiat dolore ut.
        Lorem ipsum magna occaecat non ut pariatur dolor ullamco ut in non aute sunt esse ex.
        Occaecat irure irure anim quis sit velit nulla ut tempor non aliqua sed nulla nostrud excepteur magna.
        Esse incididunt ex ea pariatur nisi sit quis est anim incididunt in culpa laboris.
      </Typography>
      <Spotlight projects={projects}/>
    </Page>
  )
}

export async function getStaticProps(context) {
  const projects = await fetchStrapiProjects()
  return {
    props: { projects },
  }
}
