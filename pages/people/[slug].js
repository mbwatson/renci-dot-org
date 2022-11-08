import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { Divider, Grid, Typography } from '@mui/material'
import { fetchStrapiPerson } from "../../lib/strapi";
import { Link, LinkTray, Page, Pre, Section } from '../../components'

export default function Person() {
  const router = useRouter()
  const [person, setPerson] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const person = await fetchStrapiPerson(router.query.slug)
      if (!person) { return }
      setPerson(person)
    }
    fetchData()
  }, [router.query.slug])


  if (!person) {
    return 'Loading...'
  }
  return (
    <Page title={ `${ person.firstName } ${ person.lastName }` } hideTitle>
      <Grid container spacing={ 2 } columns={ 8 }>
        <Grid item xs={ 8 } sm={ 3 }>
          <Image
            priority
            src={ person.photoURL }
            width={ 400 }
            height={ 400 }
            layout="responsive"
            alt={`${person.slug}-photo`}
          />
        </Grid>
        <Grid item xs={ 8 } sm={ 5 }>
          <Typography variant="h1">
            { person.firstName } { person.lastName }
          </Typography>
          <Typography paragraph>{ person.title }</Typography>
          <Typography paragraph>
            <Link to={ `mailto:${ person.email }` }>
              { person.email }
            </Link>
          </Typography>
          {
            person.phoneNumber && (
              <Typography paragraph>{ person.phoneNumber }</Typography>
            )
          }
          {/*
            Will need to add to the content
            model to be able to use this.
            <LinkTray urls={  } />
          */}
        </Grid>
      </Grid>

      <br /><br />
      <Divider />
      <br /><br />

      {
        person?.contributions && (
          <Section title="Contributions">
            <ul>
              {
                person.contributions.map(item => (
                  <li key={ `${ person.firstName }-${ item.name }`}>
                    <Link to={ `/${ item.type }s/${ item.id }` }>
                      { item.name }
                    </Link>
                  </li>
                ))
              }
            </ul>
          </Section>
        )
      }

      {
        person?.biography && (
          <Section title="Biography">
            <Typography paragraph>
              { person.biography }
            </Typography>
          </Section>
        )
      }

    </Page>
  )
}
