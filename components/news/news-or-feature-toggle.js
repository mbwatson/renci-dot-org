import { Button, ButtonGroup } from "@mui/material";

export const NewsOrFeatureToggle = ({ newsOrFeature, setNewsOrFeature }) => (
  <ButtonGroup>
    <Button
      onClick={() => {
        setNewsOrFeature(null);
      }}
      variant={newsOrFeature === null ? "contained" : "outlined"}
    >
      All
    </Button>
    <Button
      onClick={() => {
        setNewsOrFeature("news");
      }}
      variant={newsOrFeature === "news" ? "contained" : "outlined"}
    >
      News
    </Button>
    <Button
      onClick={() => {
        setNewsOrFeature("feature");
      }}
      variant={newsOrFeature === "feature" ? "contained" : "outlined"}
    >
      Feature
    </Button>
  </ButtonGroup>
);
