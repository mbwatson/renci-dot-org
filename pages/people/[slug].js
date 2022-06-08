import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { Grid, Typography } from '@mui/material'
import { fetchPerson } from '../../lib/contentful'
import { Link, LinkList, Page, Pre, Section } from '../../components'
export default function Person() {
  const router = useRouter()
  const [person, setPerson] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const person = await fetchPerson(router.query.slug)
      setPerson(person)
    }
    fetchData()
  }, [router.query.slug])

  console.log(person)

  if (!person) {
    return 'Loading...'
  }

  return (
    <Page
      title={ `${ person.firstName } ${ person.lastName }` }
      description={ person.bio }
    >
      <Grid container spacing={ 2 }>
        <Grid item xs={ 12 } sm={ 4 }>
          <Image
            src={ person.photo.url }
            width={ 250 }
            height={ 250 }
          />
        </Grid>
        <Grid item xs={ 12 } sm={ 8 }>
          <Typography paragraph>{ person.title }</Typography>
          <Typography paragraph>
            <Link to={ `mailto:${ person.email }` }>
              { person.email }
            </Link>
          </Typography>
          <Typography paragraph>{ person.phoneNumber || '---' }</Typography>
          <LinkList items={ ['url1', 'url2', 'url3'] } />
        </Grid>
      </Grid>
      
      <Section title="Groups">
        <Pre>{ JSON.stringify(person.groups) }</Pre>
      </Section>
      
      <Section title="Current Projects">
        <Pre>{ JSON.stringify(person.projects) }</Pre>
      </Section>
      
      <Section title="Biography">
        <Pre>{ JSON.stringify(person.biography) }</Pre>
      </Section>
    </Page>
  )
}
