import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardMedia, CardContent, Typography } from '@mui/material'
import { Link } from '../link'
import avatar from '../../images/generic-avatar.png'

export const PersonCard = ({ person, showTitle, anchorName }) => {
  return (
      <Card elevation={ 0 } name={ anchorName }>
        <CardMedia
          component="img"
          height="250"
          image={ person.photo ? person.photo.url : avatar.src }
          alt={ `${person.firstName} ${person.lastName} photo` }
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

PersonCard.propTypes = {
  anchorName: PropTypes.string,
  person: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    photo: PropTypes.object,
    showTitle: PropTypes.bool.isRequired
  }),
}