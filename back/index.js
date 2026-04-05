import "dotenv/config.js";
import { app } from "./server.js";

const { PORT } = process.env;

app.listen(PORT, () => {
  console.log(`Servidor esta rodando na porta ${PORT}`);
});
