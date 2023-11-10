import { useNewsArticles } from "@/lib/strapi/newsGraphQL";
import { Box, Pagination, Skeleton, Stack, Typography } from "@mui/material"
import { ArticlePreview } from "./article-preview";
import { useMemo } from "react";

export const ArticleList = ({
  selectedTags,
  isTagSelected,
  deleteTag,
  addTag,
  newsOrFeature,
  page,
  setPage,
}) => {
  const {
    data,
    isLoading,
    error,
  } = useNewsArticles({
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
    page,
  });

  const freeSearch = useMemo(() => (selectedTags.freeSearch), [selectedTags]);

  if (isLoading || !data) return <Stack><ArticleListSkeleton /></Stack>

  const { articles, meta } = data;

  if (Array.isArray(articles) && articles.length === 0) return <NoArticlesText />

  return <Stack>
    <Stack direction='column' gap={4} paddingY={4}>
      {articles.map((article, i) => (
        <ArticlePreview
          key={i}
          article={article}
          isTagSelected={isTagSelected}
          deleteTag={deleteTag}
          addTag={addTag}
          freeSearch={freeSearch}
        />
      ))}
    </Stack>
    
    <Pagination count={meta.pagination?.pageCount} page={page} onChange={(_, p) => page === p ? null : setPage(p)} sx={{ alignSelf: 'center' }} />
  </Stack> 
}

const NoArticlesText = () => (
  <Stack sx={{ minHeight: '300px' }} alignItems='center' justifyContent='center' gap={1}>
    <Typography variant="h3" fontWeight='bold'>No results</Typography>
    <Typography variant="subtitle1" maxWidth='35ch' textAlign='center'>
      We couldn&apos;t find any articles matching your filters. Please remove some and try again.
    </Typography>
  </Stack>
)

export const ArticleListSkeleton = () => (
  <Stack direction='column' gap={4} paddingY={4}>
    {new Array(25).fill(0).map((_, i) => <Box key={i}>
      <Stack gap={1}>
        <Skeleton variant="rectangular" sx={{ borderRadius: '8px', maxWidth: '60%' }} height="2rem" />
        <Skeleton variant="rectangular" sx={{ borderRadius: '8px' }} height="6rem" />
      </Stack>
    </Box>)}
  </Stack>
)