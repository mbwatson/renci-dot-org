import React, { Fragment, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Box, Card, CardHeader, CardMedia, CardContent, Typography, CardActionArea, ButtonBase } from '@mui/material'
import { Link } from './link'
import { Pre } from './pre'
import { useTheme } from '@mui/material/styles'
import LinesEllipsis from 'react-lines-ellipsis'

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
      margin: '2rem 5rem',
      padding: '0 5rem'
    },
    project: {
      flex: '1',
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
      padding: theme.spacing.medium,
      borderRadius: '10px',
      margin: '10px',
      maxWidth: '250px',
      maxHeight: '300px',
      position: 'relative',
    },
    cardContent: {
      padding: '1rem',
      '& p': {
        fontSize: '85%',  
      }
    },
    cardMedia: {
      height: '125px',

    },
    textOverlay: {
      position: 'absolute',
      top: 0,
      right: 0,
      height: "100%",
      width: "100%",
      color: 'white',
      backgroundColor: 'rgba(1,1,1,0.65)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      '& h6': {
        fontWeight: '500',
        padding: '0 1rem',
        letterSpacing: '0.5px',
        fontSize: '120%',
      },
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
      <Typography variant='h3' style={{margin: '2rem 0'}}>Spotlight</Typography>

      {selectedProjects && (
        <Box sx={styles.wrapper}>
        {
          selectedProjects.map(project => (
          <Card sx={styles.project} key={project.id}>
            <CardActionArea component={Link} to={ `/projects/${ project.id }` }>
                { project.featuredImage && (
                  <Box>
                    <CardMedia component='img' src={project.featuredImage.url} sx={styles.cardMedia} />
                    <Box sx={styles.textOverlay}>
                      <Typography variant='h6'>{project.name}</Typography>
                    </Box>
                  </Box>
                ) }

            </CardActionArea>
            {!project.featuredImage && (
              <Fragment>
                <CardHeader title={project.name}/>
                <hr/>
              </Fragment>
            )}
                <CardContent sx={styles.cardContent}>
                  <Typography paragraph>
                    <LinesEllipsis 
                      text={ project.description ? project.description : null }
                      maxLine='4'
                      ellipsis=' ...'
                      trimRight
                      basedOn='words'
                    />
                    <br/>
                    <Link to={ `/projects/${ project.id }` } style={{textAlign: 'right'}}>Read More...</Link>
                  </Typography>
                </CardContent>
          </Card>
          ))
        }
        </Box>
      )
      }
    </Fragment>
  )
}
