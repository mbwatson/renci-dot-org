import { Fragment } from 'react'
import { Divider, Typography, Box, Stack } from '@mui/material'
import { fetchNewsArticle } from "@/lib/strapi/newsGraphQL";
import { Link, Page, Section } from '../../components'
import { Markdown } from '../../components/markdown'
import {ArticleDate} from '../../components/news/article-date'
import { Label, Tag } from '../../components/news/tag'
import { fetchNewsArticleGQL } from '@/lib/strapi/newsGraphQL'


// todo: add media queries on the photo

const ArticleNavigation = ({ prev, next }) => {
  return (
    <div style={{ display: "flex", margin: "1.5rem auto" }}>
      <div style={{ flex: 1, textAlign: "left" }}>
        {prev && (
          <Link to={prev}>
            PREVIOUS{" "}ARTICLE
            <br />
            <Typography variant="caption">{prev}</Typography>
          </Link>
        )}
      </div>
      <div style={{ flex: 1, textAlign: "right" }}>
        {next && (
          <Link to={next}>
            NEXT{" "}ARTICLE
            <br />
            <Typography variant="caption">{next}</Typography>
          </Link>
        )}
      </div>
    </div>
  )
}

const sampleSlugs = [
  "exogeni-a-critical-step-forward-for-edge-cloud-computing",
  "nrig-director-ilya-baldin-inducted-into-the-nc-state-computer-science-alumni-hall-of-fame",
  "renci-internship-program-investing-in-the-next-generation-of-leaders",
  "renci-researchers-awarded-2021-best-paper-from-the-elsevier-fgcs-journal",
  "drone-projects-take-data-processing-and-communication-to-new-heights",
  "biomedical-data-translator-platform-moves-to-the-next-phase",
  "new-data-format-aids-large-scale-evolutionary-biology-research",
  "new-streamlined-statistical-method-provides-improved-pattern-detection-and-risk-prediction-for-disease",
  "use-cases-show-translators-potential-to-expedite-clinical-research",
  "new-concept-poised-to-accelerate-drug-discovery-through-data-mining",
]

const createPrevNext = (sampleSlugs, articleSlug) => {
  const slugIndex = sampleSlugs.indexOf(articleSlug)
  const prevSlugIndex = slugIndex - 1
  const nextSlugIndex = prevSlugIndex + 2
  const prev = sampleSlugs[prevSlugIndex]
  const next = sampleSlugs[nextSlugIndex]

  return { "prev" : prev, "next": next}

}

export default function NewsArticle({ article }) {
  const {prev, next} = createPrevNext(sampleSlugs, article.slug)

  return (
    <Page title={article.title} hideTitle>

      {/* Defines the article width, does not include next/previous article buttons */}
      <Section>

        {/* container that holds the date and label on the same line */}
        <Stack
          direction="row"
          justifyContent="space-between"
        >
          <ArticleDate date={article.publishDate}/>

          {/* this div is simply a container for the Label, otherwise the label takes the width of its container*/}
          <div>
            <Label>{article.articleType}</Label> 
          </div>
        </Stack>

        <br/>

        {/*title moved down here below the date/label line*/}
        <Typography variant="h1">
          { article.title }
        </Typography>
        
        <br/>
        
        {/*Subheading/subtitle if one exists*/}
        {
          article.subtitle && (
            <Typography variant="subtitle1">
              {article.excerpt}
            </Typography>
          )
        }
        
        <br/>
        {/*tags line*/}
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
        
        {/*article content*/}
        {/* <Markdown>{article.content}</Markdown> */}
      </Section>

      <Divider/>

      <ArticleNavigation prev={prev} next={next} />

      </Page>
    )
}

export async function getServerSideProps({ params, res }) {
  res.setHeader(
    'Cache-Control',
    'no-cache, no-store, must-revalidate'
  );
  const article = await fetchNewsArticleGQL(params.slug);
  return {
    props: { article: JSON.parse(JSON.stringify(article)) },
  };
}
