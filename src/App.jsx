import React from 'react'
import { useState } from 'react'

function App() {
   var [a,updateMArks]=useState(80)
  return (
    <div>
      <button onClick={()=>updateMArks(a=a+1)} h-12 w-32>Click me</button>
      <p>{a}</p>
    </div>
  )
}

export default App
