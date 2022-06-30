import loadable from '@loadable/component'
import { Box } from '@mui/material'

const ForceGraph2D = loadable(() => import('./graph-import'))

export const Graph = () => {
  const graphData = {
    nodes: [{ id: 1 }, { id: 2 }],
    links: [{ source: 1, target: 2 }]
  }

  return (
    <Box sx={{
      border: '1px solid #ddd',
      '& .force-graph-container': {
        border: '1px solid #ddd',
        '& canvas': {
          border: '1px solid #dd0',
        },
      },
    }}>
      <ForceGraph2D
        height={ 400 }
        width={ 400 }
        graphData={ graphData }
      />
    </Box>
  )
}
