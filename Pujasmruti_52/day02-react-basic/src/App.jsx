import { useState } from 'react'
import './App.css'

import Counter from "./components/Counter";
import FetchData from "./components/FetchData";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Day 2 – React Hooks</h1>

      {/* Vite demo counter */}
      <div className="card">
        <button onClick={() => setCount(count + 1)}>
          Vite Counter: {count}
        </button>
      </div>

      {/* Day-2 Hooks Work */}
      <Counter />
      <FetchData />
    </div>
  );
}

export default App;
