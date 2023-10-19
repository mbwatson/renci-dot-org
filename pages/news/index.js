import { Page } from '@/components/layout'
import { Box, Divider, Stack, Typography } from '@mui/material'
import { fetchNews, fetchTags } from '@/lib/strapi/newsGraphQL'
import { AutocompleteFilter, FiltersForm, FiltersTray, NewsList, NewsProvider, TagSelect, TypeSelect } from '@/components/news'
import Link from 'next/link'

//

export default function News({ articles, tags }) {
  return (
    <NewsProvider articles={ articles } tags={ tags }>
      <Page
        title="RENCI News"
        hideTitle
        description=""
      >
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          alignItems={{ xs: 'stretch', sm: 'flex-start' }}
          sx={{
            mb: 2,
            '.title': { flex: 1 },
            '.type-select': { flex: { xs: 1, sm: '0 0 300px', textAlign: 'right' } },
          }}
        >
          <Box className="title">
            <Typography variant="h1">News</Typography>
            <Typography paragraph>RENCI has news for you.</Typography>
          </Box>
          <Stack direction="column" justifyContent="flex-end" gap={ 2 } className="type-select">
            <Link href="/news/appearances">News Appearances</Link>
            <TypeSelect />
          </Stack>
        </Stack>

        <Divider flexItem />

        <Stack
          direction={{ sm: 'column', md: 'row' }}
          spacing={{ xs: 2, sm: 2, md: 3, lg: 4, }}
          sx={{
            position: 'relative',
            '.sidebar': {
              // position: 'sticky', alignSelf: 'flex-start',
              // ^ this doesn't play nice with the select component.
              top: '165px',
              flex: { xs: 1, md: 1, lg: 1 },
              pt: 2,
            },
            '.news-list-container': {
              pt: 1,
              flex: { xs: 1, md: 3, lg: 4 },
            },
          }}
        >
          {/* <Box className="sidebar">
            <TagSelect />
          </Box> */}

          <Box className="news-list-container" >
            <AutocompleteFilter>
              <AutocompleteFilter.Input />
              <AutocompleteFilter.FilterList />
              <AutocompleteFilter.TagSelector />
            </AutocompleteFilter>
            <FiltersTray />
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
  const tags = await fetchTags();

  return {
    props: {
      articles: JSON.parse(JSON.stringify(articles)),
      tags: JSON.parse(JSON.stringify(tags)),
    },
  };
}
