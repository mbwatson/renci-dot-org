// import PropTypes from "prop-types";
import { Box, Typography } from "@mui/material";
import style from "./strapi-components.module.css";
import Markdown from "react-markdown";

export const TitleAndBody = ({ data }) => {
  return (
    <>
      {data.sectionContent.map((section) => {
        return (
          <Box className={style.section} key={section.id + section.leftTitle}>
            {section.leftTitle && (
              <Box className={style.titleContainer}>
                <Typography variant="h3" className={style.title}>
                  {section.leftTitle}
                </Typography>
              </Box>
            )}
            <Box className={style.content}>
              <Markdown linkTarget="_blank">{section.rightBody}</Markdown>
            </Box>
          </Box>
        );
      })}
    </>
  );
};

// Section.propTypes = {
//   title: PropTypes.string,
//   children: PropTypes.node.isRequired,
// };
