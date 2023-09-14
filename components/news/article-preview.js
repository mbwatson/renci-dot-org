import { useRouter } from 'next/router'
import { Box, Stack, Typography } from '@mui/material'
import { ArticleDate } from './article-date'
import { Label, Tag } from './tag'
import { Markdown } from '../markdown'
import { Link } from '../link'
import { useNews } from './context'

//

const Separator = () => <Box component="span" sx={{
  filter: 'opacity(0.75)',
}}>&#8226;</Box>

const ArticleHeading = ({ publishDate, slug, tags, type }) => {
  const router = useRouter()
  const { filters } = useNews()

  return (
    <Stack
      direction={{      xs: 'column',     sm: 'row' }}
      justifyContent={{ xs: 'flex-start', sm: 'space-between' }}
      alignItems={{     xs: 'flex-start', sm: 'center' }}
      gap={ 1 }
      className="metadata-row"
    >
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        gap={ 1 }
        className="date-and-label"
      >
        <ArticleDate date={ publishDate } />
        
        <Separator />
        
        <Label link>{ type }</Label>
      </Stack>


      <Stack
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
        gap={ 1 }
        className="tags"
      >
        {
          tags.map(tag => (
            <Tag link key={ `${ slug }_${ tag }` }>{ tag }</Tag>
          ))
        }
      </Stack>
    </Stack>
  )
}

export const ArticlePreview = ({ article }) => {
  return (
    <Box component="pre" sx={{
      '.metadata-row': {
        py: 1,
        '.date-and-label': {},
        '.tags': {},
      },
      '.title': {
        whiteSpace: 'pre-wrap',
      },
      '.excerpt': {
        whiteSpace: 'pre-wrap',
        mx: 0, my: 1,
      },
    }}>
      <ArticleHeading { ...article } />

      <Typography variant="h3" className="title">
        <Link to={ `/news/${ article.slug }` }>{ article.title }</Link>
      </Typography>

      <Typography paragraph className="excerpt">
        { article.excerpt }
      </Typography>
    </Box>
  )
}
