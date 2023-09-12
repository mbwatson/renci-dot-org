import PropTypes from 'prop-types'
import { Chip } from '@mui/material'
import { styled } from '@mui/system'

//

const DEFAULT_TAG_COLOR = '#cccccc'

const LABEL_COLOR = {
  blog: '#ff7f50',
  feature: '#007abc',
}

//

export const Tag = ({ children, color, ...props }) => {
  return (
    <Chip
      size="small"
      label={ children }
      sx={{
        borderRadius: '3px',
        border: '1px solid',
        borderColor: color ?? DEFAULT_TAG_COLOR,
        backgroundColor: `${ color ?? DEFAULT_TAG_COLOR }66`,
        color: '#333',
        lineHeight: 1,
        textTransform: 'uppercase',
        fontSize: '60%',
        cursor: 'pointer',
        filter: 'brightness(1.0)',
        transition: 'filter 2500ms',
        '&:hover': {
          filter: 'brightness(1.1)',
          backgroundColor: `${ color ?? DEFAULT_TAG_COLOR }33`,
        },
      }}
      { ...props }
    />
  )
}


export const Label = ({ type, ...props }) => {
  return (
    <Tag
      color={ LABEL_COLOR[type] }
      { ...props }
    >{ type }</Tag>
  )
}

Label.propTypes = {
  type: PropTypes.oneOf(Object.keys(LABEL_COLOR)),
}
