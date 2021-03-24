import { useState, useEffect } from 'react'

const HookCounter6 = () => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('Use Effect- Updating document title')
    document.title = `You clicked ${count} times`
  })
    return (
        <div>
          <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
        </div>
    )
}

export default HookCounter6
