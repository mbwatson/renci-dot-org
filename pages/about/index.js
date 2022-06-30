import { Fragment } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Typography } from '@mui/material'
import { Link, Page, Section } from '../../components'
import heroImage from '../../images/racks.jpg'
import { Graph } from '../../components/graph'

export default function Home() {
  return (
    <Page
      title="About"
      description="About RENCI"
      heroImage={ heroImage.src }
    >
      <Typography>
        Est dolore dolor dolor ex dolore laboris enim pariatur esse fugiat laborum dolor.
        Lorem ipsum fugiat veniam eu nulla id laborum adipisicing ea velit ex enim.
        Excepteur anim enim amet incididunt veniam in tempor aliquip.
        Elit exercitation veniam nisi minim magna minim minim in consequat nulla magna fugiat labore anim nulla commodo incididunt.
      </Typography>

      <Section title="We Do Data Science">
        <Typography paragraph>
          A research institute of the University of North Carolina at Chapel
          Hill since 2004, the Renaissance Computing Institute (RENCI) is a hub
          for innovation that fosters data science expertise, advances software
          development tools and techniques, develops effective
          cross-disciplinary and cross-sector engagement strategies, and
          establishes sustainable business models for software and services. 
        </Typography>
        <Typography paragraph>
          With data now produced at unprecedented rates, every sector of
          society is undergoing a historic transformation driven by the
          challenges associated with &apos;big data.&apos; RENCI is committed to
          tackling these challenges and transforming data into discoveries
          by partnering with leading universities, non-profits, government, and
          the private sector to create tools and technologies to effectively
          and efficiently maximize the value of big data to drive discoveries,
          innovate, make informed decisions, and spur economic development.
        </Typography>
      </Section>

      <Section title="How We Do It">
        <Typography paragraph>
          What makes us so &apos;renaissance?&apos; Our work isn’t just about solving
          known problems. It’s about unlocking human potential. 
        </Typography>
        <ul>
          <li>
            We build communities of domain scientists, data scientists, technology practitioners, and end users who apply data to catalyze innovation and knowledge discovery.
          </li>
          <li>
            We relentlessly improve our competencies in data science and cyberinfrastructure development and deployment, including the entire stack of resources and cloud services known as research cyberinfrastructure.
          </li>
          <li>
            We develop models of collaboration that translate our work into scientific, social, and economic innovations.
          </li>
          <li>
            We document and share our findings through research publications and educational materials.
          </li>
          <li>
            We accelerate research. We help overcome barriers to make research faster, stronger, and more creative.
          </li>
          <li>
            We advance the state-of-the-art. Not just in what machines can do, but what people can do with machines.
          </li>
          <li>
            We transcend boundaries. We foster inclusivity, promote diversity, and collaborate across disciplines to enhance science, engineering, art, the humanities, and commerce.
          </li>
        </ul>
      </Section>

      <Section title="Collaboration">
        <Typography paragraph>
          RENCI projects are researched, developed, and funded through
          collaborations with more than 150 organizations. The force-directed graph
          below illustrates how research groups and projects are linked by their
          collaborating and funding organizations.
        </Typography>

        <Graph />

        <Typography paragraph>
          [insert commercial]
        </Typography>

      </Section>

      <Section title="For More Information">
        <ul>
          <li><Link to="/our-work">Our Work</Link></li>
          <li>Strategic Plan</li>
          <li><Link to="/about/careers">Careers at RENCI</Link></li>
          <li><Link to="/about/facilities">Facilities</Link></li>
          <li><Link to="/about/branding">Using our logo</Link></li>
        </ul>
      </Section>

    </Page>
  )
}
