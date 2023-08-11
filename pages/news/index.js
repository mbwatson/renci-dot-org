import { Page } from "@/components/layout";
import { Typography } from "@mui/material";
import Link from "next/link";

export default function News() {
  return (
    <Page
      title="News"
      description=""
    >
      <Typography paragraph>
        RENCI has news for you.
      </Typography>
      <ul>
        <li><Link href="/news/appearances">Appearances</Link></li>
      </ul>
    </Page>
  );
}