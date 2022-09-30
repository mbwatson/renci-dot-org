const axios = require("axios");

export const fetchResearchGroups = async () => {
  try {
    const [groups] = await axios.all([
      axios.get(
        "http://api.renci.org/api/research-groups?populate=members&populate=*"
      )
    ]);
    return { groups: groups.data.data};
  } catch (error) {
    console.log(error.response);
  }
};