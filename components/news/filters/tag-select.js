import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { useNews } from '../context'

//

export const TagSelect = () => {
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
