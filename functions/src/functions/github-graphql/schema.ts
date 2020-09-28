import { gql } from 'apollo-server-lambda'

export default gql`
  type Repository {
    name: String
    description: String
    pushedAt: String
    url: String
    homepageUrl: String
  }

  type Query {
    helloWorld: String
    pinnedRepos: [Repository]
  }
`