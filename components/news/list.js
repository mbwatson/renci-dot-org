import { Stack } from '@mui/material';
import { fetchNews } from "@/lib/strapi/newsAppearancesGraphQL";
import { ArticlePreview } from './article-preview'
import { useNews } from './context'

//

export const NewsList = () => {
  const { articles } = useNews()

  return (
    <Stack gap={ 1 }>
      {
        articles.map(article => (
          <ArticlePreview
            key={ article.slug }
            article={ article }
          />
        ))
      }
    </Stack>
  )
}
