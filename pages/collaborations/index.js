import { Fragment, useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Typography } from '@mui/material'
import { fetchCollaborations } from '../../lib/contentful'
import { Link, Page } from '../../components'
import { Pre } from '../../components/pre'

export default function ResearchGroups() {
  const [collaborations, setCollaborations] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const collabs = await fetchCollaborations()
      setCollaborations(collabs)
    }
    fetchData()
  }, [])


  return (
    <Page
      title="Collaborations"
      description="RENCI's collaborations..."
    >
      <Typography paragraph>
        Sunt in officia anim aute occaecat sed dolor sit nulla pariatur dolor duis velit veniam.
        Lorem ipsum cupidatat fugiat adipisicing dolore elit duis reprehenderit anim incididunt in incididunt deserunt sunt culpa fugiat eu minim veniam.
        Veniam laborum mollit commodo labore excepteur ut sunt dolore dolor in minim enim officia sit occaecat in cillum ullamco.
        Lorem ipsum ad tempor ea elit anim aliqua nulla exercitation veniam id non elit in in deserunt magna.
      </Typography>

      {
        collaborations.map(collaboration => (
          <Fragment key={ collaboration.id }>
            <Link to={ `/collaborations/${ collaboration.id }` }>
              { collaboration.name }
            </Link>
            <Typography paragraph>
              { collaboration.description }
            </Typography>
            <Pre>
              { JSON.stringify(collaboration, null, 2) }
            </Pre>
          </Fragment>
        ))
      }

    </Page>
  )
}
