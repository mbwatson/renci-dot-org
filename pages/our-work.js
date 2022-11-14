import { Fragment } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import {
  fetchResearchGroups,
  fetchCollaborations,
  fetchTeams,
} from '../lib/strapi'
import { Link, Pre } from '../components'
import { Typography } from '@mui/material'
import { Page } from '../components'
import { Section } from '../components/layout'

export default function OurWork({ researchGroups, collaborations, teams }) {
  return (
    <Page
      title="Our Work"
      description="What RENCI does."
    >
      <Typography paragraph>
        RENCI’s research portfolio spans the fields of Clinical Informatics,
        Data Science & Analytics, Earth Data Science, Network Research &
        Infrastructure, and Software Architecture. Major focus areas include
        enabling translational research, developing novel analytical tools,
        facilitating outreach and engagement, and collaborating on large,
        multi-team projects. In addition to our project teams, RENCI’s success
        would not be possible without our well-established operational
        expertise in project management, finance, communications,
        administrative support, and technical support. This team science
        approach has positioned RENCI to consistently excel in our research and
        gain national recognition as a premier research institute. 
      </Typography>

      <Section title="Impact">
        <Typography paragraph>
          RENCI’s research impacts real lives. We actively pursue funding to
          address problems persisting in our world today, as evidenced by our
          work in the areas of COVID-19, weather and climate, the interrelated
          opioid and pain management crises, big data challenges, biomedical
          treatment discovery, and bias in the court system. This is just a
          fraction of the work we do, but we intentionally and consistently aim
          to seek out projects with purpose so we can spend our time working on
          the problems affecting real people today. 
        </Typography>
      </Section>

      <Section title="Highlights">
        <Typography paragraph>
          RENCI’s research is multidisciplinary and embraces team science as
          a core pillar for success. Below are a few highlights of our leading
          efforts:
        </Typography>
        <ul>
          <li>
            RENCI manages and houses the iRODS Consortium; iRODS (Integrated
            Rule-Oriented Data System) is an open source data management
            software used by research, commercial, and governmental
            organizations worldwide.
          </li>
          <li>
            RENCI’s Networking Research & Infrastructure Group (NRIG) leads an
            NSF project, FABRIC, to develop a groundbreaking network
            infrastructure set to reimagine and transform the way large amounts
            of data are stored, analyzed, and transmitted across the country,
            essentially creating the ‘next internet’ specifically built to
            handle big data and enhance scientific research.
          </li>
          <li>
            RENCI’s NRIG is also involved in a sister project of FABRIC,
            FABRIC Across Borders (FAB), which aims to expand FABRIC’s network
            infrastructure internationally.
          </li>
          <li>
            RENCI serves as the coordinating center for the NHLBI BioData
            Catalyst project, which is building an ecosystem of platforms to
            connect data and researchers and provide novel analytical tools to
            accelerate biomedical discovery for heart, lung, blood, and sleep
            disorders, including related complications arising from COVID-19.
          </li>
          <li>
            RENCI leads the HEAL Data Stewardship Group (HEAL Stewards) of
            the NIH HEAL Initiative®, which aims to develop a platform for
            opioid and pain management data so researchers can efficiently
            develop treatments and solutions to address these urgent national
            crises. RENCI’s role involves providing guidance to the researchers
            involved in HEAL’s 600+ studies to ensure that their data meets
            FAIR (Findable, Accessible, Interoperable, Reusable) standards.
          </li>
          <li>
            RENCI serves as the Program Management Team on the NIH RADx Data
            Hub project. This project is under the umbrella of the Rapid
            Acceleration of Diagnostics (RADx®) initiative, a nationwide effort
            to advance COVID-19 testing and accessibility. RENCI’s role
            involves coordinating and developing processes and policies around
            RADx data, ensuring adherence to FAIR data standards.
          </li>
          <li>
            RENCI leads the Exposures Provider team on the NCATS Data
            Translator project, a nationwide biomedical research program
            focused on connecting siloed data sets, developing novel
            analytical tools, and translating research into treatments for
            improved patient outcomes.
          </li>
        </ul>
      </Section>

      <Section title="Research Groups">
        <ul>
          {
            researchGroups.map(group => (
              <li key={ `link-to-${ group.slug }` }>
                <Link to={ `/groups/${ group.slug }` }>
                  { group.name }
                </Link>
              </li>
            ))
          }
        </ul>
      </Section>

      <Section title="Collaborations">
        <ul>
          {
            collaborations.map(collaboration => (
              <li key={ `link-to-${ collaboration.slug }` }>
                <Link to={ `/collaborations/${ collaboration.slug }` }>
                  { collaboration.name }
                </Link>
              </li>
            ))
          }
        </ul>
      </Section>

      <Section title="Operations">
        <ul>
          {
            teams.map(team => (
              <li key={ `link-to-${ team.slug }` }>
                <Link to={ `/teams/${ team.slug }` }>
                  { team.name }
                </Link>
              </li>
            ))
          }
        </ul>
      </Section>

      <Section title="Ways to Get Involved">
        <Typography paragraph>
          Please <Link to="#">contact</Link> us if you are interested in discussing potential areas for collaboration.
        </Typography>

        <Typography paragraph>
          Visit our <Link to="/about/careers">Careers</Link> and <Link
          to="/about/internships">Internships</Link> if you are interested
          in working at RENCI.
        </Typography>
      </Section>
    </Page>
  )
}

export async function getStaticProps(context) {
  const researchGroups = await fetchResearchGroups()
  const collaborations = await fetchCollaborations()
  const teams = await fetchTeams()
  return {
    props: { researchGroups, collaborations, teams },
  }
}