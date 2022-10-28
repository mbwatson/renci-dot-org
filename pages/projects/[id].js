import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Typography } from '@mui/material'
import { fetchStrapiProject } from '../../lib/strapi'
import { Page } from '../../components'
import { Pre } from '../../components/pre'

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
      <Pre>
        { JSON.stringify(project, null, 2) }
      </Pre>
    <div>
      <h2>Project Members</h2>
      {project.members && project.members.map((member)=> {
        return <img width="200px" src={member.photoURL}/>
      })}
    </div>

    </Page>
  )
}
