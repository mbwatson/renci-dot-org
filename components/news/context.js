import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react'
import { useRouter } from 'next/router'
import { fetchNewsArticles } from '@/lib/strapi/newsGraphQL'

const NewsContext = createContext({ })
export const useNews = () => useContext(NewsContext)

export const NewsProvider = ({ articles, tags, children }) => {
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

  const [newFilters, setNewFilters] = useState([]);
  const [newArticles, setNewArticles] = useState([]);
  
  // update the query params when the tag state changes
  useEffect(() => {
    const query = newFilters.reduce((acc, curr) => {
      if (Array.isArray(acc[curr.type])) {
        acc[curr.type].push(curr.slug);
        return acc;
      }
      return ({
        ...acc,
        [curr.type]: [curr.slug],
      })
    }, {});

    router.push({ path: '/news', query })
  }, [newFilters, router]);

  // update the tag state based on the query params when the component mounts
  useEffect(() => {
    const lookupTag = ({ type, slug }) => {
      if (type in tags) {
        const tagLookup = tags[type].find(t => t.slug === slug);
        if (!tagLookup) return undefined;
        return {
          ...tagLookup,
          type,
        };
      }
      return undefined;
    }

    const flatTags = Object.entries(query).reduce((arr, [type, val]) => {
      if (typeof val === "string") {
        // get full tag data from list of tags
        const fullTag = lookupTag({ type, slug: val });
        fullTag && arr.push(fullTag) // only push if it exists
      }

      if (Array.isArray(val)) {
        return [
          ...arr,
          val.map(t => lookupTag(t)).filter(t => t)
        ]
      }

      return arr;
    }, []);

    setNewFilters(flatTags);
  }, [])

  const controllerRef = useRef(new AbortController());
  useEffect(() => {
    (async () => {
      controllerRef.current.abort("Old filter request is stale")
      controllerRef.current = new AbortController();

      try {
        const posts = await fetchNewsArticles({
          filters: {
            collaborations: newFilters.filter((f) => f.type === "collaborations").map((f) => f.slug),
            researchGroups: newFilters.filter((f) => f.type === "researchGroups").map((f) => f.slug),
            people: newFilters.filter((f) => f.type === "people").map((f) => f.slug),
            projects: newFilters.filter((f) => f.type === "projects").map((f) => f.slug),
            organizations: newFilters.filter((f) => f.type === "organizations").map((f) => f.slug),
            postTags: newFilters.filter((f) => f.type === 'postTags').map((f) => f.name),
            freeSearch: newFilters.filter((f) => typeof f === "string"),
            newsOrBlog: filters.type === 'feature' ? 'news' : filters.type === 'blog' ? 'blog' : undefined,
          },
          signal: controllerRef.current.signal
        })
        setNewArticles(posts);
      } catch (e) {
        if (e.name !== "AbortError") throw e; 
      }
    })()

    return () => { controllerRef.current.abort("Component unmounted"); }
  }, [newFilters, filters.type]);

  return (
    <NewsContext.Provider value={{
      articles,
      filters, filterNews,
      filteredArticles,
      // this is an array of all tags present in all articles.
      // better would be to know these beforehand,so consider changing to receive all projects, groups, etc....along with domain-specific tags, e.g., covid, ai, hpc, etc
      tags,
      removeLabel, removeTag, toggleTag,
      newFilters, setNewFilters,
      newArticles,
    }}>
      { children }
    </NewsContext.Provider>
  )
}
