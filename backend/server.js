import express from "express";
import cors from "cors";

const app = express();

// CORS (permite o Angular)
app.use(cors({
  origin: "http://localhost:4200", // se o teu Angular roda noutra porta, ajusta
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

// para veres se o servidor está vivo
app.get("/", (req, res) => res.send("API OK"));

app.listen(3000, () => console.log("Servidor a correr em http://localhost:3000"));