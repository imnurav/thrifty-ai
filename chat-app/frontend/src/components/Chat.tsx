import { useEffect, useRef, useState } from "react";
import io from "socket.io-client";
import axios from "axios";
import Message from "./Message";
import type { MessageType } from "../types";

const socket = io("http://localhost:4000");

interface Props {
  username: string;
}

const Chat = ({ username }: Props) => {
  const [messages, setMessages] = useState<MessageType[]>([]);
  const [text, setText] = useState("");
  const chatBottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    socket.on("loadMessages", (msgs: MessageType[]) => setMessages(msgs));
    socket.on("newMessage", (msg: MessageType) =>
      setMessages((prev) => [...prev, msg])
    );
    socket.on("sentimentUpdate", (updated: MessageType) =>
      setMessages((prev) =>
        prev.map((msg) => (msg.id === updated.id ? updated : msg))
      )
    );

    return () => {
      socket.off();
    };
  }, []);
  

  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!text.trim()) return;
    await axios.post("http://localhost:4000/message", {
      userId: username,
      text,
    });
    setText("");
  };

  return (
    <div className="bg-white rounded-lg shadow-lg max-w-2xl w-full mx-auto flex flex-col h-[80vh] overflow-hidden">
      <div className="bg-blue-600 text-white px-4 py-3 text-lg font-semibold">
        Chat Room
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-2 bg-gray-50">
        {messages.map((msg) => (
          <Message key={msg.id} msg={msg} currentUser={username} />
        ))}
        <div ref={chatBottomRef} />
      </div>
      <div className="flex items-center border-t p-3 bg-white">
        <input
          type="text"
          className="flex-1 border rounded px-4 py-2 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Type a message..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button
          onClick={sendMessage}
          className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded transition"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
