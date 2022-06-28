import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import {
  Box, Fade, Grid, IconButton, Menu as MuiMenu, MenuItem, Paper, useMediaQuery
} from '@mui/material'
import {
  Menu as MenuIcon,
  Close as CloseIcon,
} from '@mui/icons-material'
import { OurWorkTray } from './our-work-tray'
import { Link } from '../../'
import { Icon } from '../../'
import style from './menu.module.css'
import { MobileMenu } from './mobile-menu'
import { fetchOurWorkTrayItems } from '../../../lib/contentful'

//

export const Menu = ({ menuItems }) => {
  const mobile = useMediaQuery('(max-width: 680px)')
  const [ourWorkTrayOpen, setOurWorkTrayOpen] = useState(true)
  const [researchGroups, setResearchGroups] = useState(null)
  const [collaborations, setCollaborations] = useState(null)
  const [teams, setTeams] = useState(null)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      await fetchOurWorkTrayItems().then(data => {
        setResearchGroups(data.researchGroupCollection)
        setCollaborations(data.collaborationCollection)
        setTeams(data.teamCollection)
      })
    }
    fetchData()
  }, [])

  useEffect(() => {
    if (!mobile) {
      setMobileMenuOpen(false)
    }
  }, [mobile])

  return (
    <nav className={ style.menuContainer }>
      {
        mobile ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 9 }}>
            <IconButton size="large" onClick={ () => setMobileMenuOpen(!mobileMenuOpen) }>
              { mobileMenuOpen ? <CloseIcon /> : <MenuIcon /> }
            </IconButton>
            <MobileMenu
              closeHandler={ () => setMobileMenuOpen(false) }
              open={ mobileMenuOpen }
            />
          </Box>
        ) : (
          <ul className={ style.menu }>
            <li className={ style.menuItem }>
              <Link to="/" className={ style.menuItemLink }>Home</Link>
            </li>
            <li className={ style.menuItem }>
              <Link to="/about" className={ style.menuItemLink }>About</Link>
            </li>
            <li
              className={ style.menuItem }
              onMouseOver={ () => setOurWorkTrayOpen(true) }
              onMouseOut={ () => setOurWorkTrayOpen(true) }
              onClick={ () => setOurWorkTrayOpen(true) }
            >
              <Link to="/our-work" className={ style.menuItemLink }>
                Our Work &nbsp; <Icon icon="chevron-down" size={ 16 } fill="#333" />
              </Link>
              <OurWorkTray
                open={ ourWorkTrayOpen }
                researchGroups={ researchGroups }
                collaborations={ collaborations }
                teams={ teams }
              />
            </li>
            <li className={ style.menuItem }>
              <Link to="/people" className={ style.menuItemLink }>People</Link>
            </li>
            <li className={ style.menuItem }>
              <Link to="/news" className={ style.menuItemLink }>News</Link>
            </li>
          </ul>
        )
      }
    </nav>
  )
}

Menu.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.node,
      path: PropTypes.string.isRequired,
    })
  ),
}

//

