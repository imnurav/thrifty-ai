# 💬 Real-Time Chat App with Sentiment Analysis

This is a full-stack real-time chat application built with:

- **Frontend**: React + TypeScript + TailwindCSS
- **Backend**: Node.js + Express + Socket.IO
- **Storage**: In-memory (for simplicity)

Each message sent is displayed to all connected users in real time, and after a short delay, a **sentiment analysis** (positive / negative / neutral) is simulated and the result is updated live.

---

## ✨ Features

- 🚀 Real-time communication using WebSockets (Socket.IO)
- 📝 Message display with sender name and sentiment tag
- 🔄 Live update of sentiment after 3-second processing delay
- ✅ Clean and responsive UI using TailwindCSS
- ⚡ Built with modern tools: React + TypeScript + Vite

---

## 📁 Project Structure

chat-app/
├── backend/              # Node.js + Express + Socket.IO backend
│   ├── src/
│   │   ├── index.js      # Main server entry point (Express + Socket.io setup)
│   │   └── messages.js   # In-memory message handling and sentiment logic
│   ├── package.json      # Backend dependencies and scripts
│   └── README.md         # Project readme (shared or separate)
│
├── frontend/             # React + TypeScript + TailwindCSS frontend
│   ├── public/           # Static files (e.g., favicon)
│   ├── src/
│   │   ├── assets/       # (Optional) images or static assets
│   │   ├── components/
│   │   │   ├── Chat.tsx        # Main chat UI component (input, message list)
│   │   │   └── Message.tsx     # Individual message with sentiment UI
│   │   ├── App.tsx             # Root component (handles joining + routing)
│   │   ├── index.css           # Tailwind directives and base styles
│   │   ├── main.tsx            # React app mount point
│   │   ├── types.ts            # TypeScript interface for MessageType
│   │   └── vite-env.d.ts       # Auto-generated Vite types
│   ├── package.json      # Frontend dependencies and scripts
│   ├── tailwind.config.js      # Tailwind configuration
│   ├── tsconfig.json           # Global TS config
│   ├── tsconfig.app.json       # TS config for app files
│   ├── tsconfig.node.json      # TS config for node files
│   └── README.md               # Same or separate frontend doc
│──README.md

# How It All Connects
Frontend (Chat.tsx):

Connects to http://localhost:4000 using socket.io-client

Listens for:

"loadMessages" → load all existing messages

"newMessage" → append message with pending sentiment

"sentimentUpdate" → update sentiment label

Backend (index.js):

Serves API endpoint POST /message

Emits to clients using:

io.emit("newMessage", message)

io.emit("sentimentUpdate", updatedMessage)

Message Flow:

User sends message → stored with sentiment "pending"

After 3s delay → sentiment is processed

Clients receive sentiment updates in real-time