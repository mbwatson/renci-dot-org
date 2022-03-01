import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import {
  Fade, Grid, IconButton, Menu as MuiMenu, MenuItem, Paper, useMediaQuery
} from '@mui/material'
import { Menu as MenuIcon } from '@mui/icons-material'
import { OurWorkTray } from './our-work-tray'
import { Link } from '../../'
import { Icon } from '../../'
import style from './menu.module.css'
import { fetchOurWorkTrayItems } from '../../../lib/contentful'

//

export const Menu = ({ menuItems }) => {
  const mobile = useMediaQuery('(max-width: 600px)')
  const [ourWorkTrayOpen, setOurWorkTrayOpen] = useState(false)
  const [researchGroups, setResearchGroups] = useState(null)
  const [collaborations, setCollaborations] = useState(null)
  const [teams, setTeams] = useState(null)

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

  return (
    <nav className={ style.menuContainer }>
      {
        mobile ? (
          <div className={ style.togglerContainer }>
            <IconButton size="large" className={ style.toggler }>
              <MenuIcon />
            </IconButton>
          </div>
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
              onMouseOut={ () => setOurWorkTrayOpen(false) }
            >
              <span className={ style.menuItemLink }>
                Our Work &nbsp; <Icon icon="chevron-down" size={ 16 } fill="#333" />
              </span>
              <OurWorkTray
                open={ ourWorkTrayOpen }
                onClick={ () => setOurWorkTrayOpen(false) }
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

