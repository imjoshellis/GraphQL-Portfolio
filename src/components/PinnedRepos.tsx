import React from 'react'
import { usePinnedReposQuery } from '../generated/graphql'

export const PinnedRepos: React.FC = () => {
  const [{ data }] = usePinnedReposQuery()
  console.log(data)
  return <>{data ? <p>Loaded</p> : <p>Loading...</p>}</>
}

export default PinnedRepos
