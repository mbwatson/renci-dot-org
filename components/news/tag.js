import PropTypes from 'prop-types'
import { Chip } from '@mui/material'
import NextLink from 'next/link'

//

const DEFAULT_TAG_COLOR = '#cccccc'

export const LABEL_COLOR = {
  blog: '#ff7f50',
  feature: '#007abc',
}

//

/*
 * Tag component.
 * 
 * - basic usage: <Tag>Tag Name</Tag>
 * - as a link to news: <Tag link>Tag Name</Tag>
*/
export const Tag = ({
  // `children` is expected to be a string for use as the Chip label.
  children,
  // the `link` prop dictates whether the Tag will be a link sending
  // users to the news list view, filtered by this tag filter.
  link = false,
  // coming via Label, we can expect `color` to be set.
  // otherwise, we must have a tag and the color is known.
  color = DEFAULT_TAG_COLOR,
  // if used via Label, we can expect `href` to be set.
  // otherwise, we must have a tag and the `href` is also known.
  href = `/news/?tag=${ children }`,
  // pass through any additional props
  ...props,
}) => {

  const styling = {
    borderRadius: '3px',
    border: '1px solid',
    borderColor: color,
    backgroundColor: `${ color }66`,
    color: '#333',
    lineHeight: 1,
    textTransform: 'uppercase',
    fontSize: '60%',
    cursor: 'pointer',
    filter: 'brightness(1.0)',
    '&:hover': {
      filter: 'brightness(1.1)',
      backgroundColor: `${ color }33`,
    },
  }

  // don't want a link? render a normal Chip component.
  if (!link) {
    return (
      <Chip
        size="small"
        label={ children }
        sx={ styling }
        { ...props }
      />
    )
  }
  // if `link` is true, we'll make the chip a link.
  // note the weird Next.js link nesting.
  return (
    <NextLink href={ href }>
      <Chip
        size="small"
        label={ children }
        component="a"
        sx={ styling }
        { ...props }
      />
    </NextLink>
  )
}

Tag.propTypes = {
  children: PropTypes.string.isRequired,
  color: PropTypes.string,
  href: PropTypes.string,
  link: PropTypes.bool,
}

//

export const Label = ({ children: articleType, link, ...props }) => {
  return (
    <Tag
      link={ link }
      href={ `/news/?type=${ articleType }` }
      color={ LABEL_COLOR[articleType] }
      { ...props }
    >{ articleType }</Tag>
  )
}

Label.propTypes = {
  children: PropTypes.oneOf(Object.keys(LABEL_COLOR)),
  link: PropTypes.bool,
}
