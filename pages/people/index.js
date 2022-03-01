import { Fragment, useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Typography } from '@mui/material'
import { fetchPeople } from '../../lib/contentful'
import { Link, Page } from '../../components'
import { Pre } from '../../components/pre'

export default function People() {
  const [people, setPeople] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const people = await fetchPeople()
      setPeople(people)
    }
    fetchData()
  }, [])

  return (
    <Page
      title="People"
      description="RENCI is comprised of people who contribute to research groups, operational units, and collaborations."
    >
      <Typography paragraph>
        Laborum consequat voluptate culpa non non consectetur ut minim consectetur minim duis enim laboris elit consectetur ut.
        Reprehenderit aliqua eu qui quis ut veniam elit adipisicing minim veniam exercitation culpa sit sit est reprehenderit culpa.
        Exercitation laboris consectetur irure aliquip deserunt sint dolore mollit labore adipisicing eu.
        Consectetur aute tempor culpa fugiat qui anim ut aliqua tempor laboris dolor nulla.
      </Typography>

      {
        people.map(person => (
          <Fragment key={ person.id }>
            <Link to={ `/people/${ person.id }` }>
              { person.firstName } { person.lastName }
            </Link>
            <Pre>
              { JSON.stringify(person, null, 2) }
            </Pre>
          </Fragment>
        ))
      }

    </Page>
  )
}
