import { Fragment } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Typography } from '@mui/material'
import { Link, Page } from '../../components'
import { Pre } from '../../components/pre'
import { fetchStrapiProjects } from "../../lib/strapi";

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

      <Typography paragraph>
        Learn more about each project at RENCI below. 
      </Typography>

      <ul>
        {
          researchGroups.map(group => (
            <li key={ `link-to-${ group.name }` }>
              <Link to={ `/groups/${ group.slug }` }>
                { group.name }
              </Link>
            </li>
          ))
        }
      </ul>

      {
        projects.map(project => (
          <Fragment key={ project.slug }>
            <Link to={ `/projects/${ project.slug }` }>
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
  const projects = await fetchStrapiProjects();

  return {
    props: { projects },
  };
}