import { PrismaClient } from "@prisma/client"
import { Router } from "express"

const prisma = new PrismaClient()
const router = Router()

router.get("/", async (req, res) => {
  const alunos = await prisma.aluno.findMany()
  res.status(200).json(alunos)
})

router.post("/", async (req, res) => {
  const { nome, turma, observacao, nomeResponsavel, whatsApp } = req.body
  const aluno = await prisma.aluno.create({
    data: {
      nome,
      turma,
      observacao,
      nomeResponsavel,
      whatsApp,
    },
  })
  res.status(201).json(aluno)
})

router.get("/saldo", async (req, res) => {
  const alunos = await prisma.aluno.findMany({
    select: {
      id: true,
      nome: true,
      totalDepositos: true,
      totalCompras: true,
    },
  })
  const alunosComSaldo = alunos.map((aluno) => {
    const saldo = aluno.totalDepositos - aluno.totalCompras
    return { ...aluno, saldo }
  })
  res.status(200).json(alunosComSaldo)
})

export default router
