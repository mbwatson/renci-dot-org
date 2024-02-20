import { Fragment } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Typography, Stack } from '@mui/material'
import { Link, Page } from '../components'
import homeHero from '../images/racks.jpg'
import { ProjectSpotlight } from '../components/projectSpotlight'
import { fetchDashboardProjects } from "@/lib/dashboard/projects";
import { fetchHomeNews } from '../lib/strapi'
import { HomePageArticlePreview } from "../components/news/article-preview";

export default function Home({ selectedProjects, newsArray }) {

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
      
      <ProjectSpotlight selectedProjects={selectedProjects}/>
      {
        newsArray && (
          <Fragment>
            <Typography variant='h2' sx={{paddingTop: '1rem'}}>Recent News</Typography>
            <Stack direction='column' gap={2} paddingY={2}>
              { newsArray.map((article, i) => (
                <HomePageArticlePreview
                  key={i}
                  article={article}
                />
              ))}
            </Stack>
          </Fragment>
        )
      }
      
    </Page>
  )
}

export async function getServerSideProps({ res }) {
  try {
    res.setHeader(
      'Cache-Control',
      'no-cache, no-store, must-revalidate'
    )
  
    const [newsArray, projects] = await Promise.all([
      fetchHomeNews(),
      fetchDashboardProjects(),
    ]);
    
    let projectsCopy = [...projects]
    let projectSelection = []
    for (let i = 0; i < 3; i += 1) {
      const randomIndex = Math.floor(Math.random() * projectsCopy.length)
      const randomProject = projectsCopy.splice(randomIndex, 1)[0]
      //add a property that is a snippet of the original description before pushing to the array
      projectSelection.push({
        ...randomProject,
      })
    }

    return {
      props: { 
        selectedProjects: JSON.parse(JSON.stringify(projectSelection)), 
        newsArray: JSON.parse(JSON.stringify(newsArray)) 
      },
    }
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: { selectedProjects: [], newsArray: [] }
    };
  }
}
