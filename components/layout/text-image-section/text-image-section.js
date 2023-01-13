import { Box, Stack } from '@mui/material'
import Image from 'next/image'
import PropTypes from 'prop-types'

export const TextImageSection = ({ imageUrl, imageHeight, imageWidth, children }) => (
  <Stack
    direction={{ sm: 'column', md: 'row' }}
    spacing={ 2 }
    sx={{
      marginY: '2rem',
      gap: '2rem',
    }}
  >
    {imageUrl && <Box sx={{
      flex: {
        sm: '1',
        md: '1'
      },
    }}>
      <Image
        priority
        src={imageUrl}
        width={imageWidth}
        height={imageHeight}
        layout="responsive"
      />
    </Box>}
    <Box sx={{ flex: '3' }}>
      {children}
    </Box>
  </Stack>
)

TextImageSection.propTypes = {
  imageUrl: PropTypes.string,
  imageHeight: PropTypes.number,
  imageWidth: PropTypes.number,
  children: PropTypes.node.isRequired,
}