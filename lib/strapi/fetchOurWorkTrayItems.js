import { fetchStrapiGraphQL } from "./";

export const fetchOurWorkTrayItems = async (preview = false) => {
  const { data } = await fetchStrapiGraphQL(
    `query {
    collaborations {
      data {
        id
        attributes {
          name
          slug
        }
      }
    }
    researchGroups {
      data {
        id
        attributes {
          name
          slug
        }
      }
    }
    teams {
      data {
        id
        attributes {
          name
          slug
        }
      }
    }
  }`,
    preview
  );
  console.log(data);
  const payload = {
    collaborationCollection: data.collaborations.data.map((group) => ({
      id: group.id,
      name: group.attributes.name,
      slug: group.attributes.slug,
    })),
    researchGroupCollection: data.researchGroups.data.map((group) => ({
      id: group.id,
      name: group.attributes.name,
      slug: group.attributes.slug,
    })),
    teamCollection: data.teams.data.map((group) => ({
      id: group.id,
      name: group.attributes.name,
      slug: group.attributes.slug,
    })),
  };
  return payload;
};
