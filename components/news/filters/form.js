import { Box, FormControl, IconButton, InputLabel, MenuItem, Select, Stack, Typography } from '@mui/material'
import { Close as ClearFiltersIcon } from '@mui/icons-material'
import { useRouter } from 'next/router'
import { useNews } from '../context'

//

const TypeSelect = () => {
  const { filters, filterNews } = useNews()

  const handleChange = event => {
    filterNews({
      ...filters,
      type: event.target.value,
    })
  }

  return (
    <FormControl fullWidth size="small">
      <InputLabel id="type-select-label">Type</InputLabel>
      <Select
        labelId="type-select-label"
        id="type-select"
        label="Type"
        value={ filters.type || '' }
        onChange={ handleChange }
      >
        <MenuItem value="blog">Blog</MenuItem>
        <MenuItem value="feature">Feature</MenuItem>
      </Select>
    </FormControl>
  )
}

const TagSelect = () => {
  const { filters, filterNews } = useNews()

  const handleChange = event => {
    filterNews({
      ...filters,
      tag: event.target.value,
    })
  }

  return (
    <FormControl fullWidth size="small">
      <InputLabel id="tag-select-label">Tag</InputLabel>
      <Select
        multiple
        labelId="tag-select-label"
        id="tag-select"
        label="Tag"
        value={ filters.tag }
        onChange={ handleChange }
      >
        <MenuItem value="chris-bizon">chris-bizon</MenuItem>
        <MenuItem value="nrig">nrig</MenuItem>
        <MenuItem value="aerpaw">aerpaw</MenuItem>
        <MenuItem value="flynet">flynet</MenuItem>
        <MenuItem value="translator">translator</MenuItem>
        <MenuItem value="nothing">nothing</MenuItem>
      </Select>
    </FormControl>
  )
}

export const ClearFiltersButton = () => {
  const router = useRouter()
  const { filterNews } = useNews()

  const handleClickClearFilters = () => {
    filterNews()
  }

  return (
    <IconButton
      size="small"
      onClick={ handleClickClearFilters }
    ><ClearFiltersIcon fontSize="small" /></IconButton>
  )
}

export const FiltersForm = () => {
  return (
    <Stack
      direction="column"
      alignItems="flex-start"
      gap={ 1 }
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ width: '100%' }}>
        <Typography component="label">Filters</Typography>
        <ClearFiltersButton />
      </Stack>

      <TypeSelect />

      <TagSelect />

    </Stack>
 )
}