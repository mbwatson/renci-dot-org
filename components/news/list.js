import { Fragment, useMemo } from 'react'
import { Stack } from '@mui/material';
import { fetchNews } from "@/lib/strapi/newsAppearancesGraphQL";
import { ArticlePreview } from './article-preview'
import { useNews } from './context'
import { Filters } from './filters'

//

export const NewsList = () => {
  const { articles, filters } = useNews()

  const filteredArticles = useMemo(() => {
    let _filteredArticles = [...articles]
    if (filters.type) {
      _filteredArticles = _filteredArticles
        .filter(article => article.type === filters.type)
    }
    if (filters.tag.length) {
      _filteredArticles = _filteredArticles
        .filter(article => filters.tag.some(tag => article.tags.includes(tag) ))
    }
    return _filteredArticles
  }, [filters])

  return (
    <Fragment>
      <Filters />

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
    </Fragment>
  )
}
