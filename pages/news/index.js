import { Page } from '@/components/layout'
import { Box, Stack, Typography } from '@mui/material'
import { fetchNews } from '@/lib/strapi/newsGraphQL'
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
          spacing={{ xs: 2, sm: 2, md: 3, lg: 4, }}
          sx={{
            position: 'relative',
            '.sidebar': {
              // position: 'sticky', alignSelf: 'flex-start',
              // ^ this doesn't play nice with the select component.
              top: '165px',
              flex: { xs: 1, sm: 1, md: 1, lg: 1 },
            },
            '.news-list-container': {
              flex: { xs: 1, sm: 1, md: 2, lg: 3 },
            },
          }}
        >
          <Box className="sidebar">
            <Typography paragraph>
              RENCI has news for you.
            </Typography>

            <FiltersForm />
            <FiltersTray />

            <Box sx={{ pt: 4 }}>
              <Link href="/news/appearances">News Appearances</Link>
            </Box>
          </Box>

          <Box className="news-list-container" >
            <NewsList />
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
