import { Fragment } from 'react'
import { Box, Checkbox, FormControl, InputLabel, List, ListItemButton, ListItemIcon, ListItemText, ListSubheader, Select } from '@mui/material'
import { useNews } from '../context'
import { Tag } from '../tag'

//

const TAG_GROUPS = {
  'Research Groups': [
    'earth-data-science',
    'nrig',
  ],
  'Collaborations': [
    'bdc3',
    'heal',
    'ncds',
  ],
  'Projects': [
    'aerpaw',
    'exogeni',
    'flynet',
    'translator',
  ],
  'People': [
    'chris-bizon',
    'stan-ahalt',
  ],
  'Teams': [
    'acis',
    'comms',
    'hr',
  ],
}

export const TagSelect = () => {
  const { availableTags, filters, filterNews, removeTag, toggleTag } = useNews()

  const handleClickOption = tag => () => {
    toggleTag(tag)
  }

  return (
    <List
      dense
      multiple
      labelId="tag-select-label"
      id="tag-select"
      label="Tags"
      value={ filters.tag }
      sx={{
        '.MuiListItemIcon-root': { minWidth: '24px' },
        '.MuiCheckbox-root': { p: 0 },
        '.MuiListItemText-root': { m: 0 },
        '.MuiListSubheader-root': {
          lineHeight: '24px',
          '&:not(:first-child)': {
            mt: 2,
          }
        },
      }}
    >
      {
        Object.keys(TAG_GROUPS).reduce((acc, tagGroup) => [
          ...acc,
          <ListSubheader disableGutters key={ `subheader-${ tagGroup }` }>{ tagGroup }</ListSubheader>,
          ...TAG_GROUPS[tagGroup].map((tag, i) => (
            <ListItemButton
              key={ `${ tagGroup }-${ tag }` }
              value={ tag }
              onClick={ handleClickOption(tag) }
            >
              <ListItemIcon>
                <Checkbox
                  size="small"
                  edge="start"
                  checked={ filters.tag.includes(tag) }
                  tabIndex={ -1 }
                  disableRipple
                  inputProps={{/*{ 'aria-labelledby': labelId }*/}}
                />
              </ListItemIcon>
              <ListItemText primary={ tag } />
            </ListItemButton>
          ))
        ], [])
      }
    </List>
  )
}
