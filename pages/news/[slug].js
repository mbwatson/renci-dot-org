import { Fragment } from 'react'
import { Divider, Typography, Box, Stack } from '@mui/material'
import { fetchNewsArticle } from "@/lib/strapi/newsGraphQL";
import { Link, Page, Section } from '../../components'
import { Markdown } from '../../components/markdown'
import {ArticleDate} from '../../components/news/article-date'
import { Label, Tag } from '../../components/news/tag'

export default function NewsArticle({ article }) {
  return (
      <Page title={article.title} hideTitle>
        <Section>

        <Stack
          direction="row"
          justifyContent="space-between"
        >
          <ArticleDate date={article.publishDate}/>
          <div>
            <Label type={ article.type } />
          </div>
        </Stack>

        <br/>
        <Typography variant="h1" sx={{letterSpacing: '1.5px', lineHeight: '1.3'}}>
          { article.title }
        </Typography>
          <br/>
        <Typography variant="h3" sx={{letterSpacing: '1.5px', lineHeight: '1.3'}}>
          Five year cooperative agreement offers opprtounity to accelerate research on boundary layers of rock, soil, air, water, and living organisms
        </Typography>
        
        <br/>
        
        <Stack direction="row" gap={ 1 } justifyContent="flex-start" alignItems="center">
          {
            article.tags.map(tag => (
              <Tag key={ `${ article.slug }_${ tag }` }>{ tag }</Tag>
            ))
          }
        </Stack>

        <br/>
        <Divider/>
        <br/>

        <Markdown>{article.content}</Markdown>
      </Section>

      <Divider/>
      <p>Previous Article</p>
      </Page>
    )
}

export async function getServerSideProps({ params, res }) {
  res.setHeader(
    'Cache-Control',
    'no-cache, no-store, must-revalidate'
  );
  
  const article = await fetchNewsArticle(params.slug);
  return {
    props: { article: JSON.parse(JSON.stringify(article)) },
  };
}
