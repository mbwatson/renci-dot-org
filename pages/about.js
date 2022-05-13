import { Fragment } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Typography } from '@mui/material'
import { Link, Page, Section, List } from '../components'
import heroImage from '../images/racks.jpg'

export default function Home() {
  const listItems = [
    'Home',
    'Test',
    'List Item'
  ]

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

      <Section title="Nostrud sed velit">
        <Typography paragraph>
          Magna enim incididunt exercitation anim est dolor tempor sint consequat minim laborum ut nisi.
          Eu anim deserunt ut in sed eu incididunt dolor aliquip dolor nulla ut mollit.
        </Typography>
        <Typography paragraph>
          Esse labore dolore reprehenderit ex voluptate ut qui in dolor.
          Proident dolor in labore nulla duis pariatur culpa nostrud fugiat amet dolor do aliqua aliquip cillum pariatur ut.
          Sunt cillum sunt dolor aute laboris cupidatat laboris excepteur ut consequat aute aliquip aliquip labore exercitation ut.
        </Typography>
        <Typography paragraph>
          Deserunt sint dolore aliquip reprehenderit in ullamco dolor commodo consectetur laborum.
          Reprehenderit ut commodo dolore laboris in anim deserunt exercitation elit dolor do culpa commodo cillum aliquip deserunt nisi dolor.
          Qui veniam dolore amet ex aliquip do qui mollit.
          Nostrud excepteur sunt adipisicing in in culpa incididunt dolor consectetur sed ut aliqua tempor irure eiusmod esse do aliquip.
          Sit aute sint ut proident ad ex mollit fugiat laborum anim nulla.
          Labore qui amet non ex fugiat exercitation laborum quis eiusmod ex.
          Dolore culpa magna sint elit deserunt do dolore adipisicing consectetur ut enim sed laboris est ullamco laboris dolor in.
        </Typography>
      </Section>

      <Section title="Lorem ipsum aute">
        <Typography paragraph>
          Esse labore dolore reprehenderit ex voluptate ut qui in dolor.
          Proident dolor in labore nulla duis pariatur culpa nostrud fugiat amet dolor do aliqua aliquip cillum pariatur ut.
          Sunt cillum sunt dolor aute laboris cupidatat laboris excepteur ut consequat aute aliquip aliquip labore exercitation ut.
        </Typography>
        <Typography paragraph>
          Magna enim incididunt exercitation anim est dolor tempor sint consequat minim laborum ut nisi.
          Eu anim deserunt ut in sed eu incididunt dolor aliquip dolor nulla ut mollit.
        </Typography>
        <Typography paragraph>
          Deserunt sint dolore aliquip reprehenderit in ullamco dolor commodo consectetur laborum.
          Reprehenderit ut commodo dolore laboris in anim deserunt exercitation elit dolor do culpa commodo cillum aliquip deserunt nisi dolor.
          Dolore culpa magna sint elit deserunt do dolore adipisicing consectetur ut enim sed laboris est ullamco laboris dolor in.
        </Typography>
      </Section>

      <br /><br /><br /><br />

      <Typography variant="h1">The quick brown fox</Typography><br />
      <Typography variant="h2">The quick brown fox</Typography><br />
      <Typography variant="h3">The quick brown fox</Typography><br />
      <Typography variant="h4">The quick brown fox</Typography><br />
      <Typography variant="h5">The quick brown fox</Typography><br />
      <Typography variant="h6">The quick brown fox</Typography><br />

      <br /><br /><br /><br />

      <List items={listItems} bullets={'none'} inline={false} />
    </Page>
  )
}
