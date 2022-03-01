import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Typography } from '@mui/material'
import { fetchResearchGroup } from '../../lib/contentful'
import { Page } from '../../components'
import { Pre } from '../../components/pre'

export default function ResearchGroup() {
  const router = useRouter()
  const [researchGroup, setResearchGroup] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const group = await fetchResearchGroup(router.query.id)
      setResearchGroup(group)
    }
    fetchData()
  }, [router.query.id])

  if (!researchGroup) {
    return 'Loading...'
  }

  return (
    <Page
      title={ `${ researchGroup.name }` }
      description={ researchGroup.description }
      heroImage={ researchGroup.featuredImage ? researchGroup.featuredImage.url : null }
    >
      <Pre>
        { JSON.stringify(researchGroup, null, 2) }
      </Pre>

    </Page>
  )
}
