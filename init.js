import app from "./app";
import dotenv from "dotenv";
import "./db";

dotenv.config();

const PORT = process.env.PORT;

const handleListening = () => {
  console.log(`Sever is running on : http://localhost:${PORT}`);
};

app.listen(PORT, handleListening);
