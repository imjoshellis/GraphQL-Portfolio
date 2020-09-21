import React from 'react'
import { createClient, Provider } from 'urql'
import './App.css'
import PinnedRepos from './components/PinnedRepos'

const client = createClient({
  url: 'https://api.github.com/graphql',
  fetchOptions: {
    headers: { authorization: `Bearer ${process.env.REACT_APP_GH_TOKEN}` }
  }
})

const App = () => (
  <Provider value={client}>
    <div className='App'>
      <h1>My Automated Portfolio</h1>
      <PinnedRepos />
    </div>
  </Provider>
)

export default App
