import React from 'react'
import { Card, CardContent } from '@mui/material/'
import { InfoBlock } from './InfoBlock'
import Image from 'next/image'
import {Link} from '../link'

const styles = {
  card: {
    padding: 0,
    margin: '16px'
  },
  topper: {
    borderBottom: `1px solid grey`,
  },
  content: {
    backgroundColor: 'white',
  },
}

export const LogoBlock = ({logo, bgColor}) => {
  return (
    <Card sx={ styles.card }>
      <CardContent sx={ styles.topper } style={{ backgroundColor: bgColor }}>
        <Link to={logo.src}>
          <Image 
            src={ logo.src } 
            alt="Logo" 
            width={logo.width}
            height={logo.height}
            layout="responsive"
            objectFit='cover'
          />
        </Link>
      </CardContent>
    </Card>
  )
}