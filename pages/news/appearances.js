import { Page } from "@/components/layout";
import { fetchAllNewsAppearances } from "@/lib/strapi/newsAppearancesGraphQL";
import { Typography } from "@mui/material";

export default function News({ appearances }) {
  return (
    <Page
      title="News Appearances"
      description="RENCI is comprised of people who contribute to research groups, operational units, and collaborations."
    >
      <Typography paragraph>
       See what the media are saying about RENCI. Please keep in mind that not all publications
       keep their stories archived for the long-term. As a result, some of the urls below may 
       not work after a period of time.
      </Typography>

      <pre>
        {JSON.stringify(appearances, null, 2)}
      </pre>

    </Page>
  );
}

export async function getServerSideProps({ res }) {
  res.setHeader(
    'Cache-Control',
    'no-cache, no-store, must-revalidate'
  )
  
  const appearances = await fetchAllNewsAppearances();

  return {
    props: { appearances: JSON.parse(JSON.stringify(appearances)) },
  };
}
