import loadable from '@loadable/component'
import { Box } from '@mui/material'
import ReactResizeDetector from 'react-resize-detector'

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
      <ReactResizeDetector handleWidth>{
        ({ width }) => (
          <ForceGraph2D
            height={ 500 }
            width={ width }
            graphData={ graphData }
          />
        )
      }</ReactResizeDetector>
    </Box>
  )
}
