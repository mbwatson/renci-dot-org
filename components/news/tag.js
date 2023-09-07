import { styled } from '@mui/system'

export const Tag = styled('span')(({ theme }) => ({
  padding: theme.spacing(0.5),
  border: '1px solid',
  backgroundColor: '#ccc',
  color: '#666',
  lineHeight: 1,
  textTransform: 'uppercase',
  fontSize: '65%',
  fontWeight: 'bold',
  letterSpacing: '1px',
  filter: 'brightness(1.0)',
  cursor: 'default',
  '&:hover': {
    filter: 'brightness(1.2)',
  },
}))

const labelColor = {
  blog: '#ff7f50',
  feature: '#007abc',
}

export const Label = ({ type }) => {
  return (
    <Tag sx={{
      borderColor: labelColor[type],
      backgroundColor: `${ labelColor[type] }66`,
    }}>{ type }</Tag>
  )
}
