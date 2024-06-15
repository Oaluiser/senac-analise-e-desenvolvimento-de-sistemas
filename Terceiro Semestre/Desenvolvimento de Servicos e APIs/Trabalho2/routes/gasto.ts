import { PrismaClient } from "@prisma/client"
import { Router } from "express"

const prisma = new PrismaClient()
const router = Router()

router.get("/", async (req, res) => {
  const gastos = await prisma.gasto.findMany()
  res.status(200).json(gastos)
})

router.post("/", async (req, res) => {
  const { data, lanche, valorTotal, alunoId } = req.body
  const gasto = await prisma.gasto.create({
    data: {
      data,
      lanche,
      valorTotal,
      aluno: {
        connect: {
          id: alunoId,
        },
      },
    },
  })
  await prisma.aluno.update({
    where: {
      id: alunoId,
    },
    data: {
      numCompras: {
        increment: 1,
      },
      totalCompras: {
        increment: valorTotal,
      },
    },
  })
  res.status(201).json(gasto)
})

router.delete("/:id", async (req, res) => {
  const { id } = req.params
  const gasto = await prisma.gasto.findUnique({
    where: {
      id: Number(id),
    },
    select: {
      valorTotal: true,
      alunoId: true,
    },
  })
  if (!gasto) {
    res.status(404).json({ message: "Gasto não encontrado" })
    return
  }
  await prisma.gasto.delete({
    where: {
      id: Number(id),
    },
  })
  await prisma.aluno.update({
    where: {
      id: gasto.alunoId,
    },
    data: {
      numCompras: {
        decrement: 1,
      },
      totalCompras: {
        decrement: gasto.valorTotal,
      },
    },
  })
  res.status(200).json({ message: "Gasto excluído com sucesso" })
})

export default router
