import PropTypes from 'prop-types'
import { Box, Grid, Typography } from '@mui/material'

export const Section = ({ title, children }) => {
  return (
    <Grid
      container
      columns={ 8 }
      columnSpacing={{ xs: 0, md: 2 }}
      rowSpacing={{ xs: 2, md: 10 }}
      sx={{
        margin: '3rem 0',
        '& .title': {
          xs: { textAlign: 'left' },
          md: { textAlign: 'right' },
        },
      }}
    >
      <Grid item xs={ 8 } md={ 3 }>
        {
          title && (
            <Box>
              <Typography variant="h3" className="title">
                { title }
              </Typography>
            </Box>
          )
        }
      </Grid>
      <Grid item xs={ 8 } md={ 5 }>
        <Box>
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