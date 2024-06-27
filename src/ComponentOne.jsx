import React, {useState} from 'react'
import './index.css'

export default function ComponentOne() {
    const [count, setCount] = useState(0)
  return (
    <div>
        <h1>Counter</h1>
        <br />
        <h2>{count}</h2>
        <br />
        <button className='button' onClick={()=> setCount(count+1)}>+</button>
        <button onClick={() => setCount(count-1)}>-</button>
    </div>
  )
}
