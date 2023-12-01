import React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const StyledAutocompleteSearch = styled("div")(
  ({ theme, bottomBorderRadius = true }) => `
    display: flex;
    border-radius: inherit;
    border-bottom-left-radius: ${bottomBorderRadius ? "inherit" : 0};
    border-bottom-right-radius: ${bottomBorderRadius ? "inherit" : 0};
  
    &.focused {
      border-color: ${theme.palette.primary.main}90;
      box-shadow: 0 0 0 3px ${theme.palette.primary.main}a0;
    }
  
    &:focus-visible {
      outline: 0;
    }
  `
);

export const SearchBar = ({ setSearchQuery, options }) => {
  return (
    <FormControl
      style={{
        width: "100%",
      }}
    >
      <FormLabel>Project Search</FormLabel>
      <StyledAutocompleteSearch>
        <TextField
              style={{
                width: "100%",
              }}
          id="search-bar"
          onInput={(e) => {
            setSearchQuery(e.target.value.toLowerCase());
          }}
          placeholder="Search..."
        />
      </StyledAutocompleteSearch>
    </FormControl>
  );
};

SearchBar.propTypes = {
  setSearchQuery: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};
