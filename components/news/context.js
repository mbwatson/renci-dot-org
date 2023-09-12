import { createContext, useContext } from 'react'
import { useRouter } from 'next/router'

const NewsContext = createContext({ })
export const useNews = () => useContext(NewsContext)

export const NewsProvider = ({ articles, children }) => {
  const { query: filters } = useRouter()

  return (
    <NewsContext.Provider value={{ articles, filters }}>
      { children }
    </NewsContext.Provider>
  )
}
