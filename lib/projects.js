import { GraphQLClient } from 'graphql-request'

export async function getProjects() {
  const graphcms = new GraphQLClient('https://api-us-east-1.graphcms.com/v2/ckekqcaji5lem01z17pxt5jap/master')

  const data = await graphcms.request(
    `
      {
        projects {
          id,
          title,
          shortDescription
          fullDescription
        }
      }
    `
  )

  return data;
}