import { Fragment, useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Typography } from '@mui/material'
import { fetchProjects } from '../../lib/contentful'
import { Link, Page } from '../../components'
import { Pre } from '../../components/pre'

export default function Projects({ projects }) {
  return (
    <Page
      title="Projects"
      description="RENCI's projects..."
    >
      <Typography paragraph>
        Sunt in officia anim aute occaecat sed dolor sit nulla pariatur dolor duis velit veniam.
        Lorem ipsum cupidatat fugiat adipisicing dolore elit duis reprehenderit anim incididunt in incididunt deserunt sunt culpa fugiat eu minim veniam.
        Veniam laborum mollit commodo labore excepteur ut sunt dolore dolor in minim enim officia sit occaecat in cillum ullamco.
        Lorem ipsum ad tempor ea elit anim aliqua nulla exercitation veniam id non elit in in deserunt magna.
      </Typography>

      {
        projects.map(project => (
          <Fragment key={ project.id }>
            <Link to={ `/projects/${ project.id }` }>
              { project.name }
            </Link>
            <Pre>
              { JSON.stringify(project, null, 2) }
            </Pre>
          </Fragment>
        ))
      }

    </Page>
  )
}


export async function getStaticProps(context) {
  const projects = await fetchProjects()
  return {
    props: { projects },
  }
}