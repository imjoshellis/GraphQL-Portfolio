import React from 'react'
import { createClient, Provider } from 'urql'
import './App.css'
import PinnedRepos from './components/PinnedRepos'

const client = createClient({
  url: '/.netlify/functions/github-graphql'
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
