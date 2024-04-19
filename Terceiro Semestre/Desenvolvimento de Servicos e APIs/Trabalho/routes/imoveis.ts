import { PrismaClient, Tipo } from "@prisma/client"
import { Router } from "express"

const prisma = new PrismaClient()
const router = Router()

router.get("/", async (req, res) => {
  const viagens = await prisma.imoveis.findMany()
  res.status(200).json(viagens)
})

router.post("/", async (req, res) => {
  const { tipo, endereco, bairro, preco, dorm } = req.body
  const imovel = await prisma.imoveis.create({
    data: {
      tipo,
      endereco,
      bairro,
      preco,
      dorm,
    },
  })
  res.status(201).json(imovel)
})

router.put("/:id", async (req, res) => {
  const { id } = req.params
  const { tipo, endereco, bairro, preco, dorm } = req.body
  const imovel = await prisma.imoveis.update({
    where: {
      id: Number(id),
    },
    data: {
      tipo,
      endereco,
      bairro,
      preco,
      dorm,
    },
  })
  res.status(200).json(imovel)
})

router.delete("/:id", async (req, res) => {
  const { id } = req.params
  await prisma.imoveis.delete({
    where: {
      id: Number(id),
    },
  })
  res.status(204).send()
})

router.get("/ordenado", async (req, res) => {
  const imoveis = await prisma.imoveis.findMany({
    orderBy: {
      preco: "asc",
    },
    select: {
      tipo: true,
      endereco: true,
      preco: true,
    },
  })
  res.status(200).json(imoveis)
})

router.get("/estatisticas", async (req, res) => {
  const precoMedio = await prisma.imoveis.aggregate({
    _avg: {
      preco: true,
    },
  })
  const somaPreco = await prisma.imoveis.aggregate({
    _sum: {
      preco: true,
    },
  })
  res.status(200).json({ precoMedio, somaPreco })
})

router.get("/filtro", async (req, res) => {
  const { tipo, preco } = req.body
  const imoveis = await prisma.imoveis.findMany({
    where: {
      tipo: tipo as Tipo,
      preco: {
        lte: Number(preco),
      },
    },
  })
  res.status(200).json(imoveis)
})

router.get("/agrupamento", async (req, res) => {
  const tipos = await prisma.imoveis.groupBy({
    by: ["tipo"],
    _count: {
      tipo: true,
    },
  })
  res.status(200).json(tipos)
})

export default router
