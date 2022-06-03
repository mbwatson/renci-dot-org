import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Box, Card, CardHeader, CardMedia, CardContent, Grid, Typography } from '@mui/material'
import { Link } from './link'
import avatar from '../images/generic-avatar.png'

export const PersonCard = ({ person, showTitle }) => {
  return (
    <Fragment>
        <Card sx={{ height: '100%', margin: '0 1.5rem' }} elevation={ 0 } >
          <CardMedia
            component='img'
            height='300'
            image={ person.photo ? person.photo.url : avatar.src}
            alt={`${person.firstName} ${person.lastName} photo`}
          />

          <CardContent>
            <Link to={ `/people/${ person.slug }` }>
              { person.firstName } { person.lastName }
            </Link>
            { showTitle && (
              <Typography>{ person.title }</Typography>
            )}
          </CardContent>
        </Card>
    </Fragment>
  )
}

PersonCard.propTypes = {
  person: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    photo: PropTypes.object.isRequired,
  }),
}
