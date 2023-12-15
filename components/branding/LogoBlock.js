import React from 'react'
import { Card, CardContent } from '@mui/material/'
import { InfoBlock } from './InfoBlock'
import Image from 'next/image'

const styles = {
  card: {
    padding: 0,
    margin: '16px'
  },
  topper: {
    borderBottom: `1px solid grey`,
  },
  image: {
    width: '100%',
  },
  content: {
    backgroundColor: 'white',
  },
  info: {

  }
}


// const filenameFromPath = (path) => {
//     const imagePathRegex = /^[\/\w]+\/(.+)\..+(\.\w+)/
//     const match = path.match(imagePathRegex)
//     return (match && match.length > 0) ? match.slice(1,3).join() : path
// }

export const LogoBlock = ({logo, bgColor}) => {
  return (
    <Card sx={ styles.card }>
      <CardContent sx={ styles.topper } style={{ backgroundColor: bgColor }}>
        <Image 
          src={ logo.src } 
          alt="Logo" 
          width={logo.width}
          height={logo.height}
          layout="responsive"
          objectFit='cover'
          // sx={ styles.image }
        />
      </CardContent>
      <CardContent sx={ styles.content }>
        <InfoBlock
          title="Image"
          body={ logo.src }
          style={styles.info}
        />                
      </CardContent> 
    </Card>
  )
}