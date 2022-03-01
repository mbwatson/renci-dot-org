import PropTypes from 'prop-types'
import { Box, Typography } from '@mui/material'
import style from './section.module.css'

export const Section = ({ title, children }) => {
  return (
    <Box className={ style.section }>
      {
        title && (
          <Box className={ style.titleContainer }>
            <Typography variant="h3" className={ style.title }>
              { title }
            </Typography>
          </Box>
        )
      }
      <Box className={ style.content }>
        { children }
      </Box>
    </Box>
  )
}

Section.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
}