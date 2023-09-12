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

  const filteredArticles = useMemo(() => {
    let _filteredArticles = [...articles]
    if (filters.type) {
      _filteredArticles = _filteredArticles
        .filter(article => article.type === filters.type)
    }
    if (filters.tag.length) {
      _filteredArticles = _filteredArticles
        .filter(article => filters.tag.some(tag => article.tags.includes(tag) ))
    }
    return _filteredArticles
  }, [filters])

  return (
    <NewsContext.Provider value={{
      articles,
      filters,
      filteredArticles,
    }}>
      { children }
    </NewsContext.Provider>
  )
}
