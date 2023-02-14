import PropTypes from 'prop-types'
import { Box, Typography, Stack } from '@mui/material'

export const Section = ({ title, children }) => {
  return (
    <Stack
    direction={{ sm: 'column', md: 'row' }}
    spacing={{ sm: 2, md: 6 }}
    sx={{
        margin: '3rem 0',
        '& .title': {
          xs: { textAlign: 'left' },
          md: { textAlign: 'right' },
        },
      }}
    >
      <Box sx={{
        flex: {
          sm: '0 0',
          md: `0 0 ${255 / 16}rem`
        }
      }}>
        {
          title && (
            <Typography variant="h2" className="title" textAlign="right" >
              { title }
            </Typography>
          )
        }
      </Box>
      <Box sx={{ flex: '1' , wordWrap: 'break-word'}} >
          { children }
      </Box>
    </Stack>
  )
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
}