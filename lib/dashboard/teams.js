import { fetchFromDashboard } from "@/utils/dashboard";

export const fetchDashboardTeams = async () => {
  const payload = await fetchFromDashboard("teams");

  return payload;
};

export const fetchSingleTeam = async (slug) => {
  const team = await fetchFromDashboard(`teams/${slug}`)

  const teamPayload = ({
    id,
    displayName,
    slug,
    description,
    isPublished,
    people,
    leads,
  }) =>({
    id: id,
    name: displayName,
    slug: slug,
    description: description,
    isPublished: isPublished,
    members: people.length > 0 ? people.map((person) => ({
      id: person.id,
      fullName: person.text,
      slug: person.data,
      active: true
    })) : [],
    leads: leads.length > 0 ? leads.map((person) => ({
      id: person.id,
      fullName: person.text,
      slug: person.data,
    })) : [],
  })
  return teamPayload(team)
}