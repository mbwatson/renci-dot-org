import { Box, FormControl, IconButton, InputLabel, MenuItem, Select, Stack, Typography } from '@mui/material'
import { Close as ClearFiltersIcon } from '@mui/icons-material'
import { useRouter } from 'next/router'
import { useNews } from '../context'
import { ClearFiltersButton } from './clear-button'
import { TypeSelect } from './type-select'
import { TagSelect } from './tag-select'

//

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