import { Box, FormControl, IconButton, InputLabel, MenuItem, Select, Stack, Typography } from '@mui/material'
import { Close as ClearFiltersIcon } from '@mui/icons-material'
import { useRouter } from 'next/router'
import { useNews } from './context'

//

const TypeSelect = ({ value = [], onChange }) => {
  return (
    <FormControl fullWidth size="small">
      <InputLabel id="type-select-label">Type</InputLabel>
      <Select
        labelId="type-select-label"
        id="type-select"
        value={ value }
        label="Type"
        onChange={ onChange }
      >
        <MenuItem value="blog">Blog</MenuItem>
        <MenuItem value="feature">Feature</MenuItem>
      </Select>
    </FormControl>
  )
}

const TagSelect = ({ value = '', onChange }) => {
  return (
    <FormControl fullWidth size="small">
      <InputLabel id="tag-select-label">Tag</InputLabel>
      <Select
        multiple
        labelId="tag-select-label"
        id="tag-select"
        label="Tag"
        value={ value }
        onChange={ onChange }
      >
        <MenuItem value="chris-bizon">Chris Bizon</MenuItem>
        <MenuItem value="nrig">NRIG</MenuItem>
        <MenuItem value="aerpaw">AERPAW</MenuItem>
        <MenuItem value="flynet">FLYNET</MenuItem>
        <MenuItem value="translator">Translator</MenuItem>
        <MenuItem value="nothing">Nonexistent Tag</MenuItem>
      </Select>
    </FormControl>
  )
}

const ClearFiltersButton = () => {
  const router = useRouter()

  const handleClickClearFilters = () => {
    router.push('/news')
  }

  return (
    <IconButton onClick={ handleClickClearFilters }>
      <ClearFiltersIcon />
    </IconButton>
  )
}

export const Filters = () => {
  const router = useRouter()
  const { filters } = useNews()

  const handleChangeType = event => {
    router.push({
      path: '/news',
      query: { ...filters, type: event.target.value },
    })
  }

  const handleChangeTags = event => {
    router.push({
      path: '/news',
      query: { ...filters, tag: event.target.value },
    })
  }

  return (
    <Stack
      direction="row"
      alignItems="center"
      gap={ 1 }
      sx={{
        '& > .MuiBox-root:not(:first-child)': {
          flex: 1,
        },
      }}
    >
      <Typography component="label">Filters:</Typography>

      <TypeSelect
        value={ filters.type }
        onChange={ handleChangeType }
      />

      <TagSelect
        value={ filters.tag }
        onChange={ handleChangeTags }
      />

      <ClearFiltersButton />

    </Stack>
  )
}