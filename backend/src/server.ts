import express from "express";
import cors from "cors";
import apiRoutes from "../src/routes/index.js";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("API do Portfólio está funcionando!");
});

app.use("/api", apiRoutes);

app.listen(PORT, () => {
  console.log(`🚀 Servidor backend rodando na porta ${PORT}`);
});
