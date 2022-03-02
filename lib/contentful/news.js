// import { fetchGraphQL } from './'

// export const fetchNewsArticles = async (preview = false) => {
//   const { data } = await fetchGraphQL(`query {
//     newsCollection {
//       items {
//         id
//         title
//         body
//       }
//     }
//   }`, preview)
//   return data.collaborationCollection.items
// }

// export const fetcNewshArticle = async (id, preview = false) => {
//   const { data } = await fetchGraphQL(`query {
//     newsCollection(where: { id: "${ id }" }, limit: 1) {
//       items {
//         id
//         name
//         description
//         role
//         featuredImage {
//           url
//         }
//         projectsCollection {
//           items {
//             id
//             name
//           }
//         }
//       }
//     }
//   }`, preview)
//   return data.collaborationCollection.items[0]
// }
