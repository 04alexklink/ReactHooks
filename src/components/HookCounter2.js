import { useState } from 'react'

const HookCounter2 = () => {

    const initialCountValue = 0
    const [count, setCount] = useState(initialCountValue)
    return (
        <div>
          <button onClick={() => {setCount(count + 1)}}>Increment Count</button>
          <button onClick={() => {setCount(initialCountValue)}}>Reset Count</button>
          <button onClick={() => {setCount(count - 1)}}>Decrement Count</button>
          <h1>Count equals {count}</h1>
        </div>
    )
}

export default HookCounter2
