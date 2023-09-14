import { Stack } from '@mui/material'
import { FiltersForm } from './form'
import { FiltersTray } from './tray'

//

export const Filters = () => {
  return (
    <Stack direction="column" gap={ 1 }>
      <FiltersTray />
      <FiltersForm />
    </Stack>
  )
}