import PropTypes from 'prop-types'
import { Box, Typography, Stack } from '@mui/material'

export const Section = ({ title, children }) => {

  return (
    <Stack
      direction={{ sm: 'column', md: 'row' }}
      spacing={{ xs: 2, sm: 2, md: 6 }}
      sx={{
        marginY: '3rem',
        '.title-container': {
          flex: {
            sm: '0 0',
            md: `0 0 ${255 / 16}rem`
          },
          position: 'relative',
          '.title': {
            position: 'sticky', top: '150px',
            xs: { textAlign: 'left' },
            md: { textAlign: 'right' },
          },
        },
        '.content-container': { flex: '1' , wordWrap: 'break-word' },
      }}
    >
      <Box className="title-container">
        {
          title && (
            <Typography variant="h2" className="title">
              { title }
            </Typography>
          )
        }
      </Box>
      <Box className="content-container" >
        { children }
      </Box>
    </Stack>
  )
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
}