import { Divider, Typography } from '@mui/material'
import { fetchStrapiProject } from '../../lib/strapi'
import { Link, Page } from '../../components'
import { Section } from '../../components/layout'
import { PersonCard, PersonGrid } from "../../components/people/";

export default function Project({ project }) {
  return (
    <Page
      title={ `${ project.name }` }
      description={ project.description }
      heroImage={ project.featuredImage ? project.featuredImage : null }
    >
      {
        project.description && (
          <Typography paragraph>{project.description}</Typography>
        )
      }
      <br/>
      {
        project.renciRole && (
          <>
            <Divider />
            <Section title="RENCI's Role">
              <Typography paragraph>{project.renciRole}</Typography>
            </Section>
          </>
        )
      }
      {
        project.members.length > 0 && (
          <>
            <Divider />
            <Section title="Team Members">
              <PersonGrid size="small">
                {
                  project.members.filter(person => person.active).map(person => (
                    <PersonCard key={ person.slug } person={ person } showTitle={true}/>
                  ))
                }
              </PersonGrid>
            </Section>
          </>
        )
      }
      {
        project.partners.length > 0 && 
        <>
          <Divider />
          <Section title="Partners">
            <ul style={{ margin: 0 }}>
              {
                project.partners
                  .sort((p, q) => p.name.toLowerCase() < q.name.toLowerCase() ? -1 : 1)
                  .map(partner => (
                    <li key={ `${ project.name }-${ partner.name }` }>
                      <Link to={ partner.url }>{ partner.name }</Link>
                    </li>
                  ))
              }
            </ul>
          </Section>
        </>
      }
      {
        project.funding.length > 0 && 
          <>
            <Divider />
            <Section title="Funding">
              <ul style={{ margin: 0 }}>
                {
                  project.funding
                    .sort((p, q) => p.name.toLowerCase() < q.name.toLowerCase() ? -1 : 1)
                    .map(partner => (
                      <li key={ `${ project.name }-${ partner.name }` }>
                        <Link to={ partner.url }>{ partner.name }</Link>
                      </li>
                    ))
                }
              </ul>
            </Section>
          </>
        }
    </Page>
  )
}

export async function getServerSideProps({ params, res }) {
  res.setHeader(
    'Cache-Control',
    'no-cache, no-store, must-revalidate'
  )
  
  const project = await fetchStrapiProject(params.id)

  return { props: { project: JSON.parse(JSON.stringify(project)) } }
}
