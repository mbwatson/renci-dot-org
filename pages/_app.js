import * as React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { Layout } from '../components'
import '../style/global.css'
import theme from '../style/theme'
import { ConfigProvider } from '../context'
import fontCss from '../fonts/atlas-grotesk/fonts.css'

export default function App(props) {
  const { Component, pageProps } = props

  return (
    <React.Fragment>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel={ fontCss } />
      </Head>
      <ConfigProvider>
        <ThemeProvider theme={ theme }>
          <CssBaseline />
          <Layout>
            <Component { ...pageProps } />
          </Layout>
        </ThemeProvider>
      </ConfigProvider>
    </React.Fragment>
  )
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
}