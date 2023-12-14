import React from "react";
import PropTypes from "prop-types";
import { Card, CardMedia, CardContent, Typography, Box } from "@mui/material";
import { Link } from "../link";
import avatar from "../../images/generic-avatar.svg";
import { useTheme } from "@emotion/react";

export const PersonCard = ({ person, showTitle = false, anchorName }) => {
  const theme = useTheme();
  
  return (
    <Card
      elevation={0}
      name={anchorName}
      sx={{
        "& a": { textDecoration: "none" },
      }}
    >
      <Link to={`/people/${person.slug}`}>
        <Box sx={{
          display: "flex",
          flexDirection: "column",
          [theme.breakpoints.down("sm")]: {
            flexDirection: "row",
            alignItems: "center",
          },
        }}>
          <CardMedia
            component="img"
            sx={{
              aspectRatio: "1 / 1",
              borderRadius: "50%",

              [theme.breakpoints.down("sm")]: {
                width: 100,
              },
            }}
            image={person.photoData ? person.photoData : avatar.src}
            alt={`${person.firstName} ${person.lastName} photo`}
          />

          <CardContent sx={{ display: "flex", flexDirection: "column" }}>
            <Typography mb={0.5} sx={{ textDecoration: "underline" }}>
              {person.firstName} {person.lastName}
            </Typography>

            {showTitle && person.title && (
              <Typography variant="caption" sx={{ lineHeight: 1.4 }}>
                {person.title}
              </Typography>
            )}
          </CardContent>
        </Box>
      </Link>
    </Card>
  );
};

PersonCard.propTypes = {
  anchorName: PropTypes.string,
  showTitle: PropTypes.bool.isRequired,
  person: PropTypes.shape({
    slug: PropTypes.string.isRequired,
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    title: PropTypes.string,
    photo: PropTypes.object,
  }),
};
