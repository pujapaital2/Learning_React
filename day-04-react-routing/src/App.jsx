import { Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <h1>React Router v6 Demo</h1>

      <nav>
        <Link to="/">Home</Link> |{" "}
        <Link to="/about">About</Link> |{" "}
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<h2>Home Page</h2>} />
        <Route path="/about" element={<h2>About Page</h2>} />
        <Route path="/contact" element={<h2>Contact Page</h2>} />
      </Routes>
    </div>
  );
}

export default App;

