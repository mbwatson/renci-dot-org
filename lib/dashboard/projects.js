import { fetchFromDashboard } from "@/utils/dashboard";
import genericAvatar from '../../images/generic-avatar.svg'

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

export const fetchSingleProject = async (slug) => {
  const project = await fetchFromDashboard(`projects/${slug}`)

  console.log(project)
  const projectPayload = ({
    id,
    webName,
    slug,
    urls,
    renciRole,
    webDescription,
    isPublished,
    featuredImage,
    people,
    leads,
    organizationPartners,
    organizationFundings
  }) =>({
    id: id,
    name: webName,
    slug: slug,
    urls: urls,
    renciRole: renciRole,
    description: webDescription,
    isPublished: isPublished,
    featuredImage: featuredImage[0].url,
    members: people.length > 0 ? people.map((person) => ({
      personId: person.id,
      fullName: person.text,
      slug: person.data,
      active: true,
      photo: person.photo ? person.photo : genericAvatar.src
    })) : [],
    leads: leads.length > 0 ? leads.map((person) => ({
      id: person.id,
      fullName: person.text,
      slug: person.data,
    })) : [],
    partners: organizationPartners.length > 0 ? organizationPartners.map((partner)=> ({
      id: partner.id,
      name: partner.text,
      orgURL: partner.data,
    })) : [],
    funding: organizationFundings.length > 0 ? organizationFundings.map((partner) => ({
      id: partner.id,
      name: partner.text,
      orgURL: partner.data,
    })) : [],
  })

  return projectPayload(project)
}