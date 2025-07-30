export interface MessageType {
  id: number;
  userId: string;
  text: string;
  sentiment: "pending" | "positive" | "negative" | "neutral";
}
