import React from 'react'
import PropTypes from 'prop-types'
import { Box, Card, CardContent, CardMedia, Divider, Typography } from '@mui/material'
import { PersonCard } from './'
import { Link } from '../'
import avatar from '../../images/generic-avatar.png'

export const PersonList = ({ people, showTitles }) => {
  return (
    <Box sx={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '1rem',
      '& .profile-card': {
        flex: '1 1 200px',
        '& .photo': {
          width: '200px',
          height: '200px',
        }
      },
    }}>
      {
        people.map(person => (
          <Card
            key={ `${ person.slug }-card` }
            className="profile-card"
            elevation={ 0 }
          >
            <CardMedia
              component="img"
              image={ person.photo ? person.photo.url : avatar.src }
              alt={ `${ person.firstName } ${ person.lastName } headshot` }
              className="photo"
            />
            <Divider />
            <CardContent>
              <Link to={ `/people/${ person.slug }` }>
                { person.firstName } { person.lastName }
              </Link>
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

