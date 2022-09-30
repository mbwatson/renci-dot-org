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