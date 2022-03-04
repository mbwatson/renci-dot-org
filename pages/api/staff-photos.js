import { fetchGraphQL } from '../../lib/contentful'

export default async function handler(req, res) {
  return fetchGraphQL(`query {
      personCollection {
        items {
          pid
          photo {
            url
          }
        }
      }
    }`).then(response => {
      const payload = response.data.personCollection.items.reduce((obj, { pid, photo }) => {
        return ({ ...obj, [pid]: photo?.url || null })}, {})
      res.status(200).json(payload)
    }).catch(error => {
      res.status(500).json(error)
    })
  fetchData()
}
