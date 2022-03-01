const headers = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer ${ process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN }`,
}

// each of the functions will fire off graphql queries this function.
export const fetchGraphQL = async (query, preview = false) => {
  return fetch(`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({ query }),
  }).then((response) => response.json())
}

