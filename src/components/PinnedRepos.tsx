import React from 'react'
import { usePinnedReposQuery } from '../generated/graphql'

export const PinnedRepos: React.FC = () => {
  const [{ data }] = usePinnedReposQuery()
  console.log(data)
  return (
    <>
      {data?.pinnedRepos ? (
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            textAlign: 'left'
          }}
        >
          {data.pinnedRepos.map((repo, index) => {
            if (repo) {
              const { name, description, url, homepageUrl, pushedAt } = {
                name: '',
                description: '',
                url: '',
                homepageUrl: '',
                pushedAt: '',
                ...repo
              }
              return (
                <div
                  key={index}
                  style={{ marginLeft: '1rem', maxWidth: '24rem' }}
                >
                  <h2>{name}</h2>
                  {pushedAt ? <p>updated: {pushedAt}</p> : null}
                  <h4 style={{ marginBottom: 0 }}>Description</h4>
                  <p style={{ marginTop: 0 }}>
                    {description ? description : 'no description'}
                  </p>
                  {url ? <a href={url}>View on GitHub</a> : null}
                  {homepageUrl ? (
                    <a href={homepageUrl} style={{ marginLeft: '1rem' }}>
                      View website
                    </a>
                  ) : null}
                </div>
              )
            } else {
              return null
            }
          })}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  )
}

export default PinnedRepos
