import { Fragment, useMemo } from 'react'
import { Stack } from '@mui/material';
import { fetchNews } from "@/lib/strapi/newsAppearancesGraphQL";
import { ArticlePreview } from './article-preview'
import { useNews } from './context'
import { Filters } from './filters'

//

export const NewsList = () => {
  const { filters, filteredArticles } = useNews()

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
