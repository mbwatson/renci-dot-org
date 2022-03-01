import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Typography } from '@mui/material'
import { fetchCollaboration } from '../../lib/contentful'
import { Page } from '../../components'
import { Pre } from '../../components/pre'

export default function Collaboration() {
  const router = useRouter()
  const [collaboration, setCollaboration] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const collab = await fetchCollaboration(router.query.id)
      setCollaboration(collab)
    }
    fetchData()
  }, [router.query.id])

  if (!collaboration) {
    return 'Loading...'
  }

  return (
    <Page
      title={ `${ collaboration.name }` }
      description={ collaboration.description }
      heroImage={ collaboration.featuredImage ? collaboration.featuredImage.url : null }
    >
      <Pre>
        { JSON.stringify(collaboration, null, 2) }
      </Pre>

    </Page>
  )
}
