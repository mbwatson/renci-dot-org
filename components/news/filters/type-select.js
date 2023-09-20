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
        '.MuiToggleButton-root': {
          color: '#33445599',
          transition: 'color 250ms',
          '&:hover': {
            color: '#334455',
          }
        },
        '.Mui-selected': {
          color: color,
          backgroundColor: `${ color }33`,
        },
      }}
    >
      <ToggleButton
        value="all"
        aria-label="all"
        disabled={ filters.type === 'all' }
      >All News</ToggleButton>
      <ToggleButton
        value="blog"
        aria-label="blog"
        disabled={ filters.type === 'blog' }
      >Blog</ToggleButton>
      <ToggleButton
        value="feature"
        aria-label="feature"
        disabled={ filters.type === 'feature' }
      >Features</ToggleButton>
    </ToggleButtonGroup>
  )
}
