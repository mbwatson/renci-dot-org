import { Button, ButtonGroup } from "@mui/material";

export const NewsOrFeatureToggle = ({ newsOrFeature, setNewsOrFeature }) => (
  <ButtonGroup sx={{ display: 'flex', '--br': '4px', px: '8px' }}>
    <Button
      sx={{ flex: 1, borderRadius: 'var(--br) 0 0 var(--br)' }}
      size="small"
      onClick={() => {
        setNewsOrFeature(null);
      }}
      variant={newsOrFeature === null ? "contained" : "outlined"}
    >
      All
    </Button>
    <Button
      sx={{ flex: 1 }}
      size="small"
      onClick={() => {
        setNewsOrFeature("news");
      }}
      variant={newsOrFeature === "news" ? "contained" : "outlined"}
    >
      News
    </Button>
    <Button
      sx={{ flex: 1, borderRadius: '0 var(--br) var(--br) 0' }}
      size="small"
      onClick={() => {
        setNewsOrFeature("feature");
      }}
      variant={newsOrFeature === "feature" ? "contained" : "outlined"}
    >
      Feature
    </Button>
  </ButtonGroup>
);
