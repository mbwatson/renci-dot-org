import PropTypes from "prop-types";
import { Box, Container, Typography } from "@mui/material";
import { useScrollPosition } from "../../../hooks";
import { styled } from "@mui/system";

const HeroTitle = styled(({children, ...props}) => (
  <Typography variant="h1" component="h1" {...props}>{children}</Typography>
))(({ theme }) => ({
  '--highlight-color': 'rgba(255 255 255 / 0.8)',
  color: 'black',
  maxWidth: '600px',
  lineHeight: 'calc(1.25em + (2 * 5px))',
  padding: 0,
  
  '& span': {
    boxDecorationBreak: 'clone',
    backgroundColor: 'var(--highlight-color)',
    padding: '5px 10px',
  }
}));

export const Hero = ({ backgroundImage, backgroundColor, title, children }) => {
  const { scrollPosition } = useScrollPosition();
  return (
    <Box
      sx={{
        width: '100vw',
        paddingY: '4rem',
        minHeight: '300px',
        marginLeft: 'calc(50% - 50vw)',
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor,
        backgroundPosition: `0 ${scrollPosition / 2}px`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      <Container>
        <HeroTitle><span>{title}</span></HeroTitle>
      </Container>
    </Box>
  );
};

Hero.propTypes = {
  backgroundImage: PropTypes.string,
  backgroundColor: PropTypes.string.isRequired,
  title: PropTypes.string,
  children: PropTypes.node,
};

Hero.defaultProps = {
  backgroundColor: "#f3f9cd",
};
