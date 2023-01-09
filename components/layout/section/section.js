import PropTypes from 'prop-types'
import { Box, Grid, Typography } from '@mui/material'

export const Section = ({ title, children }) => {
  return (
    <Grid
      container
      columns={ 8 }
      columnSpacing={{ xs: 0, md: 6 }}
      rowSpacing={{ xs: 2, md: 0 }}
      sx={{
        margin: '3rem 3rem',
        '& .title': {
          xs: { textAlign: 'left' },
          md: { textAlign: 'right' },
        },
      }}
    >
      <Grid item xs={ 8 } md={ 2 }>
        {
          title && (
            <Box>
              <Typography variant="h2" className="title">
                { title }
              </Typography>
            </Box>
          )
        }
      </Grid>
      <Grid item xs={ 8 } md={ 6 }>
        <Box sx={{marginTop: "0"}}>
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