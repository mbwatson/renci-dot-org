import ReactMarkdown from 'react-markdown'
import { Link } from './link'

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
}

export const Markdown = ({ children }) => {
  return (
    <ReactMarkdown components={ componentMap }>
      { children }
    </ReactMarkdown>
  )
}
