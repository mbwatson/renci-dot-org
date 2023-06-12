import { Fragment } from 'react'
import { Divider, Typography } from '@mui/material'
import { fetchStrapiPerson } from "../../lib/strapi";
import { Link, Page, Section, TextImageSection } from '../../components'

export default function Person({ person }) {
  return (
    <Page title={ `${ person.firstName } ${ person.lastName }` } hideTitle>
      <TextImageSection 
        imageUrl={ person.photoURL }
        imageWidth={400}
        imageHeight={400}
        imageAspectRatio={"1 / 1"}
        imageAlt={ `Photo of ${ person.firstName } ${ person.lastName }` }
        rounded={true}
        >
          <Typography variant="h1" >
            { person.fullName }
          </Typography>
          <Typography paragraph>{ person.title }</Typography>
          {
            person.team && (
              <Fragment>
                {
                  person.team.map(group => (
                    <Typography paragraph sx={{ fontWeight: 500 }} key={group.name}>
                      <Link to={ `/teams/${ group.slug }` }> 
                        { group.name } Operational Team
                      </Link> 
                    </Typography>
                  ))
                }
              </Fragment>
            )
          }
          {
            person.researchGroup && (
              <Fragment>
                {
                  person.researchGroup.map(group => (
                    <Typography paragraph sx={{ fontWeight: 500 }} key={group.name}>
                    <Link to={ `/groups/${ group.slug }` }>
                      { group.name } Research Group
                    </Link> 
                  </Typography>
                      ))
                }
              </Fragment>
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
      </TextImageSection>

      {
        person.contributions && (
          <Fragment>
            <Divider />
            <Section title="Contributions">
              {
                person.contributions.projects && (
                  <Fragment>
                    <Typography variant="h3" sx={{fontSize: "1.17em", fontWeight: '500', paddingBottom: '.5rem'}}>Projects</Typography>
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
              { person.contributions.projects && person.contributions.collaborations && <br/>}
              {
                person.contributions.collaborations && (
                  <Fragment>
                    <Typography variant="h3" sx={{fontSize: "1.17em", fontWeight: '500', paddingBottom: '.5rem'}}>Collaborations</Typography>
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

export async function getServerSideProps({ params, res }) {
  res.setHeader(
    'Cache-Control',
    'no-cache, no-store, must-revalidate'
  )
  
  const person = await fetchStrapiPerson(params.slug)

  return { props: { person: JSON.parse(JSON.stringify(person)) } }
}
