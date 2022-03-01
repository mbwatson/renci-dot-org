import PropTypes from 'prop-types'
import { Box } from '@mui/material'
import style from './hero.module.css'

export const Hero = ({
  backgroundImage,
  backgroundColor,
  children
}) => {
  return (
    <Box>
      <Box
        className={ style.bg }
        style={{
          backgroundImage: `url(${ backgroundImage })`,
          backgroundColor,
        }}
      />
      <Box className={ style.placeholder } />
    </Box>    
  )
}

Hero.propTypes = {
  backgroundImage: PropTypes.object,
  backgroundColor: PropTypes.string.isRequired,
  children: PropTypes.node,
}

Hero.defaultProps = {
  backgroundColor: '#f3f9cd',
}
