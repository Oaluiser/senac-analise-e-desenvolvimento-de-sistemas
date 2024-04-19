import express from "express"
import imoveisRoutes from "./routes/imoveis"

const app = express()
const port = 3000

app.use(express.json())
app.use("/imoveis", imoveisRoutes)

app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`)
})
