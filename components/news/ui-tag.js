import PropTypes from "prop-types";
import { Chip } from "@mui/material";
import { CloseRounded } from "@mui/icons-material";

const TYPES = {
  researchGroups: {
    bgColor: "#a6ffd4",
    color: "#2d4339",
  },
  collaborations: {
    bgColor: "#ffe69c",
    color: "#473f28",
  },
  projects: {
    bgColor: "#ccb7ff",
    color: "#352f44",
  },
  organizations: {
    bgColor: "#aaeeff",
    color: "#2c3e43",
  },
  people: {
    bgColor: "#ffc0dd",
    color: "#523c46",
  },
  default: {
    bgColor: "#d8d8d8",
    color: "#414141",
  },
};

/**
 * @param {{
 *   type?: keyof TYPES,
 *   contents: ReactNode,
 *   inverted?: boolean,
 *   uppercase?: boolean
 *   ...props?: any
 * }} props
 */
export const Tag = ({
  type = "default",
  contents,
  inverted = false,
  uppercase = false,
  ...props
}) => {
  if (TYPES[type] === undefined) type = 'default';
  const { color, bgColor } = TYPES[type];
  
  return <Chip
    label={contents}
    size="small"
    deleteIcon={
      props.onDelete ? (
        <CloseRounded
          sx={{
            transform: "scale(0.8)",
            transformOrigin: "center",
            strokeWidth: 0,
            fill: !inverted ? color : bgColor,
          }}
        />
      ) : undefined
    }
    sx={{
      backgroundColor: !inverted ? bgColor : color,
      color: !inverted ? color : bgColor,
      borderRadius: "6px",
      cursor: "revert",
      border: `1px solid ${!inverted ? color : bgColor}90`,
      maxWidth: "35ch",
      textTransform: uppercase ? 'uppercase' : 'initial'
    }}
    {...props}
  />;
};

Tag.propTypes = {
  color: PropTypes.string,
  contents: PropTypes.node,
  inverted: PropTypes.bool,
  props: PropTypes.any,
};