import {useState, useEffect} from 'react'

const HookCounter5 = () => {
  const [count, setCount] = useState(0)
  useEffect(() => {
    document.title = `You clicked ${count} times`
  })
    return (
        <div>
          <button onClick={() => setCount(count + 1)}>Add to count</button>
          <p>Count is {count}</p> 
        </div>
    )
}

export default HookCounter5
