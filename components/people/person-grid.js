import React from 'react'
import PropTypes from 'prop-types'
import { Box, Grid, Typography } from '@mui/material'

export const PersonGrid = ({ children }) => {
  return (
    <Box sx={{
      flex: 1,
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    }}>
      { children }
    </Box>
  )
}

PersonGrid.propTypes = {
  children: PropTypes.node.isRequired,
}
