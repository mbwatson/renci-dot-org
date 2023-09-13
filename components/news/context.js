import { createContext, useCallback, useContext, useMemo } from 'react'
import { useRouter } from 'next/router'

const NewsContext = createContext({ })
export const useNews = () => useContext(NewsContext)

export const NewsProvider = ({ articles, children }) => {
  const router = useRouter()
  const { query } = router

  const filters = useMemo(() => {
    return {
      type: query.type,
      tag: query.tag
        ? typeof query.tag === 'string' ? [query.tag] : query.tag
        : []
    }
  }, [query])

  const filterNews = useCallback((filters = {}) => {
    router.push({ path: '/news', query: filters })
  }, [filters])

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

  const removeLabel = id => {
    filterNews({ tag: filters.tag })
  }

  const removeTag = id => {
    const tagindex = filters.tag.indexOf(id)
    if (tagindex < 0) {
      return
    }
    const newTags = [...filters.tag.slice(0, tagindex), ...filters.tag.slice(tagindex + 1)]
    filterNews({ ...filters, tag: newTags })
  }

  return (
    <NewsContext.Provider value={{
      articles,
      filters, filterNews,
      filteredArticles,
      removeLabel, removeTag,
    }}>
      { children }
    </NewsContext.Provider>
  )
}
