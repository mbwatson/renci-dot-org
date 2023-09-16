import { ButtonBase } from '@mui/material'
import { Close as ClearFiltersIcon } from '@mui/icons-material'
import { useRouter } from 'next/router'
import { useNews } from '../context'

//

export const ClearFiltersButton = () => {
  const router = useRouter()
  const { filterNews } = useNews()

  const handleClickClearFilters = () => {
    filterNews()
  }

  return (
    <ButtonBase
      disableRipple
      disableTouchRipple
      onClick={ handleClickClearFilters }
      sx={{
        transition: 'filter 250ms',
        fontSize: '75%',
        fontFamily: 'sans-serif',
        filter: 'opacity(0.5) saturate(0.1)',
        '&:hover': { filter: 'opacity(1.0) saturate(0.8)' },
      }}
    >× Clear all</ButtonBase>
  )
}
