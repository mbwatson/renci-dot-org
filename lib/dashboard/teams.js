import { fetchFromDashboard } from "@/utils/dashboard";
import genericAvatar from '../../images/generic-avatar.svg'

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
    featuredImage,
    people,
    leads,
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
  })
  return teamPayload(team)
}