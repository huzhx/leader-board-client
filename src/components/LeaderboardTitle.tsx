import React from 'react';

const LeaderboardTitle = ({ className }: { className: string }) => {
  return (
    <div id="leaderboardTitle" className={className}>
      <span className="w-0.5 md:w-max break-normal">Ranking #</span>
      <span className="col-span-2">Player Name</span>
      <span className="w-0.5 md:w-max break-normal"> Activities Number</span>
      <span className="w-0.5 md:w-max break-normal">Total Points</span>
    </div>
  );
};

export default LeaderboardTitle;
