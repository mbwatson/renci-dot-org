import PropTypes from "prop-types";
import { Box, Container, Divider, Typography } from "@mui/material";
import { useScrollPosition } from "../../../hooks";
import { styled } from "@mui/system";

const HeroContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "rgba(255 255 255 / 0.75)",
  backdropFilter: "blur(10px)",
  color: "black",
  maxWidth: "700px",
  padding: theme.spacing(3),
  margin: `calc(-1 * ${theme.spacing(2)})`,
}));

export const Hero = ({
  backgroundImage,
  backgroundColor,
  title,
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
        minHeight: "300px",
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
      <Container>
        <HeroContainer>
          <Typography variant="h1">{title}</Typography>
          <Divider sx={{ my: 2, transform: "translateY(-2px)" }} />
          <Typography>{description}</Typography>
        </HeroContainer>
      </Container>
    </Box>
  );
};

Hero.propTypes = {
  backgroundImage: PropTypes.string,
  backgroundColor: PropTypes.string.isRequired,
  title: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.node,
};

Hero.defaultProps = {
  backgroundColor: "#f3f9cd",
};
