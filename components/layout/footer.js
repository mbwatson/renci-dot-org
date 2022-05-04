import { Box, Container, Grid, useTheme } from '@mui/material'
import { Link } from '../link'
import renciLogo from '../../images/renci.png'

export const Footer = () => {
  const theme = useTheme()
  return (
    <Box
      sx={{
        background: '#ddd',
        padding: '2rem',
        color: theme.palette.text.primary,
        '& .link-list': {
          border: '2px dashed blue',
          padding: 0,
          listStyleType: 'none',
          '& li': {
            marginBottom: '1rem',
          }
        },
      }}
    >
      <Container maxWidth="lg">
        <Grid container sx={{
          border: '1px dashed crimson',
          '& > *': {
            border: '1px dotted purple'
          }
        }}>
          <Grid item xs={ 12 } md={ 12 } lg={ 5 }>
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
          <Grid item xs={ 12 } md={ 4 } lg={ 3 }>
            <strong>Partners</strong>
            <ul className="link-list">
              <li><Link to="https://www.unc.edu/">UNC-Chapel Hill</Link></li>
              <li><Link to="https://www.ncsu.edu/">NC State University</Link></li>
              <li><Link to="https://duke.edu/">Duke University</Link></li>
            </ul>
          </Grid>
          <Grid item xs={ 12 } md={ 4 } lg={ 2 }>
            <strong>Connect</strong>
            <ul className="link-list">
              <li><Link to="https://www.twitter.com/RENCI">Twitter</Link></li>
              <li><Link to="https://www.facebook.com/renci.org">Facebook</Link></li>
              <li><Link to="https://www.linkedin.com/company/65321">LinkedIn</Link></li>
              <li><Link to="https://www.youtube.com/RENCIMedia">YouTube</Link></li>
            </ul>
          </Grid>
          <Grid item xs={ 12 } md={ 4 } lg={ 2 }>
            <strong>More</strong>
            <ul className="link-list">
              <li><Link to="/about">About</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="https://dashboard.renci.org/">RENCI Dashboard</Link></li>
            </ul>
          </Grid>
          <Grid item xs={ 12 } style={{ textAlign: 'center' }}>
            &copy; { new Date().getFullYear() }
          </Grid>
        </Grid>
      </Container>
    </Box>
  )
}