import React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
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
        <Autocomplete
          freeSolo
          id="projects-list-search"
          disableClearable
          options={options.map((option) => option.name)}
          onChange={(event) => {
            setSearchQuery(event.target.textContent.toLowerCase());
          }}
          style={{
            fontSize: "1rem",
            color: "grey",
            background: "inherit",
            border: "none",
            borderRadius: "inherit",
            padding: "8px 12px",
            outline: 0,
            flex: "1 0 auto",
          }}
          renderInput={(params) => (
            <TextField
              id="search-bar"
              {...params}
              onInput={(e) => {
                setSearchQuery(e.target.value.toLowerCase());
              }}
              InputProps={{
                ...params.InputProps,
                type: "search",
              }}
              placeholder="Search..."
              size="large"
            />
          )}
        />
      </StyledAutocompleteSearch>
    </FormControl>
  );
};

SearchBar.propTypes = {
  setSearchQuery: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};
