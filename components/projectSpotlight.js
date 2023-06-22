import React, { Fragment, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Stack, Box, Card, CardHeader, CardMedia, CardContent, Typography, CardActionArea, ButtonBase, useMediaQuery } from '@mui/material'
import { Link } from './link'
import { Pre } from './pre'
import { useTheme } from '@mui/material/styles'
import { MarkdownLess } from './markdown'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

export const ProjectCard = ({project}) => {
  const styles = {
    project: {
      textAlign: 'center',
      position: 'relative',
      display: 'flex',
      flex: '1',
      flexDirection: 'column',
    },
    cardMedia: {
      minHeight: '200px',
      maxHeight: '200px'
    },
    description: {
      flex: '1',
      alignItems: 'space-between',
      flexDirection: 'column',
      marginTop: '1rem',
      '& p': {
        fontSize: '85%',  
      },
    },
    noSnippet: {
      flex: '1',
      flexDirection: 'column',
      verticalAlign: 'middle', 
      marginTop: '2.5rem',
    },
    textOverlay: {
      position: 'absolute',
      top: 0,
      right: 0,
      height: "100%",
      width: "100%",
      color: 'white',
      backgroundColor: 'rgba(1,1,1,0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      transition: 'background-color 500ms ease-out',
      backdropFilter: 'blur(2px)',
      '& h6': {
        fontWeight: '500',
        padding: '0 1rem',
        letterSpacing: '0.5px',
        fontSize: '115%',
        transition: 'color 200ms',
      },
      '&:hover': {
        color: 'black',
        backgroundColor: 'rgba(255,255,255,0.65)',
        backdropFilter: 'none',
      }
    }
  }
  return (
    <Card sx={styles.project} key={project.slug}>
      <CardActionArea component={Link} to={ `/projects/${ project.slug }` }>
          <CardMedia component={'img'} src={ project.featuredImage  } sx={styles.cardMedia} />
          <Box sx={styles.textOverlay}>
            <Typography variant='h6'>{project.shortTitle ? project.shortTitle : project.name}</Typography>
          </Box>
      </CardActionArea>
      <CardContent sx={project.description ? styles.description : styles.noSnippet}>
        <MarkdownLess paragraph >{ project.snippet }</MarkdownLess>
      </CardContent>
      <CardContent>
        <Link to={ `/projects/${ project.slug }` } style={{textAlign: 'right'}}>Read More</Link>
      </CardContent>
    </Card>
  )
}

export const ProjectSpotlight = ({ projects }) => {
  const mobile = useMediaQuery('(max-width: 680px)')

  const theme = useTheme()
  const styles = {
    wrapper: {
      width: '100%',
      justifyContent: 'space-around',
      margin: '2rem auto',
    },
  }

  const [selectedProjects, setSelectedProjects] = useState([])

  useEffect(() => {
    // select three random project indices
    let projectsCopy = [...projects]
    let projectSelection = []
    for (let i = 0; i < 3; i += 1) {
      const randomIndex = Math.floor(Math.random() * projectsCopy.length)
      const randomProject = projectsCopy.splice(randomIndex, 1)[0]
      //add a property that is a snippet of the original description before pushing to the array
      projectSelection.push({
        ...randomProject,
      })
    }
    // map those indices to projects
    setSelectedProjects(projectSelection)
  }, [projects])

  return (
    <Fragment>
      <Typography variant='h3' style={{margin: '2rem 0'}}>Project Spotlight</Typography>
      <Stack
        direction={{ sm: 'column', md: 'row' }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        sx={styles.wrapper}
      >
        {
          selectedProjects.map(project => (
            <ProjectCard project={project} key={`spotlight-${project.slug}`}/>
          ))
        }
      </Stack>
    </Fragment>
  )
}
