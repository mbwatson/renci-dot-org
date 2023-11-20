import { Fragment } from "react"
import { Page, Section } from "@/components/layout";
import { fetchArticle, fetchStrapiGraphQL } from "@/lib/strapi";
import { Divider, Typography, Box, Stack } from "@mui/material";
import { Markdown } from "@/components/markdown";
import Image from "next/image";
import { ArticleDate } from "@/components/news/article-date"
import { Tag } from "@/components/news/tag"
import qs from "qs";
import { Link } from "@/components/link"

export default function Article({ article }) {
  
  const tags = [
    article.projects.map((x) => ({ ...x, type: 'projects' })),
    article.people.map((x) => ({ ...x, type: 'people' })),
    article.collaborations.map((x) => ({ ...x, type: 'collaborations' })),
    article.researchGroups.map((x) => ({ ...x, type: 'researchGroups' })),
    article.organizations.map((x) => ({ ...x, type: 'organizations' })),
    article.postTags.map((x) => ({ ...x, type: 'postTags' }))
  ].flat();

  const createTagLinkURL = (id, type) => {
    return `/news?${qs.stringify({[type]: id})}`
  }

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
          <Typography sx={{textTransform: "capitalize", fontWeight: "500",  padding: "0.25rem 0.5rem", backgroundColor:"#D9D9D9"}}>{article.newsOrBlog}</Typography>
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
            {article.subtitle}
          </Typography>
        )
      }
      <Stack direction="row" flexWrap="wrap" gap={1}>
        {tags.map(({ name, slug, type }, i) => {
          const id = type === 'postTags' ? name : slug;

          return (
            <Tag
              type={type}
              contents={name}
              sx={{ minWidth: 'fit-content' }}
              component="a"
              href={createTagLinkURL(id, type)}
              key={i}
            />
          )
        })}
      </Stack>

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

    </Section>

    <Divider sx={{ margin: '1rem 0'}}/>

    <Section title="Read More">
      {article.researchGroups[0] && (
        <Fragment>
          <Typography variant="h3">Research Groups:</Typography>
          {
            article.researchGroups.map((item) => (
              <li><Link to={`researchGroups/${item.slug}`}>{item.name}</Link></li>
            ))
          }
          <br/>
        </Fragment>
      )}
      {article.collaborations[0] && (
        <Fragment>
          <Typography variant="h3">Collaborations:</Typography>
          {
            article.collaborations.map((item) => (
              <li><Link to={`collaborations/${item.slug}`}>{item.name}</Link></li>
            ))
          }
          <br/>
        </Fragment>
      )}
      {article.projects[0] && (
        <Fragment>
          <Typography variant="h3">Projects:</Typography>
          {
            article.projects.map((item) => (
              <li><Link to={`projects/${item.slug}`}>{item.name}</Link></li>
            ))
          }
          <br/>
        </Fragment>
      )}
      {article.people[0] && (
        <Fragment>
          <Typography variant="h3">People:</Typography>
          {
            article.people.map((item) => (
              <li><Link to={`people/${item.slug}`}>{item.name}</Link></li>
            ))
          }
          <br/>
        </Fragment>
      )}
      {article.postTags[0] && (
        <Fragment>
          <Typography variant="h3">Post Tags:</Typography>
          {
            article.postTags.map((item) => (
              <li><Link to={`postTags/${item.slug}`}>{item.name}</Link></li>
            ))
          }
          <br/>
        </Fragment>
      )}
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
