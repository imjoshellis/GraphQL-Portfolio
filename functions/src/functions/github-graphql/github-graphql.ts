import { ApolloServer } from 'apollo-server-lambda'
import typeDefs from './schema'
import axios from 'axios'
import { PinnedReposQuery } from './queries'

const API_URL = 'https://api.github.com/graphql'
const headers = {
  authorization: `Bearer ${process.env.GH_TOKEN}`
}

const postAPI = async (query: string) =>
  await axios.post(API_URL, { query }, { headers })

const resolvers = {
  Query: {
    helloWorld: async () => 'hello world',
    pinnedRepos: async () =>
      (await postAPI(PinnedReposQuery)).data.data.viewer.pinnedItems.edges.map(
        (edge: any) => edge.node
      )
  }
}

const server = new ApolloServer({ typeDefs, resolvers })

export const handler = server.createHandler()
