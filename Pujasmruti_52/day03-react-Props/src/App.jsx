import Parent from "./components/props-drilling/Parent";
import Card from "./components/composition/Card";
import Layout from "./components/composition/Layout";

function App() {
  return (
    <div>
      <h1>Day 3 – Props vs Composition</h1>

      <h2>Props Drilling Example</h2>
      <Parent />

      <h2>Composition Example</h2>
      <Card>
        <Layout
          header="Composition Header"
          content={<p>This uses composition instead of drilling.</p>}
        />
      </Card>
    </div>
  );
}

export default App;
