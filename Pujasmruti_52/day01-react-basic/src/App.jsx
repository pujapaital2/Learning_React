import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Welcome from "./Components/Welcome";

function App() {
  return (
    <div>
      <h1>Day 1 – React Fundamentals</h1>
      <p>Learning JSX and Components</p>

      <Welcome name="Pujasmruti" />
    </div>
  );
}

export default App;

