import { Fragment } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { Link } from '../components'
import { Typography } from '@mui/material'
import { Page } from '../components'

export default function OurWork() {
  return (
    <Page
      title="Our Work"
      description="What RENCI does."
    >
      <Typography paragraph>
        Ut occaecat laboris tempor dolore proident pariatur eu ullamco est sint nulla proident commodo ullamco enim mollit.
        Esse do ex proident do dolore do do in consectetur laborum quis incididunt ut cupidatat velit officia et consequat.
        Duis veniam sunt ad adipisicing sit amet dolore excepteur qui aliquip pariatur ullamco pariatur nisi quis.
        Lorem ipsum occaecat in aliqua magna irure elit consequat ut pariatur aute ea excepteur tempor sed occaecat in.
        Veniam dolor non excepteur fugiat ex consequat nulla deserunt laboris.
        Et elit qui proident dolore culpa est et sed nisi.
      </Typography>
    </Page>
  )
}
