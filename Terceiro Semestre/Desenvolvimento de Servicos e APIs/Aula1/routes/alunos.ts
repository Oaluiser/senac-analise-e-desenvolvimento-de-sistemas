import { Router } from "express"

const router = Router()

const alunos = [
  { id: 1, nome: "João", curso: "ADS" },
  { id: 2, nome: "Maria", curso: "SI" },
  { id: 3, nome: "José", curso: "BD" },
]

router.get("/", (req, res) => {
  res.status(200).json(alunos)
})

router.post("/", (req, res) => {
  const { nome, curso } = req.body
  alunos.push({ id: alunos.length + 1, nome, curso })
  res
    .status(201)
    .json({ msg: "Aluno cadastrado com sucesso", id: alunos.length })
})

export default router
