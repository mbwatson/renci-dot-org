const axios = require("axios");

export const fetchProjects = async () => {
  try {
    const [projects] = await axios.all([
      axios.get(
        "http://api.renci.org/api/projects?populate=*"
      )
    ]);
    return { projects: projects.data.data};
  } catch (error) {
    console.log(error.response);
  }
};