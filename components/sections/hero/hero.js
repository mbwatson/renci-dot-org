import PropTypes from "prop-types";
import { Box } from "@mui/material";
import style from "./hero.module.css";
import { useScrollPosition } from "../../../hooks";

export const Hero = ({ data }) => {
  const { scrollPosition } = useScrollPosition();

  return (
    <Box alt={data.attr.altText}>
      <Box
        className={style.bg}
        style={{
          backgroundImage: `url(${data.image.data.attributes.url})`,
          backgroundColor: "#f3f9cd",
          backgroundPosition: `0 ${scrollPosition / 2}px`,
        }}
        alt={data.attr.altText}
      />
      <Box className={style.placeholder} alt={data.attr.altText} />
    </Box>
  );
};

// Hero.propTypes = {
//   backgroundImage: PropTypes.string,
//   backgroundColor: PropTypes.string.isRequired,
//   children: PropTypes.node,
// };

Hero.defaultProps = {
  backgroundColor: "#f3f9cd",
};
