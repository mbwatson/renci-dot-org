import { Fragment } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Typography } from '@mui/material'
import { Box } from '@mui/material'
import { Link, Page } from '../../components'
import { Pre } from '../../components/pre'
import { fetchStrapiProjects } from "../../lib/strapi"
import { ProjectCard } from '../../components/spotlight'

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

      <Box sx={{
        flex: 1,
        marginTop: '3rem',
        display: 'grid',
        gap: '2rem',
        gridTemplateColumns: 'repeat(auto-fit, 250px)',
      }}>
        {
          projects.map((project) => {
            return (
              <ProjectCard project={project} key={`project-${project.slug}`}/>
            )
          })
        }
      </Box>
      <br/>
    </Page>
  )
}

export async function getStaticProps(context) {
  const projects = await fetchStrapiProjects();

  return {
    props: { projects },
  };
}