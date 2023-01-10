import PropTypes from 'prop-types'
import { Box, Typography, Stack } from '@mui/material'

export const Section = ({ title, children }) => {
  return (
    <Stack
      direction="row"
      spacing={6}
      sx={{
        margin: '3rem 6rem',
        '& .title': {
          xs: { textAlign: 'left' },
          md: { textAlign: 'right' },
        },
      }}
    >
      <Box sx={{ flex: '1 200px' }}>
        {
          title && (
            <Typography variant="h2" className="title">
              { title }
            </Typography>
          )
        }
      </Box>
      <Box sx={{ flex: '4' }}>
          { children }
      </Box>
    </Stack>
  )
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
}