import React from 'react';

const Player = ({
  id,
  name,
  numOfActivities,
  totalPoints,
}: {
  id: number;
  name: string;
  numOfActivities: number;
  totalPoints: number;
}) => {
  return (
    <div id="player">
      <span id="name">{name}</span>
      <span id="numOfActivities">{numOfActivities}</span>
      <span id="totalPoints">{totalPoints}</span>
    </div>
  );
};

export default Player;
