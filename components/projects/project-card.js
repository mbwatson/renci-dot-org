import React, { Fragment, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Stack, Box, Card, CardHeader, CardMedia, CardContent, Typography, CardActionArea, ButtonBase, useMediaQuery } from '@mui/material'
import { Link } from '../link'
import { Pre } from '../pre'
import { useTheme } from '@mui/material/styles'
import { Markdown } from '../markdown'
import serverRacks from '../../images/racks.jpg'

export const ProjectCard = ({project}) => {
  const theme = useTheme();

  const styles = {
    project: {
      margin: '1rem 0'
    },
    cardMedia: {
      maxWidth: useMediaQuery(theme.breakpoints.down("md")) ? '100%' : '25%',
      maxHeight: useMediaQuery(theme.breakpoints.down("md")) ? '175px' : null

    },
    description: {
      textAlign: 'left',
      flexBasis: useMediaQuery(theme.breakpoints.down("md")) ? null :'840px'
    },
  }

  return (
    <Card sx={styles.project} key={project.slug} >
      <Stack
        direction={{ sm: 'column', md: 'row' }}
        spacing={3}
        flex
      >
        <CardMedia 
          component={'img'} 
          src={  project.featuredImage.length > 0 ? project.featuredImage[0].url : serverRacks.src} 
          sx={styles.cardMedia} 
        />
        <CardContent sx={styles.description}>
          {project.researchGroups.length > 0 ? (
            <Link to={`/groups`} style={{textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.4px', marginBottom: '0.5rem'}}>
              <Typography variant='caption' sx={{}}>
                {project.researchGroups[0].text}
              </Typography>
            </Link>
          ) : project.collaborations.length > 0 ? (
            <Link to={`/collaborations`} style={{textDecoration: 'none', textTransform: 'uppercase', letterSpacing: '0.4px', marginBottom: '0.5rem'}}>
              <Typography variant='caption' sx={{}}>
                {project.collaborations[0].text}
              </Typography>
            </Link>
          ) : null}
          
          <Link to={ `/projects/${ project.slug }`} style={{textDecoration: 'none',}}>
            <Typography variant='h4' sx={{marginBottom: '1rem', fontWeight:'500'}}>{project.webName}</Typography>
          </Link>
          <Markdown >{ project.webDescription }</Markdown>

        </CardContent>
      </Stack>
    </Card>
  )
}

