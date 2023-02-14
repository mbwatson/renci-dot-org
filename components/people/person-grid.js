import React from 'react'
import PropTypes from 'prop-types'
import { Box } from '@mui/material'

export const PersonGrid = ({ children, size }) => {
  return (
    <Box sx={{
      flex: 1,
      display: 'grid',
      gap: '3rem',
      gridTemplateColumns: `repeat(${size === 'small' ? 5 : 4}, 1fr)`,
    }}>
      { children }
    </Box>
  )
}

PersonGrid.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOf(['small', 'large'])
}
