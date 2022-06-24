import React from 'react'
import PropTypes from 'prop-types'
import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import { PersonCard } from './'
import { Link } from '../'
import avatar from '../../images/generic-avatar.png'

export const PersonList = ({ people, showTitles }) => {
  return (
    <Box sx={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'flex-start',
      gap: '1rem',
      '& .profile-card': {
        flex: '1 1 200px',
        maxWidth: '250px',
        '& .photo': {
          margin: 'auto',
          width: '200px',
          height: '200px',
        },
        '& .name-and-title': {
          textAlign: 'center',
        },
      },
    }}>
      {
        people.map(person => (
          <Card
            key={ `${ person.slug }-card` }
            component={ Link }
            to={ `/people/${ person.slug }` }
            className="profile-card"
            elevation={ 0 }
          >
            <CardMedia
              component="img"
              image={ person.photo ? person.photo.url : avatar.src }
              alt={ `${ person.firstName } ${ person.lastName } headshot` }
              className="photo"
            />
            <CardContent className="name-and-title">
              { person.firstName } { person.lastName }
              { showTitles && (
                <Typography>{ person.title }</Typography>
              )}
            </CardContent>
          </Card>
        ))
      }
    </Box>
  )
}

PersonList.propTypes = {
  children: PropTypes.node.isRequired,
  showTitles: PropTypes.bool.isRequired,
}

PersonList.defaultProps = {
  showTitles: false,
}

