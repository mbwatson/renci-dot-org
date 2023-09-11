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

export const ListItemCard = ({group, contentType}) => {
  const styles = {
    project: {
      // textAlign: 'center',
      // position: 'relative',
      // display: 'flex',
      // flex: '1',
      // flexDirection: 'column',
    },
    cardMedia: {
      // minHeight: '200px',
      // maxHeight: '200px'
    },
    description: {
      // flex: '1',
      // alignItems: 'space-between',
      // flexDirection: 'column',
      // marginTop: '1rem',
      // '& p': {
      //   fontSize: '85%',  
      // },
    },
    noSnippet: {
      // flex: '1',
      // flexDirection: 'column',
      // verticalAlign: 'middle', 
      // marginTop: '2.5rem',
    },
    textOverlay: {
      // position: 'absolute',
      // top: 0,
      // right: 0,
      // height: "100%",
      // width: "100%",
      // color: 'white',
      // backgroundColor: 'rgba(1,1,1,0.5)',
      // display: 'flex',
      // justifyContent: 'center',
      // alignItems: 'center',
      // transition: 'background-color 500ms ease-out',
      // backdropFilter: 'blur(2px)',
      '& h6': {
        // fontWeight: '500',
        // padding: '0 1rem',
        // letterSpacing: '0.5px',
        // fontSize: '115%',
        // transition: 'color 200ms',
      },
      '&:hover': {
        // color: 'rgba(255,255,255,1)',
        // backgroundColor: 'rgba(255,255,255,1)',
        // backdropFilter: 'none',
      }
    }
  }
  return (
    <ImageListItem key={group.slug}>
      <Card sx={styles.project} >
        <CardActionArea component={Link} to={ `/${contentType}/${ group.slug }` }>
            <CardMedia component={'img'} src={ group.featuredImage  } sx={styles.cardMedia} />
            <Box sx={styles.textOverlay}>
              <Typography variant='h6'>{group.name}</Typography>
            </Box>

        </CardActionArea>
      </Card>
    </ImageListItem>
  )
}



