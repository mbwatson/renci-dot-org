import React from 'react'
import PropTypes from 'prop-types'
import { Box } from '@mui/material'

export const PersonGrid = ({ children, size }) => {
  return (
    <Box sx={{
      flex: 1,
      display: 'grid',
      gap: '3rem',
      gridTemplateColumns: `repeat(auto-fit, ${size === 'small' ? '175px' : '285px'})`,
    }}>
      { children }
    </Box>
  )
}

PersonGrid.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(['small', 'large'])
}
