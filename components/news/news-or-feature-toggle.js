import { Button, ButtonGroup } from "@mui/material";

export const NewsOrFeatureToggle = ({ newsOrFeature, setNewsOrFeature }) => (
  <ButtonGroup
    size="small"
    sx={{
      display: 'flex',
      '--br': '4px',
      px: '8px',
      '& .MuiButton-root': {
        flex: 1,
        '&:first-of-type': { borderRadius: 'var(--br) 0 0 var(--br)' },
        '&:last-of-type': { borderRadius: '0 var(--br) var(--br) 0' },
      }
    }}
  >
    <Button
      onClick={() => { setNewsOrFeature(null); }}
      variant={newsOrFeature === null ? "contained" : "outlined"}
    >
      All
    </Button>
    <Button
      onClick={() => { setNewsOrFeature("news"); }}
      variant={newsOrFeature === "news" ? "contained" : "outlined"}
    >
      News
    </Button>
    <Button
      onClick={() => { setNewsOrFeature("feature"); }}
      variant={newsOrFeature === "feature" ? "contained" : "outlined"}
    >
      Feature
    </Button>
  </ButtonGroup>
);
