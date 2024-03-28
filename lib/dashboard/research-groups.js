import { fetchFromDashboard } from "@/utils/dashboard";
import genericAvatar from '../../images/generic-avatar.svg'

export const fetchResearchGroups = async () => {
  const payload = await fetchFromDashboard("research-groups");

  return payload;
};

export const fetchSingleResearchGroup = async (slug) => {
  const researchGroup = await fetchFromDashboard(`research-groups/${slug}`)

  const researchGroupPayload = ({
    id,
    displayName,
    slug,
    description,
    isPublished,
    featuredImage,
    people,
    leads,
    projects,
    organizationPartners,
  }) =>({
    id: id,
    name: displayName,
    slug: slug,
    description: description,
    isPublished: isPublished,
    featuredImage: featuredImage[0],
    members: people.length > 0 ? people.map((person) => ({
      id: person.id,
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
    projects: projects.length > 0 ? projects.map((project) => ({
      id: project.id,
      name: project.text,
      slug: project.data,
      active: true,
    })) : [],
    partners: organizationPartners.length > 0 ? organizationPartners.map((partner)=> ({
      id: partner.id,
      name: partner.text,
      orgURL: partner.data,
    })) : [],
  })
  return researchGroupPayload(researchGroup)
}