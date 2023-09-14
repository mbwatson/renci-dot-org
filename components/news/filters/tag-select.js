import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { useNews } from '../context'

//

export const TagSelect = () => {
  const { filters, filterNews, availableTags } = useNews()

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
        {
          availableTags.map(tag => (
            <MenuItem
              key={ `tag-option-${ tag }` }
              value={ tag }
            >{ tag }</MenuItem>
          ))
        }
      </Select>
    </FormControl>
  )
}
