import { Fragment, useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Typography } from '@mui/material'
import { Link, Page } from '../components'
import homeHero from '../images/racks.jpg'
import { ProjectSpotlight } from '../components/projectSpotlight'
import { fetchActiveStrapiProjects } from '../lib/strapi'

export default function Home({ selectedProjects}) {
  const [newsArray, setNewsArray] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://api.renci.org/api/post-list', {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const result = await response.json();
        setNewsArray(result.results.slice(0, 3));
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    // Call the fetchData function
    fetchData();
  }, [setNewsArray, setLoading, setError])
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
    </Page>
  )
}

export async function getServerSideProps({ res }) {
  res.setHeader(
    'Cache-Control',
    'no-cache, no-store, must-revalidate'
  )
  
  const projects = await fetchActiveStrapiProjects()

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
    props: { selectedProjects: JSON.parse(JSON.stringify(projectSelection)) },
  }
}
