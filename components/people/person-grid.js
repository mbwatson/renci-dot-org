import React from 'react'
import PropTypes from 'prop-types'
import { Box } from '@mui/material'

export const PersonGrid = ({ children }) => {
  return (
    <Box sx={{
      flex: 1,
      marginTop: '3rem',
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
