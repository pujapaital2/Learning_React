import useFetch from "./hooks/useFetch";
import useAuth from "./hooks/useAuth";

function App() {
  const { data, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  const { isLoggedIn, login, logout } = useAuth();

  return (
    <div style={{ padding: "20px" }}>
      <h1>Day 08 – Custom Hooks</h1>

      <h2>Auth Hook</h2>
      {isLoggedIn ? (
        <>
          <p>User Logged In</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <button onClick={login}>Login</button>
      )}

      <h2>useFetch Hook</h2>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {data && data.map((u) => <p key={u.id}>{u.name}</p>)}
    </div>
  );
}

export default App;
