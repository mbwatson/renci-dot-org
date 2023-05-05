import PropTypes from "prop-types";
import { Box, Container, Divider, Typography } from "@mui/material";
import { useScrollPosition } from "../../../hooks";
import { styled } from "@mui/system";
import { Link, Markdown } from "../..";

const HeroContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "rgba(255 255 255 / 0.8)",
  backdropFilter: "blur(10px)",
  color: "black",
  maxWidth: "700px",
  padding: theme.spacing(3),
  margin: `calc(-1 * ${theme.spacing(2)})`,
}));

const Superheader = styled((props) => (
  <Typography variant="h6" as="h2" {...props}>
    {props.children}
  </Typography>
))(() => ({
  color: "rgb(0 0 0 / 0.45)",
  marginBottom: "0.5rem",
  textTransform: "uppercase",

  "& a": {
    textDecoration: "none",
  },
}));

export const Hero = ({
  backgroundImage,
  backgroundColor,
  title,
  superheader,
  superheaderUrl,
  description,
  children,
}) => {
  const { scrollPosition } = useScrollPosition();
  return (
    <Box
      sx={{
        width: "100vw",
        paddingY: {
          md: 12,
          sm: 12,
          xs: 2,
        },
        minHeight: "500px",
        marginLeft: "calc(50% - 50vw)",
        backgroundImage: `url(${backgroundImage})`,
        backgroundColor,
        backgroundPosition: `0 ${scrollPosition / 2}px`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "center",
        }}
      >
        <HeroContainer>
          {Boolean(superheader) && (
            <Superheader>
              {superheaderUrl ? (
                <Link to={superheaderUrl}>{superheader}</Link>
              ) : (
                superheader
              )}
            </Superheader>
          )}
          <Typography variant="h1">{title}</Typography>
          {Boolean(description) && (
            <>
              <Divider sx={{ my: 2, transform: "translateY(-2px)" }} />
              <Markdown>{description}</Markdown>
            </>
          )}
        </HeroContainer>
      </Container>
    </Box>
  );
};

Hero.propTypes = {
  backgroundImage: PropTypes.string,
  backgroundColor: PropTypes.string.isRequired,
  title: PropTypes.string,
  superheader: PropTypes.string,
  superheaderUrl: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node,
};

Hero.defaultProps = {
  backgroundColor: "#f3f9cd",
};
