import {
  Box, FormControl, IconButton, InputLabel, MenuItem,
  Select, Stack, ToggleButton, ToggleButtonGroup, Typography,
} from '@mui/material'
import { Close as ClearFiltersIcon } from '@mui/icons-material'
import { useRouter } from 'next/router'
import { useNews } from '../context'
import { ClearFiltersButton } from './clear-button'
import { TypeSelect } from './type-select'
import { TagSelect } from './tag-select'

//

export const FiltersForm = () => {
  return (
    <Box sx={{
      /* with container queries, we achieve a
       *  responsive filter form layout
       * 
       * >= 500px available space:  Label                       (X)
       *                            [_Select______] [_Select______]
       *
       *  < 500px available space:  Label                       (X)
       *                            [_Select______________________]
       *                            [_Select______________________]
       */
      width: '100%',
      containerType: 'inline-size',
      '.form-header': { },
      '.select-stack': {
        '@container (min-width: 500px)': {
          flexDirection: 'row'
        }
      }
    }}>
      <Stack
        direction="column"
        alignItems="stretch"
        gap={ 1 }
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          className="form-header"
        >
          <Typography component="label">Filters</Typography>
          <ClearFiltersButton />
        </Stack>

        <Stack
          direction="column"
          className="select-stack"
          gap={ 2 }
        >
          <TypeSelect />
          <TagSelect />
        </Stack>
      </Stack>
    </Box>
 )
}