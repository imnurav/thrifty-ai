import express from "express";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";
import { messages, addMessage, updateMessageSentiment } from "./messages.js";

  const app = express();
const server = http.createServer(app);
const io = new Server(server, {
  cors: { origin: "*" },
});

app.use(cors());
app.use(express.json());

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);
  socket.emit("loadMessages", messages);
});

app.post("/message", (req, res) => {
  const { userId, text } = req.body;
  const message = addMessage(userId, text);
  io.emit("newMessage", message);

  setTimeout(() => {
    const sentiment = analyzeSentiment(text);
    const updated = updateMessageSentiment(message.id, sentiment);
    io.emit("sentimentUpdate", updated);
  }, 3000);

  res.status(201).json(message);
});

function analyzeSentiment(text) {
  const words = text.toLowerCase().split(/\s+/);
  if (words.some((w) => ["happy", "love", "great"].includes(w)))
    return "positive";
  if (words.some((w) => ["sad", "angry", "bad"].includes(w))) return "negative";
  return "neutral";
}

server.listen(4000, () => {
  console.log("Server listening on http://localhost:4000");
});
