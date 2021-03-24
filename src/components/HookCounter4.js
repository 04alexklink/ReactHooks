import {useState} from 'react'

const HookCounter4 = () => {
    const [items, setItems] = useState([])

    const addItem = () => {
      setItems([...items, {
        id: items.length,
        value: Math.floor(Math.random() * 10) + 1
      }])
    }
    return (
        <div>
            <button onClick={addItem}>Add a number</button>
            <ul>See items below:</ul>
            {items.map(item => {
              return <li>item.value</li>
            })}  
        </div>
    )
}

export default HookCounter4
