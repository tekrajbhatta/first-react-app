import React, { useState } from 'react'

function Colors() {
    const [a, b] = useState(true);
  return (
    <div className='text-white bg-slate-700 min-h-48 py-3'>
        <h1 className={`${a === false ? "text-red-500 text-xl my-4" : "text-green-500 text-xl my-4"}`}>{a === false ? "Error" : "Success"}</h1>
        <button onClick={() => b(!a)} className='bg-orange-500 px-8 py-4 rounded-sm'>Submit</button>
    </div>
  )
}

export default Colors
