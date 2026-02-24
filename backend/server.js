import express from "express";
import cors from "cors";

const app = express();

// CORS
app.use(cors({
  origin: "http://localhost:4200",
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"]
}));

app.use(cors({
  origin: "http://localhost:4200",
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"]
}));

app.use(express.json());

app.post("/newsletter", (req, res) => {
  const { name, email } = req.body;
  console.log("Recebido:", name, email);
  return res.status(200).json({ message: "OK" });
});

// Ver se o servidor está ativo
app.get("/", (req, res) => res.send("API OK"));

app.listen(3000, () => console.log("Servidor a correr em http://localhost:3000"));