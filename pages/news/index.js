import { Page } from "@/components/layout";
import { Box, Typography } from "@mui/material";
import { fetchNews } from "@/lib/strapi/newsGraphQL";
import { Section } from "../../components/layout";
import { NewsList } from "../../components/news";
import Link from "next/link";

//

export default function News({ articles }) {

  return (
    <Page
      title="News"
      description=""
    >
      <Box sx={{ float: 'right' }}>
        <Link href="/news/appearances">News Appearances</Link>
      </Box>

      <Typography paragraph>
        RENCI has news for you.
      </Typography>


      <Section title="News">
        <NewsList articles={ articles }/>
      </Section>
      
    </Page>
  );
}


export async function getServerSideProps({ res }) {
  res.setHeader(
    'Cache-Control',
    'no-cache, no-store, must-revalidate'
  );
  
  const articles = await fetchNews();

  return {
    props: { articles: JSON.parse(JSON.stringify(articles)) },
  };
}
