import { useEffect, useState, Fragment } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { Divider, Grid, Typography } from '@mui/material'
import { fetchStrapiPerson } from "../../lib/strapi";
import { Link, LinkTray, Page, Pre, Section } from '../../components'
import Collaboration from 'pages/collaborations/[id]';
import { NearMeDisabled } from '@mui/icons-material';

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
          {
            person.team && (
              <Typography paragraph>{ person.team }</Typography>
            )
          }
          {
            person.researchGroup && (
              <Typography paragraph>{ person.researchGroup }</Typography>
            )
          }
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
{console.log(person)}
      <br /><br />
      <Divider />
      <br /><br />

      {
        person.team && (
          <Fragment>
            <Section title="Team">
              <Link to={ `/teams/${ person.team.slug }` }>
                { person.team.name }
              </Link>
            </Section>
            <Divider/>
            <br /><br />
          </Fragment>
        )
      }
      {
        person.researchGroup && (
          <Fragment>
            <Section title="Research Group">
              <Link to={ `/groups/${ person.researchGroup.slug }` }>
                { person.researchGroup.name }
              </Link>
            </Section>
            <Divider/>
            <br /><br />
          </Fragment>
        )
      }
      {
        person.projects && (
          <Fragment>
            <Section title="Projects">
              <ul style={{marginTop: 0, marginBottom: 0}}>
                {
                  person.projects.map(project => (
                    <li key={ `${ project.name }` }>
                      <Link to={ `/projects/${ project.slug }` }>{ project.name }</Link>
                    </li>
                  ))
                }
              </ul>
            </Section>
            <Divider/>
            <br /><br />
          </Fragment>
        )
      }
      {
        person.collaborations && (
          <Fragment>
            <Section title="Collaborations">
              <ul>
                {
                  person.collaborations.map(project => (
                    <li key={ `${ project.name }` }>
                      <Link to={ `/collaborations/${ project.slug }` }>{ project.name }</Link>
                    </li>
                  ))
                }
              </ul>
            </Section>      
            <Divider/>
            <br /><br />
          </Fragment>
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
