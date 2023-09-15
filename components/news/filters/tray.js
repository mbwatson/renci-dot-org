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
          p: 1,
          borderRadius: '3px',
          backgroundColor: '#f3f6f9',
        }}
      >
        { filters.type && <Label onDelete={ handleClickDeleteTypeFilter(filters.type) }>{ filters.type }</Label> }
        {
          filters.tag && filters.tag.map(tag => (
            <Tag
              key={ `filter-chip-${ tag }` }
              noLink
              onDelete={ handleClickDeleteTagFilter(tag) }
            >{ tag }</Tag>
          ))
        }
      </Stack>
    </Collapse>
  )
}