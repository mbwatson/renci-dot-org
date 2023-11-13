import { fetchArticle, fetchStrapiGraphQL } from "@/lib/strapi";

export default function NewsArticle({ article }) {
  return <pre>{JSON.stringify(article, null, 2)}</pre>
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

  const paths = postsGql.data.posts.data.map(({
    attributes: { slug: postSlug, publishDate }
  }) => {
    // this matches the functionality in article-preview.js
    // maybe extract both to a common function?
    const date = new Date(publishDate);
    const [day, month, year] = [
      date.getUTCDate().toString(),
      (date.getUTCMonth() + 1).toString(),
      date.getUTCFullYear().toString(),
    ];

    return {
      params: { slug: [year, month, day, postSlug] }
    };
  });

  return {
    paths,
    fallback: 'blocking', 
  };
}

export async function getStaticProps({ params }) {
  console.log("params", params.slug[3]);
  
  const article = await fetchArticle(params.slug[3]);

  if (article === null) return { notFound: true };
  
  return { props: { article } }
}