import React, { Fragment, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Stack, Box, Card, CardHeader, CardMedia, CardContent, Chip, Typography, CardActionArea, ButtonBase, useMediaQuery } from '@mui/material'
import { Link } from '../link'
import { Pre } from '../pre'
import { useTheme } from '@mui/material/styles'
import { Markdown } from '../markdown'
import { Pattern } from './project-image'

export const ProjectCard = ({project}) => {
  const theme = useTheme();

  const styles = {
    project: {
      margin: '1rem 0'
    },
    cardMedia: {
      width: useMediaQuery(theme.breakpoints.down("md")) ? '100%' : '250px',
      // maxHeight: useMediaQuery(theme.breakpoints.down("md")) ? '175px' : null,
      // border: useMediaQuery(theme.breakpoints.down("md")) ? '3px solid red' : '3px solid green',
      backgroundSize: 'contain',
      backgroundPosition: 'center'
    },
    description: {
      textAlign: 'left',
      flexBasis: useMediaQuery(theme.breakpoints.down("md")) ? null:'840px',
      // height: '250px'
    },
  }

  return (
    <Card sx={styles.project} key={project.slug} >
      <Stack
        direction={{ sm: 'column', md: 'row' }}
        spacing={3}
        flex
      >
        {/* <CardMedia 
          component={'img'} 
          src={  project.featuredImage.length > 0 ? project.featuredImage[0].url : serverRacks.src} 
          sx={styles.cardMedia} 
        /> */}
        {
          project.featuredImage.length > 0 
          ? <CardMedia component={'img'} src={  project.featuredImage[0].url } sx={styles.cardMedia} />
          : <Pattern />
        }
        <CardContent sx={styles.description}>
          <Stack direction="row-reverse" justifyContent="space-between" >
            {project.isActive ? (
              <Chip label="ACTIVE" size="small" sx={{
                background: "linear-gradient(135deg, #238b8b, #00778f)", 
                color: "white", 
                fontWeight: 500
              }}/>
            ) : (
              <Chip label="INACTIVE" size="small"/>
            )}
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
          </Stack>
          
          <Link to={ `/projects/${ project.slug }`} style={{textDecoration: 'none',}}>
            <Typography variant='h4' sx={{marginBottom: '1rem', fontWeight:'500'}}>{project.webName}</Typography>
          </Link>
          {/* <Box sx={{
            '--maxHeight': 'calc(6rem * 1.5)',
            '&:before': {
              content: "''",
              width: '100%',
              height: '100%',
              position: 'absolute',
              left: 0,
              top: 0,
              pointerEvents: 'none',
              background: 'linear-gradient(transparent 0px, white calc(var(--maxHeight) - 4px ))'
            },
            '& > .hover-link': {
              position: 'absolute',
              bottom: 0,
              right: 0,
            },
            position: 'relative',
            maxHeight: 'var(--maxHeight)',
            overflow: 'hidden',
          }}>
          <Markdown>{ project.webDescription }</Markdown>
          <Link to={ `/projects/${ project.slug }`} className='hover-link'>Read more →</Link>

          </Box> */}
          <Markdown>{ project.webDescription }</Markdown>

        </CardContent>
      </Stack>
    </Card>
  )
}

