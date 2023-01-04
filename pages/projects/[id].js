import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Typography } from '@mui/material'
import { fetchStrapiProject } from '../../lib/strapi'
import { Page } from '../../components'
import { Pre } from '../../components/pre'
import { Section } from '../../components/layout'
import { PersonList } from '../../components/people/'

export default function Project() {
  const router = useRouter()
  const [project, setProject] = useState(null)

  try {
    useEffect(() => {
    const fetchData = async () => {
      const project = await fetchStrapiProject(router.query.id)
      setProject(project)
    }
    fetchData()
    .catch(console.error)
  }, [router.query.id])

  if (!project) {
    return 'Loading...'
  }
} catch (error) {
  console.log(error.response)
}



  return (
    <Page
      title={ `${ project.name }` }
      description={ project.description }
      heroImage={ project.featuredImage ? project.featuredImage.url : null }
    >
      
      <Typography paragraph>{project.description}</Typography>
      <br/>

    <Section title="Contributors">
        <PersonList people={ project.members } />
      </Section>
    </Page>
  )
}
