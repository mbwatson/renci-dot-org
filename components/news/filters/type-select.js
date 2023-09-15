import { useMemo } from 'react'
import { ToggleButton, ToggleButtonGroup } from '@mui/material'
import { useNews } from '../context'
import { LABEL_COLOR } from '../tag'

//

export const TypeSelect = () => {
  const { filterNews, filters } = useNews()

  const handleChange = event => {
    const { value } = event.target
    if (['blog', 'feature'].includes(value) ) {
      filterNews({ ...filters, type: value })
      return
    }
    filterNews({ tag: filters.tag })
  }

  const color = useMemo(() => !!filters.type
    ? LABEL_COLOR[filters.type]
    : '#334455', [filters.type])

  return (
    <ToggleButtonGroup
      fullWidth
      size="small"
      value={ filters.type || 'all' }
      exclusive
      onChange={ handleChange }
      aria-label="article type"
      sx={{
        '.Mui-selected': {
          color: color,
          backgroundColor: `${ color }33`,
        },
      }}
    >
      <ToggleButton value="all" aria-label="all">
        All News
      </ToggleButton>
      <ToggleButton value="blog" aria-label="blog">
        Blog
      </ToggleButton>
      <ToggleButton value="feature" aria-label="feature">
        Features
      </ToggleButton>
    </ToggleButtonGroup>
  )
}
