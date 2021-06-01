import React from 'react';

const Header = ({ className, timeLabel, loading }: { className: string; timeLabel: string; loading: boolean }) => {
  return (
    <div id="header" className={className}>
      <div className="text-3xl font-bold ">Leaderboard</div>
      <div className="flex flex-row space-x-4">
        <div className="flex-shrink font-medium text-gray-600 col-span-3">{timeLabel}</div>
        <div className="flex-shrink text-gray-600 justify-center">
          {loading ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="animate-spin h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
