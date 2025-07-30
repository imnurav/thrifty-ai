import { useState } from "react";
import Chat from "./components/Chat";

function App() {
  const [username, setUsername] = useState("");
  const [joined, setJoined] = useState(false);

  const handleJoin = () => {
    if (username.trim()) {
      setJoined(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      {!joined ? (
        <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md space-y-4">
          <h1 className="text-3xl font-bold text-center">Join the Chat</h1>
          <input
            className="border rounded px-4 py-2 w-full"
            type="text"
            placeholder="Enter your name"
            value={username}
            onChange={(e) => setUsername(e.target.value.toLowerCase())}
          />
          <button
            onClick={handleJoin}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition"
          >
            Join Chat
          </button>
        </div>
      ) : (
        <Chat username={username} />
      )}
    </div>
  );
}

export default App;
