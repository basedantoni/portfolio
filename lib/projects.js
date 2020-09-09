import { request, gql } from 'graphql-request'

export async function getProjects() {
  const endpoint = 'https://api-us-east-1.graphcms.com/v2/ckekqcaji5lem01z17pxt5jap/master'
  const query = gql`
    query {
      projects {
        id
        title
        shortDescription
        fullDescription
        image {
          url
          fileName
        }
        link
      }
    }
  `
  const { projects } = await request(endpoint, query)

  return projects
}