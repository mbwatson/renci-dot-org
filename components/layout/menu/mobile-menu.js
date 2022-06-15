import { forwardRef } from 'react'
import {
  Box, Dialog, Divider, IconButton, Slide,
} from '@mui/material'
import { Close as CloseIcon } from '@mui/icons-material'

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
        <li>Esse est</li>
        <li>Lorem ipsum</li>
        <li>Tempor consectetur</li>
      </ul>
    </Dialog>
  )
}
