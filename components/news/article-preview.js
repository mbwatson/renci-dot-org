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
      '.excerpt': {
        whiteSpace: 'pre-wrap',
      },
    }}>
      <Stack direction="row" gap={ 1 } justifyContent="flex-start" alignItems="center">
        <ArticleDate date={ article.publishDate } />
        {' '}&mdash;{' '}
        <Label type={ article.type } />
        {
          article.tags.map(tag => (
            <Tag key={ `${ article.slug }_${ tag }` }>{ tag }</Tag>
          ))
        }
      </Stack>
      <Typography variant="h3" className="title">
        <Link to="#">{ article.title }</Link>
      </Typography>
      <Typography paragraph className="excerpt">
        { article.excerpt }
      </Typography>
    </Box>
  )
}
