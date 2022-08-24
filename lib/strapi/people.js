const axios = require("axios");

export const fetchPeopleAndTeams = async (requestedTeam) => {
  try {
    const [people, teams] = await axios.all([
      axios.get(
        "http://api.renci.org/api/people?populate=*&pagination[page]=1&pagination[pageSize]=150"
      ),
      axios.get("http://api.renci.org/api/teams?populate=members&populate=*"),
    ]);

    // Filters out the teams that dont match the requestedTeam
    let team = teams.data.data.filter((team) => {
      return team.attributes.slug == requestedTeam
    });

    // Since strapi currently does not send over deeply nested data, we will replace the team members from
    // the fetched team with the members that match from the fetched people which have the missing deeply nested photos
    let nestedTeam = team[0].attributes.members.data.map((member)=>{
      let output;
      people.data.data.forEach((person)=>{
        if (member.id === person.id) {
          return output = person;
        }
      })
      return output
    })

    return { people: people.data.data, [requestedTeam]: nestedTeam };
  } catch (error) {
    console.log(error.response);
  }
};