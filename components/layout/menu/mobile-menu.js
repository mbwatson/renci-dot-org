import { forwardRef, useState } from 'react'
import {
  Box, Dialog, Divider, IconButton,
  List, ListItem, ListItemButton, ListItemText,
  Slide, Stack, Typography,
} from '@mui/material'
import {
  KeyboardArrowDown as ExpandIcon,
  Facebook as FacebookIcon,
  Twitter as TwitterIcon,
  LinkedIn as LinkedInIcon,
  YouTube as YouTubeIcon,
} from '@mui/icons-material'
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
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        '& .MuiListItemButton-root': { padding: '1rem' },
        '& .sublist .MuiListItemButton-root': { paddingLeft: '2rem' },
        '& .footer': {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: '100%',
        }
      } }}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton component={ Link } to="/" onClick={ closeHandler }>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem disablePadding>
          <ListItemButton component={ Link } to="/about" onClick={ closeHandler }>
            <ListItemText primary="About" />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem disablePadding>
          <ListItemButton component={ Link } to="/our-work" onClick={ closeHandler }>
            <ListItemText primary="Our Work" />
          </ListItemButton>
        </ListItem>
        <Divider />
        <Box sx={{ backgroundColor: '#d3d9df' }} className="sublist">
          {
            ['Research Groups', 'Collaborations', 'Operations'].map(item => (
              <ListItemButton key={ item } onClick={ closeHandler }>
                <ListItemText primary={ item } />
              </ListItemButton>
            ))
          }
        </Box>
        <Divider />
        <ListItem disablePadding>
          <ListItemButton component={ Link } to="/people" onClick={ closeHandler }>
            <ListItemText primary="People" />
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem disablePadding>
          <ListItemButton component={ Link } to="/news" onClick={ closeHandler }>
            <ListItemText primary="News" />
          </ListItemButton>
        </ListItem>
        <Divider />
      </List>

      <Box sx={{ flex: 1 }} />

      <Box className="footer" sx={{
        maxHeight: '120px',
        minHeight: '120px',
        backgroundColor: '#c3c9cf',
      }}>
        <Stack
          direction="row"
          spacing={ 2 }
          justifyContent="center"
        >
          <IconButton size="large" component={ Link } to="#"><FacebookIcon /></IconButton>
          <IconButton size="large" component={ Link } to="#"><TwitterIcon /></IconButton>
          <IconButton size="large" component={ Link } to="#"><LinkedInIcon /></IconButton>
          <IconButton size="large" component={ Link } to="#"><YouTubeIcon /></IconButton>
        </Stack>
      </Box>
    </Dialog>
  )
}
