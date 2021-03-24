import { useState, useEffect } from 'react'

const HookCounter7 = () => {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')

//   useEffect(() => {
//     console.log('Use Effect- Updating document title')
//     document.title = `You clicked ${count} times`
//   })
// this useEffect without second argument of an array stating what state or prop values we want to check
// have changed in order for useEffect to be called will be called when any re-render occurs. 
// what we want here is for re-rendering to only cause useEffect to be called when count value/state is changed,
// so when we update the name, and name state changes, and re-render of component happens, we don't want useEffect to be
// called as count value has not changed and useEffect is in this example only required for count changes
// so optimise by doing useEffect below:

  useEffect(() => {
    console.log('Use Effect - Updating document title')
    document.title = `You clicked ${count} times`
  }, [count])
    return (
        <div>
          <button onClick={() => setCount(count + 1)}>Clicked {count} times</button>
          <input type='text' value={name} onChange={(e) => setName(e.target.value)}></input>
        </div>
    )
}

export default HookCounter7