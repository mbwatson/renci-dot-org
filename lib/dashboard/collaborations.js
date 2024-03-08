import { fetchFromDashboard } from "@/utils/dashboard";

export const fetchDashboardCollaborations = async () => {
  const payload = await fetchFromDashboard("collaborations");

  return payload;
};

export const fetchSingleCollaboration = async (slug) => {
  const collaboration = await fetchFromDashboard(`collaborations/${slug}`)

  const collaborationPayload = ({
    id,
    displayName,
    slug,
    urls,
    renciRole,
    description,
    isPublished,
    people,
    leads,
    projects,
    organizationPartners,
    organizationFundings
  }) =>({
    id: id,
    name: displayName,
    slug: slug,
    urls: urls,
    role: renciRole,
    description: description,
    isPublished: isPublished,
    members: people.length > 0 ? people.map((person) => ({
      id: person.id,
      fullName: person.text,
      slug: person.data,
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

  return collaborationPayload(collaboration)
}