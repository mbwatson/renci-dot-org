import { useEffect, useState, Fragment } from 'react'
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
      <Grid container spacing={ 6 } columns={ 8 }>
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
            { person.fullName }
          </Typography>
          <Typography paragraph>{ person.title }</Typography>
          {
            person.team && (
              <Typography paragraph sx={{ fontWeight: 500 }}>
                <Link to={ `/teams/${ person.team.slug }` }> 
                  { person.team.name } Operational Team
                </Link>
              </Typography>
            )
          }
          {
            person.researchGroup && (
              <Typography paragraph sx={{ fontWeight: 500 }}>
                <Link to={ `/groups/${ person.researchGroup.slug }` }>
                  { person.researchGroup.name } Research Group
                </Link> 
              </Typography>
            )
          }
          {
            person.email && (
              <Typography paragraph>
                <Link to={ `mailto:${ person.email }` }>
                  { person.email }
                </Link>
              </Typography>
            )
          }
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
      {
        person.contributions && (
          <Fragment>
            <Divider />
            <br /><br />
            <Section title="Contributions">
              {
                person.contributions.projects && (
                  <Fragment>
                    <h3>Projects</h3>
                    <ul style={{marginTop: 0, marginBottom: 0}}>
                      {
                        person.contributions.projects.map(project => (
                          <li key={ `${ project.name }` }>
                            <Link to={ `/projects/${ project.slug }` }>{ project.name }</Link>
                          </li>
                        ))
                      }
                    </ul>
                  </Fragment>
                )
              }
              {
                person.contributions.collaborations && (
                  <Fragment>
                    <h3>Collaborations</h3>
                    <ul style={{marginTop: 0, marginBottom: 0}}>
                      {
                        person.contributions.collaborations.map(project => (
                          <li key={ `${ project.name }` }>
                            <Link to={ `/collaborations/${ project.slug }` }>{ project.name }</Link>
                          </li>
                        ))
                      }
                    </ul>
                  </Fragment>
                )
              }
            </Section>
          </Fragment>
        )
      }
      {
        person?.biography && (
          <Fragment>
            <Divider />
            <br /><br />
            <Section title="Biography">
              <Typography paragraph>
                { person.biography }
              </Typography>
            </Section>
          </Fragment>
        )
      }

    </Page>
  )
}
