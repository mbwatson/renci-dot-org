import React from 'react'
import { Card, CardContent } from '@mui/material/'
import { InfoBlock } from './InfoBlock'

const hexToRgb = (hex) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
  } : null
}

const styles = {
 card: {
  margin: '16px',
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
 },
 colorChip: {
  flex: 1,
  minWidth: '100px',
  minHeight: 'auto',
 },
 content: {
  flex: 3,
  display: 'flex',
  justifyContent: 'flex-start',
  flexDirection: 'row',
  flex: 5,
  width: '100%',
 },
 info: {
  flex: 1,
  flexBasis: '33%',
 }
}

export const ColorBlock = ({colorName, colorHex}) => {
  const { r, g, b } = hexToRgb(colorHex)
  const colorRgb = [r, g, b].join(', ')
  
  return (
    <Card elevation={3} sx={styles.card}>
      <CardContent sx={styles.colorChip} style={{ backgroundColor: colorHex }}/>
      <CardContent sx={styles.content}>
        <InfoBlock title="Name" body={ colorName } style={styles.info}/>
        <InfoBlock copyable title="Hex" body={ colorHex } style={styles.info}/>
        <InfoBlock copyable title="RGB" body={ colorRgb } style={styles.info}/>
      </CardContent>
    </Card>
  )
}