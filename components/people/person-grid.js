import React from 'react'
import PropTypes from 'prop-types'
import { Box } from '@mui/material'

export const PersonGrid = ({ children }) => {
  return (
    <Box sx={{
      flex: 1,
      display: 'grid',
      gap: '2rem',
      gridTemplateColumns: `repeat(auto-fit, 250px)`,
    }}>
      { children }
    </Box>
  )
}

PersonGrid.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(['small', 'large'])
}
