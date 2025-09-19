const express = require("express");
const http = require("http");
const path = require("path");
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);

// Attach Socket.IO
const io = new Server(server, {
  cors: {
    origin: "*", // for dev, allow all
    methods: ["GET", "POST"]
  }
});

// Socket.IO events
io.on("connection", (socket) => {
  console.log("✅ A user connected:", socket.id);

  socket.emit("welcome", "Hello! You are connected to Socket.IO server 🚀");

  socket.on("message", (msg) => {
    console.log("📩 Message from client:", msg);

    // Echo back to same client
    socket.emit("serverResponse", `Server received: ${msg}`);

    // OR broadcast to all clients:
    // io.emit("serverResponse", `Broadcast: ${msg}`);
  });

  socket.on("disconnect", () => {
    console.log("❌ User disconnected:", socket.id);
  });
});

// Example REST API
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from Express API 🚀" });
});

// Serve React build (production)
app.use(express.static(path.join(__dirname, "../frontend/build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build", "index.html"));
});

// Start server
const PORT = process.env.PORT || 8080;
server.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
