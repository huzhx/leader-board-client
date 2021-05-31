import React, { useState, useEffect } from 'react';
import { usePlayersQuery, usePlayersActivitiesForLastHourQuery } from '../generated/graphql';
import Player from './Player';

const Leaderboard = () => {
  const [players, setPlayers] = useState([] as any);

  const { data, loading, error } = usePlayersActivitiesForLastHourQuery();

  useEffect(() => {
    if (data) {
      setPlayers(data.playersActivitiesForLastHour);
      console.log(data.playersActivitiesForLastHour);
    }
  }, [data]);

  if (loading) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div id="leaderboard">
      {players.map((player: { id: number; name: string; numOfActivities: number; totalPoints: number }) => (
        <Player
          key={player.id}
          id={player.id}
          name={player.name}
          numOfActivities={player.numOfActivities}
          totalPoints={player.totalPoints}
        />
      ))}
    </div>
  );
};

export default Leaderboard;
