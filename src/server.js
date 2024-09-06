import http from "http";
import app from "./app.js";

// Criar o servidor HTTP
const httpServer = http.createServer(app);

app.get("/produtos", (req, res, next) => {
  res.send([
    { nome: "Notebook", preco: 123.32 },
    { nome: "Iphone", preco: 400.0 },
    { nome: "Android", preco: 250.0 },
  ]);
});

// Servidor HTTP escutando na porta 3000
httpServer.listen(3000, () => {
  console.log("Servidor HTTP está rodando na porta 3000");
});
