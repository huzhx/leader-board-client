import { gql } from '@apollo/client';

export const GET_PLAYERS = gql`
  query Players {
    players {
      id
      name
    }
  }
  query PlayersActivitiesForLastHour {
    playersActivitiesForLastHour {
      id
      name
      numOfActivities
      totalPoints
    }
  }
`;
