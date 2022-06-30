import { useEffect, useMemo, useState } from 'react'
import PropTypes from 'prop-types'
import loadable from '@loadable/component'
import { fetchGraphQL } from '../../lib/contentful'
import { Box } from '@mui/material'

const ForceGraph2D = loadable(() => import('./graph-import'))

const dummyGraphData = {
  nodes: [{ id: 1 }, { id: 2 }],
  links: [{ source: 1, target: 2 }]
}
export const Graph = ({ width, height }) => {
  const [loading, setLoading] = useState(true)
  const [graphData, setGraphData] = useState({ nodes: [], links: [] })

  useEffect(() => {
    setLoading(true)
    let _nodes = []
    let _edges = []
    try {
      const fetchGraphData = async (preview = false) => {
        const { data } = await fetchGraphQL(`query {
          personCollection(limit: 200) {
            items {
              slug
            }
          }
          researchGroupCollection {
            items {
              id
              groupMembersCollection {
                items {
                  slug
                }
              }
            }
          }
        }`, preview)

        _nodes = [
          ...data.personCollection.items.map(person => ({ id: person.slug })),
          ...data.researchGroupCollection.items.map(group => ({ id: group.id })),
        ]

        for (let group of data.researchGroupCollection.items) {
          _edges = [
            ..._edges,
            ...group.groupMembersCollection.items
              .map(person => ({ source: person.slug, target: group.id })),
          ]
        }
        setLoading(false)
        setGraphData({ nodes: _nodes, links: _edges })
      }
      fetchGraphData()
    } catch (error) {
      console.error(error.message)
    }
  }, [])

  return (
    <Box sx={{
      '& .force-graph-container': {
        backgroundColor: '#eee',
        '& canvas': {
        },
      },
    }}>
      {
        graphData.nodes && graphData.links &&
        <ForceGraph2D
          height={ height }
          width={ width }
          graphData={ graphData }
          nodeLabel="id"
        />
      }
    </Box>
  )
}

Graph.propTypes = {
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
}
