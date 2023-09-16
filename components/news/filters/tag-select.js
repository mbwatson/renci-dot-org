import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { useNews } from '../context'
import { Tag } from '../tag'

//

export const TagSelect = () => {
  const { availableTags, filters, filterNews, removeTag } = useNews()

  const handleChange = event => {
    filterNews({
      ...filters,
      tag: event.target.value,
    })
  }

  const handleClickDeleteTagFilter = tag => () => {
    removeTag(tag)
  }

  return (
    <FormControl fullWidth size="small">
      <InputLabel id="tag-select-label">Tags</InputLabel>
      <Select
        multiple
        labelId="tag-select-label"
        id="tag-select"
        label="Tags"
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
