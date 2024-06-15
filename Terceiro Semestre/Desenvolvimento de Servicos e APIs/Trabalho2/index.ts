import express from "express"
import alunosRoutes from "./routes/aluno"
import gastosRountes from "./routes/gasto"

const app = express()
const port = 3000

app.use(express.json())
app.use("/alunos", alunosRoutes)
app.use("/gastos", gastosRountes)

app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`)
})
