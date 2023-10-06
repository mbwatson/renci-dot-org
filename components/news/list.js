import { Fragment, useMemo } from 'react'
import { Stack } from '@mui/material';
import { fetchNews } from "@/lib/strapi/newsAppearancesGraphQL";
import { ArticlePreview } from './article-preview'
import { useNews } from './context'

//

export const NewsList = () => {
  const { newArticles } = useNews()

  return (
    <Fragment>
      <Stack gap={ 1 }>
        {
          newArticles.map(article => (
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
