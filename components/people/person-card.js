import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardMedia, CardContent, Typography } from '@mui/material'
import { Link } from '../link'
import avatar from '../../images/generic-avatar.png'

export const PersonCard = ({ person, showTitle = false, anchorName }) => {
  return (
      <Card elevation={ 0 } name={ anchorName }>
        <CardMedia
          component="img"
          height="250"
          image={ person.photoURL ? person.photoURL : avatar.src }
          alt={ `${person.firstName} ${person.lastName} photo` }
        />

        <CardContent>
          <Link to={ `/people/${ person.slug }` }>
            { person.firstName } { person.lastName }
          </Link>
          { showTitle && person.title && (
            <Typography>{ person.title }</Typography>
          )}
        </CardContent>
      </Card>
  )
}

PersonCard.propTypes = {
  anchorName: PropTypes.string,
  showTitle: PropTypes.bool.isRequired,
  person: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    title: PropTypes.string,
    photo: PropTypes.object,
  }),
}