import React from 'react';

const LeaderboardTitle = ({ className }: { className: string }) => {
  return (
    <div id="leaderboardTitle" className={className}>
      <span className="w-0.5 md:w-max break-normal text-xs md:text-lg">Ranking #</span>
      <span className="col-span-2 break-normal text-xs md:text-lg">Player Name</span>
      <span className="w-0.5 md:w-max break-normal text-xs md:text-lg"> Activities Number</span>
      <span className="w-0.5 md:w-max break-normal text-xs md:text-lg">Total Points</span>
    </div>
  );
};

export default LeaderboardTitle;
