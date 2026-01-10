import { useState } from 'react'
import UserList from './components/UserList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Day 2 – React Hooks Demo</h1>

      <h2>Counter using useState</h2>
      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>

      <hr />

      <UserList />
    </div>
  )
}

export default App
