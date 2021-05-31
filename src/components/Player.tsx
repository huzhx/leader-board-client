import React from 'react';

const Player = ({ id, name }: { id: number; name: string }) => {
  return <div id="player">{`${id} ${name}`}</div>;
};

export default Player;
