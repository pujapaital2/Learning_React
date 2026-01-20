import { useState, useEffect } from "react";

/* useFetch – simple & real */
function useFetch(url) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(json => setData(json));
  }, [url]);

  return data;
}

/* useAuth – simple auth */
function useAuth() {
  const [user, setUser] = useState(null);

  const login = (name) => setUser({ name });
  const logout = () => setUser(null);

  return { user, login, logout };
}

export default function App() {
  const users = useFetch("https://jsonplaceholder.typicode.com/users");
  const { user, login, logout } = useAuth();
  const [name, setName] = useState("");

  return (
    <div style={{ padding: 20 }}>
      {/* Auth */}
      {user ? (
        <>
          <p>Hello, {user.name}</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter name"
          />
          <button onClick={() => login(name)}>Login</button>
        </>
      )}

      <hr />

      {/* Fetch */}
      <h3>Users</h3>
      <ul>
        {users.map(u => (
          <li key={u.id}>{u.name}</li>
        ))}
      </ul>
    </div>
  );
}
