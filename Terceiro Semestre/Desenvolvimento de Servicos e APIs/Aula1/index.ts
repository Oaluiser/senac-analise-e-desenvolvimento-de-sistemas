import express from "express"
const app = express()
const port = 3000

app.get("/", (req, res) => {
  res.send("Aula 1: Desenvolvimento de Serviços e APIs")
})

app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`)
})
