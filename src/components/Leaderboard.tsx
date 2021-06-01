import React, { useState, useEffect } from 'react';
import { usePlayersQuery, usePlayersActivitiesForLastHourQuery } from '../generated/graphql';
import Player from './Player';
import LeaderboardTitle from './LeaderboardTitle';

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
      <LeaderboardTitle className="grid grid-cols-4 gap-2 p-2 px-4 md:p-4 bg-gray-700 text-gray-50 rounded-t-lg text-xs md:text-base font-semibold tracking-wider items-center" />
      {players.map((player: { id: number; name: string; numOfActivities: number; totalPoints: number }) => (
        <Player
          className="grid grid-cols-4 gap-2 p-2 px-4 md:p-4"
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
