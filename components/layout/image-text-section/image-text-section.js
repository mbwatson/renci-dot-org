import { Grid } from '@mui/material'
import Image from 'next/image'
import PropTypes from 'prop-types'
import styles from './image-text-section.module.css'

export const TextImageSection = ({ imageUrl, imageHeight, imageWidth, children }) => (
  <Grid container spacing={2} columns={8} marginBottom='3rem' marginTop='3rem'>
    {imageUrl && <Grid item xs={8} sm={2}>
      <Image
        priority
        src={imageUrl}
        width={imageWidth}
        height={imageHeight}
        layout="responsive"
      />
    </Grid>}
    <Grid item xs={8} sm={imageUrl ? 6 : 8} className={styles.textSection}>
      {children}
    </Grid>
  </Grid>
)

TextImageSection.propTypes = {
  imageUrl: PropTypes.string,
  imageHeight: PropTypes.number,
  imageWidth: PropTypes.number,
  children: PropTypes.node.isRequired,
}