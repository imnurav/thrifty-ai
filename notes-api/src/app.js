import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import notesRouter from "./routes/notes.js";
import authRouter from "./routes/auth.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
console.log(process.env.MONGODB_URI, "url");
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB error:", err));

app.use("/auth", authRouter);
app.use("/notes", notesRouter);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
