import React from 'react';
import { Typography } from '@mui/material'

const styles = {
  title: {
    color: 'grey',
    textTransform: 'uppercase',
},
body: {
    color: 'grey',
    marginBottom: '8px',
},
copyableBody: {
    position: 'relative',
   
    '&:hover $copyText': {
        opacity: 0.5,
    },
},
copyText: {
    textTransform: 'uppercase',
    position: 'absolute',
    bottom: 0,
    transform: 'translateY(-50%)',
    marginLeft: '8px',
    opacity: 0,
    fontSize: '95%',
},
}

export const InfoBlock = ( props ) => {
    return (
        <div  style={props.style}>
            <Typography variant="body1" sx={ styles.title }>
                { props.title }
            </Typography>
            <Typography variant="body2"  
            >
                { props.body }
            </Typography>
        </div>
    )
}

