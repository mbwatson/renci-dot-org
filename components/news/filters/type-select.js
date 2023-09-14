import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { useNews } from '../context'

//

export const TypeSelect = () => {
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
