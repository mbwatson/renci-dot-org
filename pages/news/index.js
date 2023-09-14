import { Page } from '@/components/layout'
import { Box, Stack, Typography } from '@mui/material'
import { fetchNews } from '@/lib/strapi/newsGraphQL'
import { Section } from '../../components/layout'
import { FiltersForm, FiltersTray, NewsList, NewsProvider } from '../../components/news'
import Link from 'next/link'

//

export default function News({ articles }) {

  return (
    <NewsProvider articles={ articles }>
      <Page
        title="RENCI News"
        description=""
      >
        <Stack
          direction={{ sm: 'column', md: 'row' }}
          spacing={{ xs: 2, sm: 2, md: 6 }}
          sx={{
            position: 'relative',
            '.sidebar': {
              // position: 'sticky', alignSelf: 'flex-start',
              // ^ this doesn't play nice with the select component.
              top: '165px',
              flex: { xs: 1, sm: 1 },
            },
            '.new-list-container': {
              flex: 3,
            },
          }}
        >
          <Box className="sidebar">
            <Typography paragraph>
              RENCI has news for you.
            </Typography>

            <FiltersForm />

            <Box sx={{ pt: 4 }}>
              <Link href="/news/appearances">News Appearances</Link>
            </Box>
          </Box>

          <Box className="new-list-container" >
            <FiltersTray />
            <NewsList articles={ articles }/>
          </Box>

        </Stack>
        
      </Page>
    </NewsProvider>
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
