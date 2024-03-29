import { useCallback } from 'react'
import PropTypes from 'prop-types'
import { Box, IconButton, Tooltip } from '@mui/material'
import {
  GitHub as GitHubIcon,
  LinkedIn as LinkedInIcon,
  YouTube as YouTube,
  Instagram as InstagramIcon,
  Facebook as FacebookIcon,
  Link as LinkIcon,
} from '@mui/icons-material'
import { Link } from './'

const ICONS = {
  'github.com': <GitHubIcon />,
  'linkedin.com': <LinkedInIcon />,
  'youtube.com': <YouTube />,
  'instagram.com': <InstagramIcon />,
  'facebook.com': <FacebookIcon />,
  'default': <LinkIcon />,
}

const domainPattern = new RegExp(/\/\/(\w+\.\w+)\//)

const SocialLink = ({ to }) => {
  const matches = to.match(domainPattern)
  const domain = matches[1]
  // if the domain matches by our regular expression is a key in ICONS,
  // then we render the icon that is the value of the property [domain].
  if (domain in ICONS) {
    return (
      <Tooltip title={ `Visit ${ domain }` }>
        <IconButton href={ to } aria-label={ `Visit ${ domain }` }>
          { ICONS[domain] }
        </IconButton>
      </Tooltip>
    )
  }
  // otherwise, we render a generic link icon.
  return (
    <Tooltip title="Visit website">
      <IconButton href={ to } aria-label="Visit website">
        { ICONS.default }
      </IconButton>
    </Tooltip>
  )
}

export const LinkTray = ({ urls }) => {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'row',
      gap: '0.5rem',
    }}>
      {
        urls.map(url => <SocialLink to={ url } key={ url } />)
      }
    </Box>
  )
}

LinkTray.propTypes = {
  urls: PropTypes.arrayOf(
    PropTypes.string.isRequired,
  ).isRequired,
}
