import React, { use, useState } from 'react';
import Header from '../Components/Header';

function App() {
  const  [countp,updateCount]=useState(0)
  return (
    <div className='h-screen w-screen bg-zinc-700'>
    <div className='h-12 w-screen bg-green-700  flex items-center justify-center'>
      <Header count={countp} updater ={updateCount} />
    </div>
    </div>
   
  );
}

export default App;
