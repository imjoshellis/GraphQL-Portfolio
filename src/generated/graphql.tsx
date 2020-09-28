import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Repository = {
  __typename?: 'Repository';
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  pushedAt?: Maybe<Scalars['String']>;
  url?: Maybe<Scalars['String']>;
  homepageUrl?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  helloWorld?: Maybe<Scalars['String']>;
  pinnedRepos?: Maybe<Array<Maybe<Repository>>>;
};

export type HelloWorldQueryVariables = Exact<{ [key: string]: never; }>;


export type HelloWorldQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'helloWorld'>
);

export type PinnedReposQueryVariables = Exact<{ [key: string]: never; }>;


export type PinnedReposQuery = (
  { __typename?: 'Query' }
  & { pinnedRepos?: Maybe<Array<Maybe<(
    { __typename?: 'Repository' }
    & Pick<Repository, 'name' | 'description' | 'pushedAt' | 'url' | 'homepageUrl'>
  )>>> }
);


export const HelloWorldDocument = gql`
    query HelloWorld {
  helloWorld
}
    `;

export function useHelloWorldQuery(options: Omit<Urql.UseQueryArgs<HelloWorldQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<HelloWorldQuery>({ query: HelloWorldDocument, ...options });
};
export const PinnedReposDocument = gql`
    query PinnedRepos {
  pinnedRepos {
    name
    description
    pushedAt
    url
    homepageUrl
  }
}
    `;

export function usePinnedReposQuery(options: Omit<Urql.UseQueryArgs<PinnedReposQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<PinnedReposQuery>({ query: PinnedReposDocument, ...options });
};