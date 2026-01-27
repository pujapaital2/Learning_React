import { useEffect, useState } from "react";

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/students")
      .then((res) => res.json())
      .then((data) => setStudents(data));
  }, []);

  return (
    <div style={{ padding: "30px" }}>
      <h1>Day 17 – Mock API Integration</h1>

      <ul>
        {students.map((s) => (
          <li key={s.id}>
            {s.name} – {s.course}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
