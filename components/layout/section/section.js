import PropTypes from 'prop-types'
import { Box, Grid, Typography, useTheme } from '@mui/material'

export const Section = ({ title, children }) => {
  const theme = useTheme()
  return (
    <Grid
      container
      columns={ 8 }
      rowSpacing={{ xs: 2, md: 10 }}
      sx={{
        margin: '3rem 0',
        '& .title-container': {
          borderRight: `1px solid ${ theme.palette.grey[200] }`,
          height: '100%',
          paddingRight: '1rem',
          '& .title': {
            xs: { textAlign: 'left' },
            md: { textAlign: 'right' },
          },
        },
        '& .content-container': {
          paddingLeft: '1rem',
        },
      }}
    >
      <Grid item xs={ 8 } md={ 3 }>
        {
          title && (
            <Box className="title-container">
              <Typography variant="h3" className="title">
                { title }
              </Typography>
            </Box>
          )
        }
      </Grid>
      <Grid item xs={ 8 } md={ 5 }>
        <Box className="content-container">
          { children }
        </Box>
      </Grid>
    </Grid>
  )
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
}