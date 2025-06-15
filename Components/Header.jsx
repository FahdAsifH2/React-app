import React from 'react'

function Header({count, updater}) {
  return (
    <div className='text-white p-4 flex items-center justify-between w-full'>
      <h2>logo</h2>
      <div className='flex gap-20'>
        <h4>About</h4>
        <h4>{count}</h4>
        <button onClick={() => updater(count + 1)} className='h-12 w-32 bg-red-200'>increase</button>
        <h4>career</h4>
        <h4>logout</h4>
      </div>
    </div>
  )
}

export default Header
