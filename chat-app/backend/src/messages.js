let messages = [];
let idCounter = 1;

export function addMessage(userId, text) {
  const message = {
    id: idCounter++,
    userId,
    text,
    sentiment: "pending",
  };
  messages.push(message);
  return message;
}

export function updateMessageSentiment(id, sentiment) {
  const msg = messages.find((m) => m.id === id);
  if (msg) msg.sentiment = sentiment;
  return msg;
}

export { messages };
