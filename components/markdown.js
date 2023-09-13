import { Typography } from '@mui/material'
import ReactMarkdown from 'react-markdown'
import { Link } from './link'
import { Fragment } from 'react'

// this object defines a map:
//    DOM elements --> React components.
// this allows us to streamline styles for content coming
// from Strapi with that of content built here by Nextjs.

const componentMap = {
  // for links, we'll use our smart link component.
  a: ({ node, href, ...props }) => (
    <Link
      to={ href }
      { ...props }
    />
  ),
  p: ({ node, children, ...props })=>{
    // consider, in the future, using the :has() css relational pseudo-class
    // as of sept 2023, it is not available in firefox, but may become available
    // in the future

    //todo: change this to return a nextjs image instead of html img
    if (node.children[0].tagName === "img") {
      return (
        <div style={{
            textAlign: "center",
            marginBottom: "1rem"
            }}>
          <img src={node.children[0].properties.src} style={{
            maxWidth: "700px"
            }}/>
        </div>
      )
    }
    return (
    <Typography paragraph {...props} sx={{ '&:last-of-type': { mb: 0 }, lineHeight: "1.8"}}>{children}</Typography>
  )},
  h1: ({ node, children, ...props }) => (
    <Typography variant="h3" {...props}>{children}</Typography>
  ),
  h2: ({ node, children, ...props }) => (
    <Typography variant="h4" {...props}>{children}</Typography>
  ),
  h3: ({ node, children, ...props }) => (
    <Typography variant="h5" {...props} sx={{marginBottom: '4px'}}>{children}</Typography>
  ),
  ul: ({ node, children, ...props }) => (
    <ul style={{marginTop: 0, lineHeight: '1.8'}} {...props}>{children}</ul>
  ),
  // img: ({node, src, ...props}) => (
  //   <img src={node.children[0].properties.src}
  //     style={{
  //       border: "5px solid red",
  //       textAlign: "center",
  //     }}
  //   />
  // )
}

export const Markdown = ({ children }) => {
  return (
    <ReactMarkdown components={ componentMap }>
      { children }
    </ReactMarkdown>
  )
}

// this component map removes markdown styling to 
// replace it with spans while keeping the content
const markdownlessMap = {
  a: ({ node, children}) => (
    <Fragment>{children}</Fragment>
  ),
  p: ({ node, children})=>(
    <Fragment>{children}</Fragment>
  ),
  h1: ({ node, children}) => (
    <Fragment>{children}</Fragment>
  ),
  h2: ({ node, children}) => (
    <Fragment>{children}</Fragment>
  ),
  h3: ({ node, children}) => (
    <Fragment>{children}</Fragment>
  ),
  ul: ({ node, children}) => (
    <Fragment>{children}</Fragment>
  ),
  li: ({ node, children}) => (
    <Fragment>{children}</Fragment>
  )
}


export const MarkdownLess = ({children}) => {
  return (
    <ReactMarkdown components={ markdownlessMap }>
      { children }
    </ReactMarkdown>
  )
}
