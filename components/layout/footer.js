import { Box, Container, Grid, useTheme } from '@mui/material'
import { Link } from '../link'
import renciLogo from '../../images/renci.png'

export const Footer = () => {
  const theme = useTheme()
  return (
    <Box
      component="footer"
      sx={{
        background: 'transparent',
        padding: '1rem',
        color: theme.palette.text.primary,
      }}
    >
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={ 12 } md={ 6 } lg={ 5 }>
            <Box>
              <Box component="span" sx={{
                display: 'block',
                minHeight: '60px',
                minWidth: '120px',
                backgroundImage: `url(${ renciLogo.src })`,
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '0% 50%',
              }} />
              <p>
                RENCI Anchor at Europa Center <br/>
                100 Europa Drive, Suite 540 <br/>
                Chapel Hill, NC  27517
              </p>
            </Box>
            <p>media@renci.org</p>
            <p>919-445-9640</p>
          </Grid>
          <Grid item xs={ 12 } md={ 6 } lg={ 3 }>
            <strong>Partners</strong>
            <p>
              <Link to="https://www.unc.edu/">UNC-Chapel Hill</Link> <br/>
              <Link to="https://www.ncsu.edu/">NC State University</Link> <br/>
              <Link to="https://duke.edu/">Duke University</Link>
            </p>
          </Grid>
          <Grid item xs={ 12 } md={ 6 } lg={ 2 }>
            <strong>Connect</strong>
            <p>
              <Link to="https://www.twitter.com/RENCI">Twitter</Link> <br/>
              <Link to="https://www.facebook.com/renci.org">Facebook</Link> <br/>
              <Link to="https://www.linkedin.com/company/65321">LinkedIn</Link> <br/>
              <Link to="https://www.youtube.com/RENCIMedia">YouTube</Link> <br/>
            </p>
          </Grid>
          <Grid item xs={ 12 } md={ 6 } lg={ 2 }>
            <strong>More</strong>
            <p>
              <Link to="/about">About</Link> <br/>
              <Link to="/careers">Careers</Link> <br/>
              <Link to="https://dashboard.renci.org/">RENCI Dashboard</Link> <br/>
            </p>
          </Grid>
          <Grid item xs={ 12 } style={{ textAlign: 'center' }}>
            &copy; { new Date().getFullYear() }
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}