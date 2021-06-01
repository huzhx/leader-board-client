import React from 'react';
import Leaderboard from './components/Leaderboard';

function App() {
  return (
    <div className="w-screen h-screen p-8  bg-gray-100 overflow-auto">
      <Leaderboard className="text-sm md:text-base lg:text-lg max-w-sm md:max-w-lg lg:max-w-3xl min-w-max m-auto flex-col justify-center items-center bg-white rounded-lg p-4 shadow-md divide-y-2 divide-gray-300 divide-opacity-20" />
    </div>
  );
}

export default App;
