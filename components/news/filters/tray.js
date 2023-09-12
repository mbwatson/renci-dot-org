import { Collapse, Stack } from '@mui/material'
import { useNews } from '../context'
import { Label, Tag } from '../tag'

//

export const FiltersTray = () => {
  const { filters } = useNews()

  const handleClickDeleteTypeFilter = event => {
    console.log(event)
  }

  const handleClickDeleteTagFilter = event => {
    console.log(event)
  }

  return (
    <Collapse in={ filters.type || filters.tag.length }>
      <Stack
        direction="row"
        alignItems="center"
        gap={ 1 }
        sx={{
          borderRadius: '3px',
          p: 1,
          backgroundColor: '#f3f6f9',
        }}
      >
        { filters.type && <Label type={ filters.type } onDelete={ handleClickDeleteTypeFilter } /> }
        {
          filters.tag && filters.tag.map(tag => (
            <Tag
              key={ `filter-chip-${ tag }` }
              onDelete={ handleClickDeleteTypeFilter }
            >{ tag }</Tag>
          ))
        }
      </Stack>
    </Collapse>
  )
}