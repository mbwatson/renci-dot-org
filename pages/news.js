import { Fragment } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Link } from '../components'
import { Typography } from '@mui/material'
import { Page } from '../components'

export default function News() {
  return (
    <Page
      title="News"
      description="Stay informed with RENCI updates"
    >
      <Typography paragraph>
        Sunt amet laboris reprehenderit qui exercitation deserunt eu adipisicing ut nisi sit aute aliquip.
        Tempor adipisicing deserunt occaecat ea aliqua ullamco ut sunt labore velit sed sint in minim ex anim labore.
        Cillum laborum esse est veniam dolore deserunt adipisicing veniam in ex nostrud consectetur ad.
      </Typography>
    </Page>
  )
}
