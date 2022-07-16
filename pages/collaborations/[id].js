import { Fragment, useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Typography } from '@mui/material'
import { fetchCollaboration } from '../../lib/contentful'
import {
  Link, Page, PersonCard, PersonGrid, Pre, Section,
} from '../../components'

export default function Collaboration() {
  const router = useRouter()
  const [collaboration, setCollaboration] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const collab = await fetchCollaboration(router.query.id)
      setCollaboration(collab)
    }
    fetchData()
  }, [router.query.id])

  if (!collaboration) {
    return 'Loading...'
  }

  console.log(collaboration)

  return (
    <Page
      title={ `${ collaboration.name }` }
      description={ collaboration.description }
      heroImage={ collaboration.featuredImage ? collaboration.featuredImage.url : null }
    >
      <Section title="RENCI's Role">
        { collaboration.role }
      </Section>

      <Section title="Projects">
        <ul>
          {
            collaboration.projectsCollection.items
              .sort((p, q) => p.name.toLowerCase() < q.name.toLowerCase() ? -1 : 1)
              .map(project => (
                <li key={ `${ collaboration.name }-${ project.name }` }>
                  { project.name }
                </li>
              ))
          }
        </ul>
      </Section>

      <Section title="Contributors">
        <h3>People</h3>
        <PersonGrid>
          {
            collaboration.contributorsCollection.items.map(person => (
              <PersonCard key={ person.slug } person={ person } showTitle={false}/>
            ))
          }
        </PersonGrid>

        {
          collaboration.fundingCollection.items.length > 0 && (
            <Fragment>
              <h3>Funders</h3>
              <ul>
                {
                  collaboration.fundingCollection.items
                    .sort((p, q) => p.name.toLowerCase() < q.name.toLowerCase() ? -1 : 1)
                    .map(org => (
                      <li key={ `${ collaboration.id }-${ org.id }` }><Link to={ org.url }>{ org.name }</Link></li>
                    ))
                }
              </ul>
            </Fragment>
          )
        }

        {
          collaboration.partnersCollection.items.length > 0 && (
            <Fragment>
              <h3>Partners</h3>
              <ul>
                {
                  collaboration.partnersCollection.items
                    .sort((p, q) => p.name.toLowerCase() < q.name.toLowerCase() ? -1 : 1)
                    .map(org => (
                      <li key={ `${ collaboration.id }-${ org.id }` }><Link to={ org.url }>{ org.name }</Link></li>
                    ))
                }
              </ul>
            </Fragment>
          )
        }

      </Section>

    </Page>
  )
}
