import { useState, useMemo, memo } from "react";

// Memoized List Item (prevents unnecessary re-renders)
const ListItem = memo(function ListItem({ item }) {
  return <li>{item}</li>;
});

function App() {
  const [count, setCount] = useState(0);
  const [search, setSearch] = useState("");

  // Large list simulation
  const items = useMemo(() => {
    console.log("Generating list...");
    return Array.from({ length: 1000 }, (_, i) => `Item ${i + 1}`);
  }, []);

  // Optimized filtering using useMemo
  const filteredItems = useMemo(() => {
    return items.filter((item) =>
      item.toLowerCase().includes(search.toLowerCase())
    );
  }, [items, search]);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>Day 13 – Performance Optimization</h1>

      {/* Counter to test re-rendering */}
      <button onClick={() => setCount(count + 1)}>
        Re-render Count: {count}
      </button>

      <br /><br />

      {/* Search input */}
      <input
        type="text"
        placeholder="Search item..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Optimized list rendering */}
      <ul>
        {filteredItems.slice(0, 50).map((item) => (
          <ListItem key={item} item={item} />
        ))}
      </ul>

      <p>
        Showing first <strong>50 items</strong> for better performance.
      </p>
    </div>
  );
}

export default App;
