import React from 'react'
import { Paper } from '@mui/material'

export const Block = ({children}) => {
  return (
    <Paper  elevation={3} sx={{
      padding: '32px',
      marginBottom: '32px',
      transition: 'padding 250ms'
    }}>
        { children }
    </Paper>
  )
}