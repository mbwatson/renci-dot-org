import { useMemo } from 'react'
import { Stack } from '@mui/material';
import { fetchNews } from "@/lib/strapi/newsAppearancesGraphQL";
import { ArticlePreview } from './article-preview'
import { useNews } from './context'

//

export const NewsList = () => {
  const { articles, filters } = useNews()

  const filteredArticles = useMemo(() => {
    let _filteredArticles = [...articles]
    if ('type' in filters) {
      _filteredArticles = _filteredArticles.filter(article => article.type === filters.type)
    }
    return _filteredArticles
  }, [filters])

  return (
    <Stack gap={ 1 }>
      {
        filteredArticles.map(article => (
          <ArticlePreview
            key={ article.slug }
            article={ article }
          />
        ))
      }
    </Stack>
  )
}
