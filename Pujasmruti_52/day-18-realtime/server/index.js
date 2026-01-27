import { Server } from "socket.io";

const io = new Server(3002, {
  cors: {
    origin: "*"
  }
});

io.on("connection", (socket) => {
  console.log("Client connected");

  setInterval(() => {
    socket.emit("notification", "New real-time message received");
  }, 3000);
});
