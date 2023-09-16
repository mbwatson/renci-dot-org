import { createContext, useCallback, useContext, useMemo } from 'react'
import { useRouter } from 'next/router'

const NewsContext = createContext({ })
export const useNews = () => useContext(NewsContext)

export const NewsProvider = ({ articles, children }) => {
  const router = useRouter()
  const { query } = router

  // this is an array of all tags present in all articles.
  // better would be to know these beforehand,
  // so consider changing soon request all projects, groups, etc
  // for core content type tags. we'll also need our
  // domain-specific tags, e.g., hpc, ai, covid, etc.
  const availableTags = useMemo(() => [...articles.reduce((acc, article) => {
    return new Set([...acc, ...article.tags])
  }, new Set())], [articles])

  // filter state for (1) type and (2) tags
  const filters = useMemo(() => {
    return {
      type: query.type,
      tag: query.tag
        ? typeof query.tag === 'string' ? [query.tag] : query.tag
        : []
    }
  }, [query])

  /* responsible for kicking up re-rending results according to new parameters.
   * for us, this simply means changing the query parameters in the URL.
   * 
   * @param {object} filters The new filters to use. Passing nothing invokes
   *                         no filtering and thus shows all results.
   */
  const filterNews = useCallback((filters = {}) => {
    router.push({ path: '/news', query: filters })
  }, [router])

  // memoized filtered articles.
  // updates on changes to `filters` object
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
  }, [articles, filters])

  // unselect type filter
  const removeLabel = id => {
    filterNews({ tag: filters.tag })
  }

  // select tag filter
  const toggleTag = id => {
    const tagindex = filters.tag.indexOf(id)
    let newTags
    if (tagindex < 0) {
      newTags = [...filters.tag, id]
    } else {
      newTags = [...filters.tag.slice(0, tagindex), ...filters.tag.slice(tagindex + 1)]
    }
    filterNews({ ...filters, tag: newTags })
  }

  // unselect tag filter
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
      // this is an array of all tags present in all articles.
      // better would be to know these beforehand,so consider changing to receive all projects, groups, etc....along with domain-specific tags, e.g., covid, ai, hpc, etc
      availableTags,
      removeLabel, removeTag, toggleTag,
    }}>
      { children }
    </NewsContext.Provider>
  )
}
