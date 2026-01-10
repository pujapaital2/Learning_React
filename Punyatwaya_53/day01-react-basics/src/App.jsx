import { useEffect, useState } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  return (
    <div>
      <h2>State with Hooks</h2>

      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>

      <ul>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
