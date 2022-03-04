import { Fragment, useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Box, Card, CardHeader, CardContent, Grid, Typography } from '@mui/material'
import { fetchPeople } from '../../lib/contentful'
import { Link, Page } from '../../components'
import { Pre } from '../../components/pre'

const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')

export default function People({ people }) {
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

      <Box sx={{ display: 'flex', gap: '1rem', border: '1px dashed crimson' }}>
        <Box component="nav" sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          gap: '4px',
          position: 'sticky',
          top: '10rem',
          border: '2px dashed blue',
          alignSelf: 'flex-start',
        }}>
          {
            letters.map(letter => (
              <Link to={ `#${ letter }` } key={ letter }>{ letter }</Link>
            ))
          }
        </Box>
        <Box sx={{
          flex: 1,
          border: '2px dashed blue',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
        }}>
          {
            people.map(person => (
              <Card key={ person.slug } sx={{ height: '100%' }} elevation={ 0 } name={ person.lastName[0] }>
                <CardContent>
                  <Pre>
                    { JSON.stringify(person, null, 2) }
                  </Pre>
                  <Link to={ `/people/${ person.slug }` }>
                    { person.firstName } { person.lastName }
                  </Link>
                  <Typography>{ person.title }</Typography>
                </CardContent>
              </Card>
            ))
          }
        </Box>
      </Box>

    </Page>
  )
}


export async function getStaticProps(context) {
  const people = await fetchPeople()
  return {
    props: { people },
  }
}