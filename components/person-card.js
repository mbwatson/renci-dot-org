import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Box, Card, CardHeader, CardMedia, CardContent, Grid, Typography } from '@mui/material'

import { Link, Page } from './link'

export const PersonCard = ({ person }) => {
  return (
    <Fragment>
        <Card sx={{ height: '100%', margin: '0 1.5rem' }} elevation={ 0 } >
          <CardMedia
            component='img'
            height='300'
            image={person.photo?.url}
            alt={`${person.firstName} ${person.lastName} photo`}
          />

          <CardContent>
            <Link to={ `/people/${ person.slug }` }>
              { person.firstName } { person.lastName }
            </Link>
            <Typography>{ person.title }</Typography>
          </CardContent>
        </Card>
    </Fragment>
  )
}

PersonCard.propTypes = {
  person: PropTypes.object.isRequired,
}
// todo: denote the prop type/shape