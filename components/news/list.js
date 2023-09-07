import { Stack } from '@mui/material';
import { fetchNews } from "@/lib/strapi/newsAppearancesGraphQL";
import { ArticlePreview } from './article-preview'

//

export const NewsList = ({ articles }) => {
  return (
    <Stack gap={ 1 }>
      {
        articles.map(article => (
          <ArticlePreview key={ article.id } article={ article } />
        ))
      }
    </Stack>
  )
}
