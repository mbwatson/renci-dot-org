import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardMedia, CardContent, Typography } from '@mui/material'
import { Link } from '../link'
import avatar from '../../images/generic-avatar.png'

export const PersonCardStrapi = ({ person, showTitle }) => {
  return (
      <Card sx={{ margin: '0 1.5rem' }} elevation={ 0 } >
        <CardMedia
          component='img'
          height='300'
          image={ person.photo.data == null ? avatar.src : person.photo.data[0].attributes.url}
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
  )
}

PersonCardStrapi.propTypes = {
  person: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    photo: PropTypes.object,
    showTitle: PropTypes.bool.isRequired
  }),
}
