import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const palette = {
  primary: {
    main: '#00758d',
  },
  secondary: {
    main: '#5e9b8b',
  },
  error: {
    main: red.A400,
  },
  text: {
    primary: 'rgb(102, 102, 102)',
  },
}

const shape = {
  borderRadius: 0,
}

const typography = {
  fontFamily: "\"Atlas Grotesk Web\", sans-serif",
  htmlFontSize: 16,
  h1: {
    fontSize: 'clamp(2rem, 1.286rem + 1.905vw, 2.8rem)',
    paddingBottom: '0.5rem',
    letterSpacing: "0.1rem",
    lineHeight: '1.3'
  },
  h2: {
    fontSize: 'clamp(1.7rem, 1.486rem + 0.571vw, 2rem)',
  },
  h3: {
    fontSize: 'clamp(1.3rem, 0.986rem + 0.571vw, 1.7rem)',
    lineHeight: '1.3'
  },
  h4: {
    fontSize: 'clamp(1.2rem, 3vw, 1.6rem)',
  },
  h5: {
    fontSize: 'clamp(1.15rem, 2vw, 1.5rem)',
  },
  h6: {
    fontSize: 'clamp(1.1rem, 1vw, 1.4rem)',
  },
  subtitle1: {
    letterSpacing: "0.1rem",
    lineHeight: '1.3',
    fontSize: 'clamp(1.25rem, 4vw, 1.5rem)',
    fontWeight: 300,
    textRendering: "optimizeLegibility"
  },
  subtitle2: {
    fontSize: '1.17em',
    lineHeight: '1.3',
    paddingBottom: '.5rem',
    // fontWeight: '500',
  }
}

// Create a theme instance.
const theme = createTheme({
  mode: 'light',
  palette,
  shape,
  typography,
})
  
export default theme;