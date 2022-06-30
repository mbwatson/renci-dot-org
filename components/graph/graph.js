import PropTypes from 'prop-types'
import loadable from '@loadable/component'
import { Box } from '@mui/material'

const ForceGraph2D = loadable(() => import('./graph-import'))

export const Graph = ({ width, height }) => {
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
      <ForceGraph2D
        height={ height }
        width={ width }
        graphData={ graphData }
      />
    </Box>
  )
}

Graph.propTypes = {
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
}
