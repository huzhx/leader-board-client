import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};


export type Activity = {
  __typename?: 'Activity';
  timestamp: Scalars['Int'];
  point: Scalars['Int'];
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type Player = {
  __typename?: 'Player';
  id: Scalars['ID'];
  name: Scalars['String'];
  team: TeamCode;
  numOfActivities: Scalars['Int'];
  totalPoints: Scalars['Int'];
  activities?: Maybe<Array<Maybe<Activity>>>;
};

export type Query = {
  __typename?: 'Query';
  players?: Maybe<Array<Maybe<Player>>>;
  playersActivitiesForLastHour?: Maybe<Array<Maybe<Player>>>;
};

export enum TeamCode {
  Red = 'RED',
  Blue = 'BLUE'
}


export type PlayersQueryVariables = Exact<{ [key: string]: never; }>;


export type PlayersQuery = (
  { __typename?: 'Query' }
  & { players?: Maybe<Array<Maybe<(
    { __typename?: 'Player' }
    & Pick<Player, 'id' | 'name'>
  )>>> }
);

export type PlayersActivitiesForLastHourQueryVariables = Exact<{ [key: string]: never; }>;


export type PlayersActivitiesForLastHourQuery = (
  { __typename?: 'Query' }
  & { playersActivitiesForLastHour?: Maybe<Array<Maybe<(
    { __typename?: 'Player' }
    & Pick<Player, 'id' | 'name' | 'numOfActivities' | 'totalPoints'>
  )>>> }
);


export const PlayersDocument = gql`
    query Players {
  players {
    id
    name
  }
}
    `;

/**
 * __usePlayersQuery__
 *
 * To run a query within a React component, call `usePlayersQuery` and pass it any options that fit your needs.
 * When your component renders, `usePlayersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePlayersQuery({
 *   variables: {
 *   },
 * });
 */
export function usePlayersQuery(baseOptions?: Apollo.QueryHookOptions<PlayersQuery, PlayersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PlayersQuery, PlayersQueryVariables>(PlayersDocument, options);
      }
export function usePlayersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PlayersQuery, PlayersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PlayersQuery, PlayersQueryVariables>(PlayersDocument, options);
        }
export type PlayersQueryHookResult = ReturnType<typeof usePlayersQuery>;
export type PlayersLazyQueryHookResult = ReturnType<typeof usePlayersLazyQuery>;
export type PlayersQueryResult = Apollo.QueryResult<PlayersQuery, PlayersQueryVariables>;
export const PlayersActivitiesForLastHourDocument = gql`
    query PlayersActivitiesForLastHour {
  playersActivitiesForLastHour {
    id
    name
    numOfActivities
    totalPoints
  }
}
    `;

/**
 * __usePlayersActivitiesForLastHourQuery__
 *
 * To run a query within a React component, call `usePlayersActivitiesForLastHourQuery` and pass it any options that fit your needs.
 * When your component renders, `usePlayersActivitiesForLastHourQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePlayersActivitiesForLastHourQuery({
 *   variables: {
 *   },
 * });
 */
export function usePlayersActivitiesForLastHourQuery(baseOptions?: Apollo.QueryHookOptions<PlayersActivitiesForLastHourQuery, PlayersActivitiesForLastHourQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PlayersActivitiesForLastHourQuery, PlayersActivitiesForLastHourQueryVariables>(PlayersActivitiesForLastHourDocument, options);
      }
export function usePlayersActivitiesForLastHourLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PlayersActivitiesForLastHourQuery, PlayersActivitiesForLastHourQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PlayersActivitiesForLastHourQuery, PlayersActivitiesForLastHourQueryVariables>(PlayersActivitiesForLastHourDocument, options);
        }
export type PlayersActivitiesForLastHourQueryHookResult = ReturnType<typeof usePlayersActivitiesForLastHourQuery>;
export type PlayersActivitiesForLastHourLazyQueryHookResult = ReturnType<typeof usePlayersActivitiesForLastHourLazyQuery>;
export type PlayersActivitiesForLastHourQueryResult = Apollo.QueryResult<PlayersActivitiesForLastHourQuery, PlayersActivitiesForLastHourQueryVariables>;