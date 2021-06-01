import React from 'react';

const Player = ({
  id,
  rankingPos,
  name,
  numOfActivities,
  totalPoints,
  className,
}: {
  id: number;
  rankingPos: number;
  name: string;
  numOfActivities: number;
  totalPoints: number;
  className: string;
}) => {
  return (
    <div id="player" className={className}>
      <span id="rankingPos" className="font-sans font-normal text-gray-600">
        {rankingPos}
      </span>
      <span id="name" className="tracking-wider font-medium text-gray-600 subpixel-antialiased col-span-2">
        {name}
      </span>
      <span id="numOfActivities" className="font-sans font-normal text-gray-400">
        {numOfActivities}
      </span>
      <span id="totalPoints" className="font-sans font-normal text-gray-600">
        {totalPoints}
      </span>
    </div>
  );
};

export default Player;
