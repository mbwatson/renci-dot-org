import PropTypes from 'prop-types'
import { Chip } from '@mui/material'
import NextLink from 'next/link'

//

const DEFAULT_TAG_COLOR = '#456'

export const LABEL_COLOR = {
  blog: '#9932cc',
  feature: '#007abc',
}

//

/*
 * Tag component.
 * 
 * - most common usage: <Tag>Tag Name</Tag>
 *   will link to news
 * - as non-link: <Tag noLink>Tag Name</Tag>
 * 
*/
export const Tag = ({
  // `children` is expected to be a string for use as the Chip label.
  children,
  // the `noLink` prop dictates whether the Tag will be a link that sends
  // the users to the news list view, filtered by this tag filter.
  // most uses will require a link, so `noLink` is false by default.
  noLink = false,
  // coming via Label, we can expect `color` to be set.
  // otherwise, we must have a tag and the color is known.
  color = DEFAULT_TAG_COLOR,
  // if used via Label, we can expect `href` to be set.
  // otherwise, we must have a tag and the `href` is also known.
  href = `/news/?tag=${ children }`,
  // pass through any additional props
  ...props
}) => {

  const styling = {
    borderRadius: '3px',
    border: '1px solid',
    borderColor: color,
    backgroundColor: `${ color }33`,
    color: color,
    lineHeight: 1,
    textTransform: 'uppercase',
    fontSize: '60%',
    filter: 'brightness(1.0)',
    '&:hover': {
      filter: 'brightness(1.1)',
      backgroundColor: `${ color }22`,
    },
  }

  // don't want a link? render a normal Chip component.
  if (noLink) {
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
    <NextLink href={ href } passHref>
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
  noLink: PropTypes.bool,
}

//

/*
 * Label component
 * Inherits Tag behavior.
 */
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
