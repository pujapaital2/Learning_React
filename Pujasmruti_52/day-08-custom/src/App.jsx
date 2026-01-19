import UserList from "./components/UserList";
import useAuth from "./hooks/useAuth";

function App() {
  const { isLoggedIn, login, logout } = useAuth();

  return (
    <div>
      <h1>Custom Hooks Demo</h1>

      {isLoggedIn ? (
        <>
          <button onClick={logout}>Logout</button>
          <UserList />
        </>
      ) : (
        <button onClick={login}>Login</button>
      )}
    </div>
  );
}

export default App;
