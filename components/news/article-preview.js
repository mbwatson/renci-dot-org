import { Box, Stack, Typography } from '@mui/material'
import { ArticleDate } from './article-date'
import { Label, Tag } from './tag'
import { Markdown } from '../markdown'
import { Link } from '../link'

//

export const ArticlePreview = ({ article }) => {
  return (
    <Box component="pre" sx={{
      '.title': {
        whiteSpace: 'pre-wrap',
      },
    }}>
      <Stack direction="row" gap={ 1 } justifyContent="flex-start" alignItems="center">
        <ArticleDate>{ article.publishDate }</ArticleDate>
        <Label type={ article.type } />
        {
          article.tags.map(tag => (
            <Tag key={ `article-${ article.slug }-tag-${ tag }` }>{ tag }</Tag>
          ))
        }
      </Stack>
      <Typography variant="h3" className="title">
        <Link to="#">{ article.title }</Link>
      </Typography>
    </Box>
  )
}
