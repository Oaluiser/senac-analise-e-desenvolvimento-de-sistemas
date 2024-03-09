import express from "express"
import alunoRoutes from "./routes/alunos"

const app = express()
const port = 3000

app.use(express.json())
app.use("/alunos", alunoRoutes)

app.get("/", (req, res) => {
  res.send("Aula 1: Desenvolvimento de Serviços e APIs")
})

app.get("/lab", (req, res) => {
  res.send("Aula 1: Laboratório 201")
})

app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`)
})
