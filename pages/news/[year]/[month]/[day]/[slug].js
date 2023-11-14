import { Page } from "@/components/layout";
import { fetchArticle, fetchStrapiGraphQL } from "@/lib/strapi";

export default function Article({ article }) {
  return <Page title={article.title} description={article.subtitle}>
    <pre>{JSON.stringify(article, null, 2)}</pre>
  </Page>
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
