import React, { useState, useEffect } from 'react';
import { usePlayersQuery } from '../generated/graphql';

const Leaderboard = () => {
  const [players, setPlayers] = useState([] as any);

  const { data, loading, error } = usePlayersQuery();

  useEffect(() => {
    if (data) {
      setPlayers(data.players);
      console.log(data.players);
    }
  }, [data]);

  if (loading) {
    return <div>Loading</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return <div id="leaderboard">Players</div>;
};

export default Leaderboard;
