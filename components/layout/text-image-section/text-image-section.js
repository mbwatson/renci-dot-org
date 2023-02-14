import { Box, Stack } from '@mui/material'
import Image from 'next/image'
import PropTypes from 'prop-types'

export const TextImageSection = ({ imageUrl, imageHeight, imageWidth, children }) => (
  <Stack
    direction={{ sm: 'column', md: 'row' }}
    spacing={{ sm: 2, md: 6 }}
    sx={{
      marginY: '3rem',
    }}
  >
    {imageUrl && <Box sx={{
      flex: {
        sm: '0 0',
        md: `0 0 ${255 / 16}rem`
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
    <Box sx={{ flex: '1' }}>
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