import { fetchNewsArticles } from "@/lib/strapi/newsGraphQL";
import { Stack, Typography } from "@mui/material"
import { useEffect, useRef, useState } from "react"
import { ArticlePreview } from "./article-preview";

export const ArticleList = ({
  selectedTags,
  newsOrFeature,
}) => {
  const [articles, setArticles] = useState(null);
  const controllerRef = useRef(new AbortController());
  useEffect(() => {
    (async () => {
      controllerRef.current.abort("Old filtered article request is stale");
      controllerRef.current = new AbortController();
      
      try {
        setArticles(await fetchNewsArticles({
          filters: {
            collaborations: selectedTags.collaborations.map(({ slug }) => slug),
            organizations: selectedTags.organizations.map(({ slug }) => slug),
            people: selectedTags.people.map(({ slug }) => slug),
            projects: selectedTags.projects.map(({ slug }) => slug),
            researchGroups: selectedTags.researchGroups.map(({ slug }) => slug),
            postTags: selectedTags.postTags.map(({ name }) => name),
            freeSearch: selectedTags.freeSearch,
            newsOrBlog:
              newsOrFeature === 'news'
                ? 'news'
                : newsOrFeature === 'feature'
                ? 'blog'
                : undefined,
          },
          signal: controllerRef.current.signal
        }));
      } catch (e) {
        if (e.name !== "AbortError") throw e; 
      }
    })();

    return () => { controllerRef.current.abort("Article fetch aborted: component unmounted") }
  }, [selectedTags, newsOrFeature])
  
  if (articles === null) return "Loading...";

  if (Array.isArray(articles) && articles.length === 1) return <Typography>We could not find any articles</Typography>

  return <Stack direction='column' gap={4} paddingY={4}>
    {
      articles.map((article, i) => (
        <ArticlePreview key={i} article={article} />
      ))
    }
  </Stack>
}