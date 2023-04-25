export const fetchStrapiGraphQL = async (query, preview = false) => {
  return fetch(`https://api.renci.org/graphql`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.ACCESS_TOKEN}`,
    },
    body: JSON.stringify({ query }),
  }).then((response) => response.json());
};

//add error message if there's not a 200 status message
