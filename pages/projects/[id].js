import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Typography } from '@mui/material'
import { fetchProject } from '../../lib/contentful'
import { Page } from '../../components'
import { Pre } from '../../components/pre'

export default function Project() {
  const router = useRouter()
  const [project, setProject] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const project = await fetchProject(router.query.id)
      setProject(project)
    }
    fetchData()
  }, [router.query.id])

  if (!project) {
    return 'Loading...'
  }

  return (
    <Page
      title={ `${ project.name }` }
      description={ project.description }
      heroImage={ project.featuredImage ? project.featuredImage.url : null }
    >
      <Pre>
        { JSON.stringify(project, null, 2) }
      </Pre>

    </Page>
  )
}
