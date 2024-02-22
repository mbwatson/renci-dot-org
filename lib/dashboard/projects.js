import { fetchFromDashboard } from "@/utils/dashboard";

export const fetchDashboardProjects = async () => {
  const allProjects = await fetchFromDashboard("projects");

  const getPayload = (array) => {
    const trimText = (description, wordCount = 25) => {
      //split the description into an array of words
      const snippetArray = (description).split(' ')

      //grab the first X number of words as defined by the wordCount above
      const trimmedSnippetArray = snippetArray.slice(0, wordCount)

      //if the number of words in the description is longer than the wordcount, return a string that has an ellipsis at the end. if not, return a string that just joins the words from the trimmed array
      return snippetArray.length >= wordCount ? `${trimmedSnippetArray.join(' ')} ...` : trimmedSnippetArray.join(' ')
    }

    return array.map((project) => (
        {
          snippet: project.webDescription ? trimText(project.webDescription) : "Click to read more", 
          ... project
        }
    ))
  }

  const payload = getPayload(allProjects)


  return payload;
};
