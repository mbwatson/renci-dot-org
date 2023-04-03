import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";
import { useScrollPosition } from "../../../hooks";
import { styled } from "@mui/system";

const HeroTitle = styled(({children, ...props}) => (
  <Typography variant="h1" component="h1" {...props}>{children}</Typography>
))(({ theme }) => ({
  '--highlight-color': 'rgba(255 255 255 / 0.8)',
  color: 'black',
  maxWidth: '500px',
  lineHeight: 'calc(1.25em + (2 * 5px))',
  '& span': {
    boxDecorationBreak: 'clone',
    backgroundColor: 'var(--highlight-color)',
    padding: '5px 10px',
  }
}));

export const Hero = ({ backgroundImage, backgroundColor, title, children }) => {
  const { scrollPosition } = useScrollPosition();
  return (
    <Box>
      <Box
        sx={{
          position: 'absolute',
          left: 0,
          right: 0,
          backgroundImage: `url(${backgroundImage})`,
          backgroundColor,
          backgroundPosition: `0 ${scrollPosition / 2}px`,
          minHeight: '300px',
          backgroundPosition: '50% 50%',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      />
      <Box
        sx={{
          zIndex: 100,
          minHeight: '300px',
          width: '100%',
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <HeroTitle><span>{title}</span></HeroTitle>
      </Box>
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
