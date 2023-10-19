import { useRouter } from 'next/router'
import { Box, Stack, Typography } from '@mui/material'
import { ArticleDate } from './article-date'
import { Tag } from './ui-tag'
import { Link } from '../link'
import { useNews } from './context'
import { useCallback, useMemo } from 'react'

//

const Separator = () => <Box component="span" sx={{
  filter: 'opacity(0.75)',
}}>&#8226;</Box>

const ArticleHeading = ({
  publishDate,
  newsOrBlog,
  collaborations,
  organizations,
  people,
  tags,
  projects,
  researchGroups
}) => {
  const router = useRouter()
  const { newFilters, setNewFilters } = useNews()

  // make a flat list of tags from the props, where each tag is an obj:
  // { name, slug, type }
  const postTags = useMemo(() => (
    Object.entries({
      collaborations,
      organizations,
      people,
      tags,
      projects,
      researchGroups
    })
      .filter(([, tag]) => tag.length > 0)
      .reduce((arr, [type, tags]) => {
        arr.push(...tags.map((t) => ({...t, type})))
        return arr;
      }, [])
  ), [
    collaborations,
    organizations,
    people,
    tags,
    projects,
    researchGroups
  ]);

  const handleAddTag = useCallback((tag) => {
    setNewFilters(prev => [...prev, tag])
  }, [setNewFilters]);

  const handleDeleteTag = useCallback((tag) => {
    setNewFilters(prev => prev.filter((compareTag) => (
      compareTag.slug !== tag.slug && compareTag.type !== tag.type
    )))
  }, [setNewFilters]);

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
        
        <Tag
          contents={newsOrBlog}
          uppercase
        />
      </Stack>


      <Stack
        direction="row"
        justifyContent="flex-end"
        alignItems="center"
        gap={ 1 }
        className="tags"
      >
        {
          postTags.slice(0, 3).map(postTag => {
            const isFiltered = newFilters.some(({ slug, type }) => postTag.slug === slug && postTag.type === type);
            
            return <Tag
              key={`${postTag.type}-${postTag.slug}`}
              contents={postTag.name}
              type={postTag.type}
              onClick={
                isFiltered
                  ? undefined
                  : () => handleAddTag(postTag)
              }
              onDelete={
                !isFiltered
                  ? undefined
                  : () => handleDeleteTag(postTag)
              }
            />
          })
        }
      </Stack>
    </Stack>
  )
}

export const ArticlePreview = ({ article }) => {
  return (
    <Box sx={{
      '.metadata-row': {
        py: 1,
        '.date-and-label': {
          textTransform: 'uppercase',
          fontSize: '0.75em',
        },
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

      <Typography variant="h3" className="title" sx={{
        '& a': {
          textDecoration: 'none',
        }
      }}>
        <Link to={ `/news/${ article.slug }` }>{ article.title }</Link>
      </Typography>

      <Typography paragraph className="excerpt" sx={{
        '--maxHeight': '75px',
        '&:before': {
          content: "''",
          width: '100%',
          height: '100%',
          position: 'absolute',
          left: 0,
          top: 0,
          pointerEvents: 'none',
          background: 'linear-gradient(transparent 0px, white calc(var(--maxHeight) - 4px ))'
        },
        '& > .hover-link': {
          position: 'absolute',
          bottom: 0,
          right: 0,
        },
        position: 'relative',
        maxHeight: 'var(--maxHeight)',
        overflow: 'hidden',
      }}>
        {/* { article.excerpt } */}
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae distinctio rem non soluta mollitia, deserunt excepturi amet porro corrupti expedita, vero animi incidunt accusantium quis? Nisi hic eveniet non, rerum iste beatae! Veniam dolore cupiditate assumenda fugiat inventore, molestias, sapiente ipsa, quia corporis voluptatibus doloremque optio exercitationem odit deleniti sit ab natus quas sed. Perspiciatis odio placeat esse fugit quia, commodi rem maxime nobis atque aliquam voluptatum expedita. Laudantium debitis architecto ea esse. Nemo nisi recusandae quo adipisci amet iure, at necessitatibus quia alias saepe voluptates mollitia, cumque dolorem tempore ullam, ipsum labore inventore. Deserunt veritatis accusantium culpa ratione, doloremque expedita facilis. Debitis, a reprehenderit alias voluptate libero quis natus, provident deleniti asperiores soluta corrupti temporibus doloremque saepe? Explicabo omnis beatae quia quae quis, dolorum labore corporis eligendi sunt pariatur repellendus debitis aliquid sequi unde nemo necessitatibus inventore veritatis, fugit magnam laborum quod. At ipsa saepe assumenda numquam, eum odio! Quam, praesentium tenetur at labore eos architecto impedit voluptatem fugiat nesciunt, maiores debitis, modi magni voluptatum optio officia ipsa nam fugit deserunt animi repellendus quaerat alias. Repellat sunt nihil distinctio consectetur nobis beatae? Esse ab, atque iure vitae omnis quam quo similique dolorum accusantium aperiam aspernatur maiores, consequuntur, cupiditate reprehenderit.
        <Link to={`/news/${ article.slug }`} className='hover-link'>Read more →</Link>
      </Typography>

    </Box>
  )
}
