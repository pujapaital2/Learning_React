// Student component using props
function Student(props) {
  return (
    <div style={{ border: "1px solid #333", padding: "10px", margin: "10px" }}>
      <h3>Name: {props.name}</h3>
      <p>Topic: {props.topic}</p>
    </div>
  );
}

// Main App component
function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Day 1 – React Fundamentals</h1>

      <Student name="Sipra Routray" topic="JSX" />
      <Student name="Sipra Routray" topic="Components" />
      <Student name="Sipra Routray" topic="Props" />
    </div>
  );
}

export default App;
