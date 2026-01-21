import { useEffect, useRef } from "react";

function App() {
  const headingRef = useRef(null);

  // Focus management (A11y pattern for SPA)
  useEffect(() => {
    headingRef.current.focus();
  }, []);

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      {/* Accessible heading */}
      <h1 tabIndex="-1" ref={headingRef}>
        Accessibility Demo (Day 12)
      </h1>

      {/* Accessible form */}
      <form>
        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="name">Name:</label>
          <br />
          <input
            id="name"
            type="text"
            aria-required="true"
            placeholder="Enter your name"
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <label htmlFor="email">Email:</label>
          <br />
          <input
            id="email"
            type="email"
            aria-describedby="emailHelp"
            placeholder="Enter your email"
          />
          <small id="emailHelp">
            We will never share your email.
          </small>
        </div>

        {/* Accessible button */}
        <button type="submit" aria-label="Submit form">
          Submit
        </button>
      </form>

      {/* Accessible image */}
      <div style={{ marginTop: "20px" }}>
        <img
          src="https://via.placeholder.com/150"
          alt="Sample placeholder image"
        />
      </div>
    </div>
  );
}

export default App;
