import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:3002");

function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on("notification", (msg) => {
      setMessages((prev) => [...prev, msg]);
    });

    return () => socket.off("notification");
  }, []);

  return (
    <div style={{ padding: "30px" }}>
      <h1>Day 18 – Real-time Notification</h1>

      {messages.map((m, i) => (
        <p key={i}>{m}</p>
      ))}
    </div>
  );
}

export default App;
