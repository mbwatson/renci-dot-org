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
    fontSize: 'clamp(2rem, 6vw, 4rem)',
  },
  h2: {
    fontSize: 'clamp(1.7rem, 4vw, 3.5rem)',
  },
  h3: {
    fontSize: 'clamp(1.55rem, 4vw, 3rem)',
  },
  h4: {
    fontSize: 'clamp(1.4rem, 3vw, 2.5rem)',
  },
  h5: {
    fontSize: 'clamp(1.3rem, 2vw, 2.2rem)',
  },
  h6: {
    fontSize: 'clamp(1.2rem, 1vw, 2rem)',
  },
}

// Create a theme instance.
const theme = createTheme({
  mode: 'light',
  palette,
  shape,
  typography,
})
  
export default theme;