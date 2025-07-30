import type { MessageType } from "../types";

interface Props {
  msg: MessageType;
  currentUser: string;
}

const Message = ({ msg, currentUser }: Props) => {
  const isSelf = msg.userId === currentUser;

  const sentimentColor = {
    pending: "bg-gray-300 text-gray-800",
    positive: "bg-green-200 text-green-800",
    negative: "bg-red-200 text-red-800",
    neutral: "bg-yellow-200 text-yellow-800",
  };

  return (
    <div className={`flex ${isSelf ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[75%] p-3 rounded-lg shadow-sm ${
          isSelf
            ? "bg-blue-500 text-white rounded-br-none"
            : "bg-gray-200 text-gray-900 rounded-bl-none"
        }`}
      >
        <div className="text-sm font-semibold mb-1">{msg.userId}</div>
        <div>{msg.text}</div>
        <div
          className={`text-xs inline-block px-2 py-1 mt-2 rounded-full ${
            sentimentColor[msg.sentiment]
          }`}
        >
          {msg.sentiment}
        </div>
      </div>
    </div>
  );
};

export default Message;
