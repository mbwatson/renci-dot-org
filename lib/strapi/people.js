const axios = require("axios");

export const fetchPeopleAndTeams = async (requestedTeam) => {
  try {
    const [people, teams] = await axios.all([
      axios.get(
        "http://api.renci.org/api/people?populate=*&pagination[page]=1&pagination[pageSize]=150"
      ),
      axios.get("http://api.renci.org/api/teams?populate=members"),
    ]);

    let team = teams.data.data.filter((team) => {
      return team.attributes.slug == requestedTeam
    });

    return { people: people.data.data, [requestedTeam]: team[0].attributes.members.data };
  } catch (error) {
    console.log(error.response);
  }
};