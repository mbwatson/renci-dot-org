import { useMemo } from 'react'
import { Collapse, Stack } from '@mui/material'
import { Tune as FiltersIcon } from '@mui/icons-material'
import { useNews } from '../context'
import { Label, Tag } from '../tag'
import { ClearFiltersButton } from './clear-button'

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
    return !!(filters.tag.length)
  }, [filters])

  return (
    <Collapse in={ showTray }>
      <Stack
        direction="row"
        gap={ 1 }
        sx={{
          backgroundColor: '#f3f6f9',    
          borderRadius: '3px',
          p: 1,
          '.tags-container': { flex: 1 },
        }}
      >
        <FiltersIcon fontSize="small" color="disabled" sx={{ alignSelf: 'center' }} />
        <Stack
          direction="row"
          alignItems="center"
          gap={ 1 }
          className="tags-container"
        >
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
        <ClearFiltersButton />
      </Stack>
    </Collapse>
  )
}