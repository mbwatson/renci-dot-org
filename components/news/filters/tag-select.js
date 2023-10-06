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
  const { tags, filters, filterNews, removeTag, toggleTag } = useNews()

  const handleClickOption = tag => () => {
    toggleTag(tag)
  }

  return (
    <List
      dense
      multiple
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
        Object.keys(tags).reduce((acc, tagGroup) => [
          ...acc,
          <ListSubheader disableGutters key={ `subheader-${ tagGroup }` }>{ tagGroup }</ListSubheader>,
          ...tags[tagGroup].map((tag, i) => (
            <ListItemButton
              key={ `${ tagGroup }-${ tag.name }` }
              value={ tag.name }
              onClick={ handleClickOption(tag.name) }
            >
              <ListItemIcon>
                <Checkbox
                  size="small"
                  edge="start"
                  checked={ filters.tag.includes(tag.name) }
                  tabIndex={ -1 }
                  disableRipple
                  inputProps={{/*{ 'aria-labelledby': labelId }*/}}
                />
              </ListItemIcon>
              <ListItemText primary={ `${tag.name} (${tag.numOfPosts})`} />
            </ListItemButton>
          ))
        ], [])
      }
    </List>
  )
}
