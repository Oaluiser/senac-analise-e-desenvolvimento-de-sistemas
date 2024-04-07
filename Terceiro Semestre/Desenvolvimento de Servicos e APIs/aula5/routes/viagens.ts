import { PrismaClient } from "@prisma/client"
import { Router } from "express"

const prisma = new PrismaClient()
const router = Router()

router.get("/", async (req, res) => {
  const viagens = await prisma.viagens.findMany()
  res.status(200).json(viagens)
})

router.post("/", async (req, res) => {
  const { destino, transporte, preco, duracao } = req.body
  const viagem = await prisma.viagens.create({
    data: {
      destino,
      transporte,
      preco,
      duracao,
    },
  })
  res.status(201).json(viagem)
})

router.put("/:id", async (req, res) => {
  const { id } = req.params
  const { destino, transporte, preco, duracao } = req.body
  const viagem = await prisma.viagens.update({
    where: {
      id: Number(id),
    },
    data: {
      destino,
      transporte,
      preco,
      duracao,
    },
  })
  res.status(200).json(viagem)
})

router.delete("/:id", async (req, res) => {
  const { id } = req.params
  await prisma.viagens.delete({
    where: {
      id: Number(id),
    },
  })
  res.status(204).send()
})

export default router
