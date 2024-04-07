import express from "express"
import viagensRoutes from "./routes/viagens"

const app = express()
const port = 3000

app.use(express.json())
app.use("/viagens", viagensRoutes)

app.listen(port, () => {
  console.log(`Servidor rodando na porta: ${port}`)
})
