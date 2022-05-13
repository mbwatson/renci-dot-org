import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Box, Container, ListItem, useTheme } from '@mui/material'

export const List = ({ items, bullets, inline, ...props }) => {
  const theme = useTheme()
  // console.log(items, bullets, inline)
  return (
    <Box 
      sx={{ 
        margin: `${theme.spacing.small}, 0`,
        padding: `${ bullets === 'none' ? 0 : '0 0 0 1rem' }`,
        listStyleType: `${bullets}`,
        '& li': {
          display: `${ inline ? 'inline' : 'block' }`,
          marginRight: `${ inline ? 0 : theme.spacing.small }`
        }
       }}
      // bullets={ bullets } 
      // inline={ inline }
    >
      {
        items.map((item, i) => (
          <Fragment key={ i }>
            <ListItem
              sx={{
                padding: 0,
                margin: 0,
                marginBottom: `${ theme.spacing.extraSmall }`
              }}
            >{ item }</ListItem>
            { inline && i + 1 < items.length && ', ' }
          </Fragment>
        ))
      }
    </Box>
  )
}

List.propTypes = {
  items: PropTypes.array.isRequired,
  bullets: PropTypes.oneOf(['none', 'disc', 'circle', 'square', 'decimal', 'georgian', 'trad-chinese-informal', 'kannad']).isRequired,
  inline: PropTypes.bool.isRequired,
}

List.defaultProps = {
  bullets: 'disc',
  inline: false,
}
