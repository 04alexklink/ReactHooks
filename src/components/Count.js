import { useState } from 'react'
const Count = () => {
  const [count, setCount] = useState(0)
    return (
        <div>
        <h1>Count = {count}</h1>
        <button onClick={e => setCount(count + 1)}>Add to Count</button>
        </div>
    )
}

export default Count
