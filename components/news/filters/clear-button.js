import { IconButton } from '@mui/material'
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
    <IconButton
      size="small"
      onClick={ handleClickClearFilters }
    ><ClearFiltersIcon fontSize="small" /></IconButton>
  )
}
