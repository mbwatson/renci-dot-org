import { Fragment } from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import { Divider, Typography } from '@mui/material'
import { Hero } from './hero'

export const Page = ({
  title,
  description,
  children,
  heroImage,
}) => {
  const windowTitle = `${ title + ' | ' || '' } RENCI.org`
  return (
    <Fragment>
      <Head>
        <title> { title } | RENCI.org</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {
        !!heroImage && (
          <Hero
            backgroundImage={ heroImage }
            backgroundColor="lightgrey"
          />
        )
      }

      <br /><br />

      <Typography variant="h1">
        { title }
      </Typography>

      <br /><br />
      <Divider />
      <br /><br />

      { children }
      
    </Fragment>
  )
}

Page.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
  description: PropTypes.string,
}
