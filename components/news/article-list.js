import { fetchNewsArticles } from "@/lib/strapi/newsGraphQL";
import { Box, Skeleton, Stack, Typography } from "@mui/material"
import { useEffect, useRef, useState } from "react"
import { ArticlePreview } from "./article-preview";

export const ArticleList = ({
  selectedTags,
  newsOrFeature,
}) => {
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(true);
  const controllerRef = useRef(new AbortController());
  useEffect(() => {
    (async () => {
      controllerRef.current.abort("Old filtered article request is stale");
      controllerRef.current = new AbortController();
      setLoading(true);
      
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
        setLoading(false);
      } catch (e) {
        if (e.name !== "AbortError") throw e; 
      }
    })();

    return () => { controllerRef.current.abort("Article fetch aborted: component unmounted") }
  }, [selectedTags, newsOrFeature])
  
  if (loading || articles === null) return <ArticleListSkeleton />;

  if (Array.isArray(articles) && articles.length === 0) return <Stack sx={{ minHeight: '300px' }} alignItems='center' justifyContent='center' gap={1}>
    <Typography variant="h3" fontWeight='bold'>No results</Typography>
    <Typography variant="subtitle1" maxWidth='35ch' textAlign='center'>
      We couldn&apos;t find any articles matching your filters. Please remove some and try again.
    </Typography>
  </Stack>

  return <Stack direction='column' gap={4} paddingY={4}>
    {
      articles.map((article, i) => (
        <ArticlePreview key={i} article={article} />
      ))
    }
  </Stack>
}

export const ArticleListSkeleton = () => (
  <Stack direction='column' gap={4} paddingY={4}>
    {new Array(10).fill(0).map((_, i) => <Box key={i}>
      <Stack gap={1}>
        <Skeleton variant="rectangular" sx={{ borderRadius: '8px', maxWidth: `${Math.floor(Math.random() * 30) + 30}ch` }} height="2rem" />
        <Skeleton variant="rectangular" sx={{ borderRadius: '8px' }} height="6crem" />
      </Stack>
    </Box>)}
  </Stack>
)