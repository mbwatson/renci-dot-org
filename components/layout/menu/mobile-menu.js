import { forwardRef } from 'react'
import {
  Box, Dialog, Divider, IconButton, Slide,
} from '@mui/material'
import { Link } from '../../'

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ ref } { ...props } />
})


export const MobileMenu = ({ closeHandler, open }) => {

  return (
    <Dialog
      fullScreen
      open={ open }
      onClose={ closeHandler }
      TransitionComponent={ Transition }
      sx={{ zIndex: 8 }}
      PaperProps={{ sx: {
        paddingTop: '120px', // this is the height to clear the toolbar
        backgroundColor: '#e3e9ef',
      } }}
    >
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/our-work">Our Work</Link>
        </li>
        <li>
          <Link to="/people">People</Link>
        </li>
        <li>
          <Link to="/news">News</Link>
        </li>
      </ul>
    </Dialog>
  )
}
