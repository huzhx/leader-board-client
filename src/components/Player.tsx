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
      <span
        id="name"
        className="text-xs md:text-lg tracking-wider font-medium text-gray-600 subpixel-antialiased col-span-2 break-normal"
      >
        {name}
      </span>
      <span id="numOfActivities" className="text-xs md:text-lg font-sans font-normal text-gray-400">
        {numOfActivities}
      </span>
      <span id="totalPoints" className="text-xs md:text-lg font-sans font-normal text-gray-600">
        {totalPoints}
      </span>
    </div>
  );
};

export default Player;
