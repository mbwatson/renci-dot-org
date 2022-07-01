import React, { Fragment, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Box, Card, CardHeader, CardMedia, CardContent, Typography, CardActionArea } from '@mui/material'
import { Link } from './link'
import { Pre } from './pre'
import { useTheme } from '@mui/material/styles'

export  const Spotlight = ({ projects }) => {
  const theme = useTheme()
  const styles = {
    wrapper: {
      display: 'flex',
      width: '100%',
      justifyContent: 'space-between',
      gap: theme.spacing.medium,
      width: '100%',
      // maxWidth: '1000px',
      marginBottom: '2rem'
    },
    project: {
      flex: '1',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: theme.spacing.medium,
      borderRadius: '10px',
      margin: '10px',
    }
  }

  const [selectedProjects, setSelectedProjects] = useState([])

  useEffect(() => {
    // select three random project indices
    let projectsCopy = [...projects]
    let projectSelection = []
    for (let i = 0; i < 3; i += 1) {
      const randomIndex = Math.floor(Math.random() * projectsCopy.length)
      const randomProject = projectsCopy.splice(randomIndex, 1)[0]
      projectSelection.push(randomProject)
    }
    // map those indices to projects
    setSelectedProjects(projectSelection)
  }, [])

  return (
    <Fragment>
      <Typography variant='h3' style={{marginBottom: '2rem'}}>Spotlight</Typography>

      {selectedProjects && (
        <Box sx={styles.wrapper}>
        {
          selectedProjects.map(project => (
          <Card sx={styles.project} key={project.id}>
            <CardActionArea component={Link} to={ `/projects/${ project.id }` }>
                { project.featuredImage && (
                  <CardMedia component='img' src={project.featuredImage.url}/>
                ) }

                <CardHeader title={project.name}/>

                <hr />

                <CardContent>
                  { project.description ? project.description : null }
                </CardContent>

            </CardActionArea>
          </Card>
          ))
        }
        </Box>
      )
      }
    </Fragment>
  )
}
