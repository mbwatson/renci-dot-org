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
      <Paper className={ style.tray } { ...props }>
        <Container maxWidth={ config.width }>
          <Grid container spacing={ 0 }>
            <Grid item xs={ 12 } sm={ 4 } className={ style.trayColumn }>
              <List
                className={ style.trayList }
                subheader={
                  <ListSubheader className={ style.trayListTitle }>
                    <Link to="/groups">Research Groups</Link>
                  </ListSubheader>
                }
              >
                {
                  researchGroups?.length && researchGroups.map(group => (
                    <ListItem key={ group.id } className={ style.trayListItem }>
                      <Link to={ `/groups/${ group.id }` } arrow>{ group.name }</Link>
                    </ListItem>
                  ))
                }
              </List>
            </Grid>
            
            <Grid item xs={ 12 } sm={ 4 } className={ style.trayColumn }>
              <List
                className={ style.trayList }
                subheader={
                  <ListSubheader className={ style.trayListTitle }>
                    <Link to="/collaborations">Collaborations</Link>
                  </ListSubheader>
                }
              >
                {
                  collaborations?.length && collaborations.map(collaboration => (
                    <ListItem key={ collaboration.id } className={ style.trayListItem }>
                      <Link to={ `/collaborations/${ collaboration.id }` } arrow>{ collaboration.name }</Link>
                    </ListItem>
                  ))
                }
              </List>
            </Grid>
            
            <Grid item xs={ 12 } sm={ 4 } className={ style.trayColumn }>
              <List
                className={ style.trayList }
                subheader={
                  <ListSubheader className={ style.trayListTitle }>
                    <Link to="/teams">Operations</Link>
                  </ListSubheader>
                }
              >
                {
                  teams?.length && teams.map(team => (
                    <ListItem key={ team.id } className={ style.trayListItem }>
                      <Link to={ `/teams/${ team.id }` } arrow>{ team.name }</Link>
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

