import React from 'react';
import Leaderboard from './components/Leaderboard';

function App() {
  return (
    <div className="w-screen h-screen p-8 bg-gray-100 overflow-auto">
      <Leaderboard className="text-sm md:text-base lg:text-lg max-w-sm md:max-w-2xl lg:max-w-5xl min-w-max m-auto flex-col justify-center items-center" />
    </div>
  );
}

export default App;
