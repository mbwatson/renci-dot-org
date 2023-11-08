import { Box, Skeleton, Stack, Typography } from "@mui/material"
import { Link } from "../link"
import { Tag } from "./tag"

export const ArticlePreview = ({
  article,
  skeleton = false,
}) => {
  const date = new Date(article.publishDate)
  const [day, month, year] = [
    date.getUTCDate(),
    date.getUTCMonth() + 1,
    date.getUTCFullYear(),
  ]
  const dateString = date.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

  const articleLink = `news/${year}/${month}/${day}/${article.slug}`;

  const tags = [
    article.projects.map((x) => ({ ...x, type: 'projects' })),
    article.people.map((x) => ({ ...x, type: 'people' })),
    article.collaborations.map((x) => ({ ...x, type: 'collaborations' })),
    article.researchGroups.map((x) => ({ ...x, type: 'researchGroups' })),
    article.organizations.map((x) => ({ ...x, type: 'organizations' })),
    article.tags.map((x) => ({ ...x, type: 'postTags' }))
  ].flat()
  
  if (skeleton) return <Box>
    <Skeleton />
  </Box>

  return <Stack gap={1}>
    <Box>
      <Stack direction='row' alignItems='baseline' gap={2}>
        <Stack direction='row' alignItems='center' gap={1}>
          <Typography variant="subtitle2" whiteSpace='nowrap'>{dateString}</Typography>
          <Box sx={{ width: '0.3em', height: '0.3em', backgroundColor: '#b6b6b6', borderRadius: '50%', flex: '0 0 auto' }} />
          <Typography variant="subtitle2" textTransform='uppercase'>{
            article.newsOrBlog === 'news' ? 'News' : 'Feature'
          }</Typography>
        </Stack>

        <Stack direction='row' flex="1"  gap={1} sx={{ overflowX: 'auto', direction: 'rtl' }}>
          {tags.map(({ name, type }, i) => <Tag
            key={i}
            type={type}
            contents={name}
            sx={{ minWidth: 'fit-content' }}
          />)}
        </Stack>
      </Stack>
      <Typography variant="h3" sx={{ '& a': { textDecoration: 'none' }}}>
        <Link to={articleLink}>{article.title}</Link>
      </Typography>
    </Box>
    

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
      {article.excerpt}
      <Link to={articleLink} className='hover-link'>Read more →</Link>
    </Typography>
  </Stack>
}