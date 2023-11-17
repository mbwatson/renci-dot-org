import { Page, Section } from "@/components/layout";
import { fetchArticle, fetchStrapiGraphQL } from "@/lib/strapi";
import { Divider, Typography, Box, Stack } from "@mui/material";
import { Markdown } from "@/components/markdown";
import Image from "next/image";
import { ArticleDate } from "@/components/news/article-date"
import { Tag } from "@/components/news/tag"

export default function Article({ article }) {
  return (
  <Page hideTitle title={article.title} description={article.subtitle}>

    {/* Defines the article width, does not include next/previous article buttons */}
    <Section>

      {/* container that holds the date and label on the same line */}
      <Stack
        direction="row"
        justifyContent="space-between"
      >
        <ArticleDate date={article.publishDate}/>
        
        <div>
          <Tag contents={article.newsOrBlog}/>
        </div>
      </Stack>

      {/*title moved down here below the date/label line*/}
      <Typography variant="h1">
        { article.title }
      </Typography>

      {/*Subheading/subtitle if one exists*/}
      {
        article.subtitle && (
          <Typography variant="subtitle1">
            {article.excerpt}
          </Typography>
        )
      }

      <Divider sx={{ margin: '1rem 0'}}/>

        
      {/*Article content is mapped over because each section is grouped by content type, separating rich text from images*/}
      {
        article.content.map((item)=> {
          return item.__typename == "ComponentPostSectionsImage" ? (
            <Image 
              priority
              src={item.image.data.attributes.url}
              alt={item.altText}
              width= {item.image.data.attributes.width}
              height={item.image.data.attributes.height}
              layout="responsive"
              objectFit='cover'
            />
          ) : (
            <Markdown>{item.content}</Markdown>
          )
        })
      }

    {/* <pre>{JSON.stringify(article, null, 2)}</pre> */}

    </Section>
  </Page>
  )
}

export async function getStaticPaths() {
  const postsGql = await fetchStrapiGraphQL(`query {
    posts(pagination: { limit: 1000 }, sort: "publishDate:desc") {
      data {
        attributes {
          slug
          publishDate
        }
      }
    }
  }`);

  const paths = postsGql.data.posts.data.map(({  attributes: { publishDate, slug } }) => {
    const date = new Date(publishDate);
    
    return {
      params: {
        year: date.getUTCFullYear().toString(),
        month: (date.getUTCMonth() + 1).toString(),
        day: date.getUTCDate().toString(),
        slug,
      }
    }
  });

  return {
    paths,
    fallback: 'blocking', 
  };
}

export async function getStaticProps({ params: { slug } }) {
  const article = await fetchArticle(slug);
  if (article === null || article.length) return { notFound: true };
  return { props: { article } }
}
