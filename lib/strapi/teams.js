const axios = require("axios");

export const fetchTeams = async () => {
  try {
    const [teams] = await axios.all([
      axios.get(
        "http://api.renci.org/api/teams?populate=members&populate=*"
      )
    ]);
    return { teams: teams.data.data};
  } catch (error) {
    console.log(error.response);
  }
};

export const fetchTeam = async (teamSlug) => {
  // console.log(teamId)
  try {
    // const memberData = await axios.get()
    const response = await axios.get(
        `https://api.renci.org/api/teams?filters[slug][$eq]=${teamSlug}&populate=*`
      );
      console.log(response.data.data[0].attributes)
    if (!response.data) {
      throw new Error('no data') 
    }
    if (!response.data.data[0].attributes) {
      throw new Error('empty attributes array') 
    }
    return response.data.data[0].attributes;
  } catch (error) {
    console.log(error.message)
  }
}