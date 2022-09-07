const headers = {
  'Content-Type': 'application/json',
  'Authorization': `Bearer brHwB6tXPO4cUcZg7yKShUwZRpaaETT6e_2pMzqD0Mo`,
}

// each of the functions will fire off graphql queries this function.
export const fetchGraphQL = async (query, preview = false) => {
  return fetch(`https://graphql.contentful.com/content/v1/spaces/ongrv4q8etpz`, {
    method: 'POST',
    headers: headers,
    body: JSON.stringify({ query }),
  }).then((response) => response.json())
}

