import { createContext, useContext, useMemo } from 'react'
import { useRouter } from 'next/router'

const NewsContext = createContext({ })
export const useNews = () => useContext(NewsContext)

export const NewsProvider = ({ articles, children }) => {
  const { query } = useRouter()

  const filters = useMemo(() => {
    return {
      type: query.type,
      tag: query.tag
        ? typeof query.tag === 'string' ? [query.tag] : query.tag
        : []
    }
  }, [query])

  return (
    <NewsContext.Provider value={{ articles, filters }}>
      { children }
    </NewsContext.Provider>
  )
}
