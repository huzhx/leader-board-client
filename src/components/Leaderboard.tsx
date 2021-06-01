import React, { useState, useEffect } from 'react';
import { usePlayersQuery, usePlayersActivitiesForLastHourQuery } from '../generated/graphql';
import Player from './Player';

const Leaderboard = ({ className }: { className: string }) => {
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
    <div id="leaderboard" className={className}>
      {players.map((player: { id: number; name: string; numOfActivities: number; totalPoints: number }) => (
        <Player
          className="grid grid-cols-4 gap-2 py-1 md:p-2 lg:p-4"
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
