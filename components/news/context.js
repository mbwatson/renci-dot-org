import { createContext, useContext } from 'react'

const NewsContext = createContext({ })
export const useNews = () => useContext(NewsContext)

export const NewsProvider = ({ articles, children }) => {
  
  return (
    <NewsContext.Provider value={{ articles }}>
      { children }
    </NewsContext.Provider>
  )
}
