import loadable from '@loadable/component'
import { Box } from '@mui/material'
import { SizeMe } from 'react-sizeme'

const ForceGraph2D = loadable(() => import('./graph-import'))

export const Graph = () => {
  const graphData = {
    nodes: [{ id: 1 }, { id: 2 }],
    links: [{ source: 1, target: 2 }]
  }

  return (
    <Box sx={{
      '& .force-graph-container': {
        backgroundColor: '#eee',
        '& canvas': {
        },
      },
    }}>
      <SizeMe>{
        ({ size }) => (
          <ForceGraph2D
            height={ 400 }
            width={ size.width }
            graphData={ graphData }
          />
        )
      }</SizeMe>
    </Box>
  )
}
