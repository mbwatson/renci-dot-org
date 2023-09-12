import { Box, FormControl, IconButton, InputLabel, MenuItem, Select, Stack, Typography } from '@mui/material'
import { Close as ClearFiltersIcon } from '@mui/icons-material'
import { useRouter } from 'next/router'
import { useNews } from './context'

//

const TypeSelect = ({ value = '', onChange }) => {
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
        <MenuItem value="">Select Type</MenuItem>
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
        labelId="tag-select-label"
        id="tag-select"
        label="Tag"
        value={ value }
        onChange={ onChange }
      >
        <MenuItem value="">Select Tag</MenuItem>
        <MenuItem value="chris-bizon">chris-bizon</MenuItem>
        <MenuItem value="nrig">nrig</MenuItem>
        <MenuItem value="aerpaw">aerpaw</MenuItem>
        <MenuItem value="flynet">flynet</MenuItem>
        <MenuItem value="translator">translator</MenuItem>
      </Select>
    </FormControl>
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

  const handleClickClearFilters = () => {
    router.push('/news')
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
      <Typography>Filters:</Typography>
      <Box>
        <TypeSelect value={ filters.type } onChange={ handleChangeType } />
      </Box>
      <Box>
        <TagSelect value={ filters.tag } onChange={ handleChangeTags } />
      </Box>
      <IconButton onClick={ handleClickClearFilters }>
        <ClearFiltersIcon />
      </IconButton>
    </Stack>
  )
}