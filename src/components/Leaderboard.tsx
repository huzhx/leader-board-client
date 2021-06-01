import React, { useState, useEffect } from 'react';
import { usePlayersActivitiesForLastHourLazyQuery } from '../generated/graphql';
import Player from './Player';
import LeaderboardTitle from './LeaderboardTitle';
import Header from './Header';
import moment from 'moment';

const Leaderboard = ({ className }: { className: string }) => {
  const [players, setPlayers] = useState([] as any);
  const [timeLabel, setTimeLabel] = useState('For the past hour of 2021-01-DD HH:mm');
  const [getPlayerActivities, { loading, data, error }] = usePlayersActivitiesForLastHourLazyQuery({
    fetchPolicy: 'network-only',
  });

  useEffect(() => {
    if (data && data.playersActivitiesForLastHour) {
      const day = moment().format('DD');
      const hourMin = moment().format('HH:mm');
      setTimeLabel(() => `For the past hour of 2021-01-${day} ${hourMin}`);
      setPlayers(data.playersActivitiesForLastHour);
    }
  }, [data]);

  useEffect(() => {
    getPlayerActivities();
  }, []);

  const onClick = () => {
    getPlayerActivities();
  };

  if (loading) {
    return (
      <div id="leaderboard" className={className}>
        <Header className="flex-col my-4" timeLabel={timeLabel} loading={loading} onClick={onClick} />
        <div className="bg-white rounded-lg shadow-md divide-y-2 divide-gray-300 divide-opacity-20">
          <LeaderboardTitle className="grid grid-cols-5 gap-2 p-2 px-4 md:p-4 md:pl-8 bg-gray-700 text-gray-50 rounded-t-lg text-xs md:text-base font-semibold tracking-wider items-center" />
        </div>
      </div>
    );
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div id="leaderboard" className={className}>
      <Header className="flex-col my-4" timeLabel={timeLabel} loading={loading} onClick={onClick} />
      <div className="bg-white rounded-lg shadow-md divide-y-2 divide-gray-300 divide-opacity-20">
        <LeaderboardTitle className="grid grid-cols-5 gap-2 p-2 px-4 md:p-4 md:pl-8 bg-gray-700 text-gray-50 rounded-t-lg text-xs md:text-base md:font-semibold md:tracking-wider items-center" />
        {players.map(
          (player: { id: number; name: string; numOfActivities: number; totalPoints: number }, key: number) => (
            <Player
              className="grid grid-cols-5 gap-2 p-2 px-4 md:p-4 md:pl-8"
              key={player.id}
              id={player.id}
              rankingPos={key + 1}
              name={player.name}
              numOfActivities={player.numOfActivities}
              totalPoints={player.totalPoints}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Leaderboard;
