// App.js
import React from "react";

function App() {
  return (
    <div>
      <h1>Props Drilling vs Composition</h1>

      {/* Props Drilling Example */}
      <Parent />

      <hr />

      {/* Composition Example */}
      <Layout>
        <Message />
      </Layout>
    </div>
  );
}

/* ---------- PROPS DRILLING ---------- */

function Parent() {
  const text = "Hello from Props Drilling";
  return <Child text={text} />;
}

function Child({ text }) {
  return <GrandChild text={text} />;
}

function GrandChild({ text }) {
  return <h3>{text}</h3>;
}

/* ---------- COMPOSITION PATTERN ---------- */

function Layout({ children }) {
  return <div>{children}</div>;
}

function Message() {
  return <h3>Hello from Composition</h3>;
}

export default App;
