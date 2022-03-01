import { Fragment, useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Typography } from '@mui/material'
import { fetchTeams } from '../../lib/contentful'
import { Link, Page } from '../../components'
import { Pre } from '../../components/pre'

export default function Teams() {
  const [teams, setTeams] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const tms = await fetchTeams()
      setTeams(tms)
    }
    fetchData()
  }, [])

  return (
    <Page
      title="Operational Teams"
      description="RENCI's operational teams..."
    >
      <Typography paragraph>
        Aliquip labore elit sunt aliqua sit esse adipisicing mollit commodo ut.
        Quis ea dolore commodo irure aute tempor ut tempor dolor reprehenderit est.
        Quis cillum exercitation nulla ex laborum minim incididunt dolor laborum incididunt ut.
        Sint sunt cupidatat mollit consequat culpa deserunt fugiat non proident id.
      </Typography>

      {
        teams.map(team => (
          <Fragment key={ team.id }>
            <Link to={ `/teams/${ team.id }` }>
              { team.name }
            </Link>
            <Pre>
              { JSON.stringify(team, null, 2) }
            </Pre>
          </Fragment>
        ))
      }

    </Page>
  )
}
