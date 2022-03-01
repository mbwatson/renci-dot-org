import { Container, Fade, Grid, List, ListItem, ListSubheader, Paper, Typography } from '@mui/material'
import style from './menu.module.css'
import { useConfig } from '../../../context'
import { Link } from '../../'

export const OurWorkTray = ({
  open,
  researchGroups,
  collaborations,
  teams,
  ...props
}) => {
  const { config } = useConfig()

  return (
    <Fade in={ open }>
      <Paper sx={{
        position: 'fixed',
        top: '121px',
        left: 0,
        right: 0,
        minHeight: '300px',
        backgroundColor: '#e3e9ef',
        '& a': {
          textDecoration: 'none',
        },
        '& a:hover': {
          textDecoration: 'underline',
        },
      }} { ...props }>
        <Container maxWidth={ config.width }>
          <Grid container spacing={ 0 }>
            <Grid item xs={ 12 } sm={ 4 } className={ style.trayColumn }>
              <List
                sx={{ padding: 0, margin: '2rem' }}
                subheader={
                  <ListSubheader sx={{
                    backgroundColor: 'transparent',
                    fontSize: '150%',
                    padding: '0 0.5rem',
                    fontWeight: 'normal',
                  }}>
                    <Link to="/groups">Research Groups</Link>
                  </ListSubheader>
                }
              >
                {
                  researchGroups?.length && researchGroups.map(group => (
                    <ListItem key={ group.id } sx={{ padding: '0.5rem' }}>
                      <Link to={ `/groups/${ group.id }` }>{ group.name }</Link>
                    </ListItem>
                  ))
                }
              </List>
            </Grid>
            
            <Grid item xs={ 12 } sm={ 4 } className={ style.trayColumn }>
              <List
                sx={{ padding: 0, margin: '2rem' }}
                subheader={
                  <ListSubheader sx={{
                    backgroundColor: 'transparent',
                    fontSize: '150%',
                    padding: '0 0.5rem',
                    fontWeight: 'normal',
                  }}>
                    <Link to="/collaborations">Collaborations</Link>
                  </ListSubheader>
                }
              >
                {
                  collaborations?.length && collaborations.map(collaboration => (
                    <ListItem key={ collaboration.id } sx={{ padding: '0.5rem' }}>
                      <Link to={ `/collaborations/${ collaboration.id }` }>{ collaboration.name }</Link>
                    </ListItem>
                  ))
                }
              </List>
            </Grid>
            
            <Grid item xs={ 12 } sm={ 4 } className={ style.trayColumn }>
              <List
                sx={{ padding: 0, margin: '2rem' }}
                subheader={
                  <ListSubheader sx={{
                    backgroundColor: 'transparent',
                    fontSize: '150%',
                    padding: '0 0.5rem',
                    fontWeight: 'normal',
                  }}>
                    <Link to="/teams">Operations</Link>
                  </ListSubheader>
                }
              >
                {
                  teams?.length && teams.map(team => (
                    <ListItem key={ team.id } sx={{ padding: '0.5rem' }}>
                      <Link to={ `/teams/${ team.id }` }>{ team.name }</Link>
                    </ListItem>
                  ))
                }
              </List>
            </Grid>
          </Grid>
        </Container>
      </Paper>
    </Fade>
  )
}

