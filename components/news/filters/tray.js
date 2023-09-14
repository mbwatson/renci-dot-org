import { useMemo } from 'react'
import { Collapse, Stack } from '@mui/material'
import { useNews } from '../context'
import { Label, Tag } from '../tag'

//

export const FiltersTray = () => {
  const { removeLabel, removeTag, filters } = useNews()

  const handleClickDeleteTypeFilter = type => () => {
    removeLabel(type)
  }

  const handleClickDeleteTagFilter = tag => () => {
    removeTag(tag)
  }

  const showTray = useMemo(() => {
    return !!(filters.type || filters.tag.length)
  }, [filters])

  return (
    <Collapse in={ showTray }>
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
        { filters.type && <Label type={ filters.type } onDelete={ handleClickDeleteTypeFilter(filters.type) } /> }
        {
          filters.tag && filters.tag.map(tag => (
            <Tag
              key={ `filter-chip-${ tag }` }
              onDelete={ handleClickDeleteTagFilter(tag) }
            >{ tag }</Tag>
          ))
        }
      </Stack>
    </Collapse>
  )
}