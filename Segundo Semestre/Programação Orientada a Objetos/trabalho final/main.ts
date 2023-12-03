import { Aluno } from "./Aluno"
import { Curso } from "./Curso"
import { Horas } from "./Horas"
import { Materia } from "./Materias"
const prompt = require("prompt-sync")()

let run: boolean = true
let aluno: Aluno
let curso: Curso
let materias: Array<Materia> = []
let horas: Array<Horas> = []

const consultarAluno = () => {
  aluno
    ? console.log("Nome: ", aluno.nome)
    : console.log("Aluno não cadastrado")
}

const consultarCurso = () => {
  curso
    ? console.log("Nome: ", curso.nome)
    : console.log("Curso não cadastrado")
}

const consultarMaterias = () => {
  materias.length > 0
    ? materias.forEach((materia) => console.log("Nome: ", materia.nome))
    : console.log("Nenhuma matéria cadastrada")
}

const consultarHoras = () => {
  if (horas.length > 0) {
    horas.forEach((hora) => console.log("Nome: ", hora.nome))
    console.log("Total de horas: ", horas.reduce((acc, hora) => acc + hora.quantidadeHoras, 0))
  } else {
    console.log("Nenhuma hora cadastrada")
  }
}

while (run) {
  console.log("1 - Sair")
  console.log("2 - Cadastrar Aluno")
  console.log("3 - Cadastrar Curso")
  console.log("4 - Cadastrar Matéria")
  console.log("5 - Cadastrar Horas")
  console.log("6 - Consultar Aluno")
  console.log("7 - Consultar Curso")
  console.log("8 - Consultar Matérias")
  console.log("9 - Consultar Horas")

  let opcao: number = +prompt("Digite uma opção: ")

  switch (opcao) {
    case 1:
      run = false
      break
    case 2:
      aluno = Aluno.cadastrar(
        prompt("Digite o nome do aluno: "),
        prompt("Digite a senha do aluno: ")
      )
      break
    case 3:
      curso = Curso.cadastrar(
        prompt("Digite o nome do curso: "),
        +prompt("Digite o total de horas complementares: "),
        +prompt("Digite o total de horas: ")
      )
      break
    case 4:
      const materia = Materia.cadastrar(
        prompt("Digite o nome da matéria: "),
        +prompt("Digite o semestre da matéria: "),
        true,
        +prompt("Digite o total de horas: ")
      )
      materias.push(materia)
      break
    case 5:
      const hora = Horas.cadastrar(
        prompt("Digite o nome da hora complementar: "),
        +prompt("Digite o total de horas do certificado: "),
        +prompt("Digite o total de horas aceitas pela coordenação: ")
      )
      horas.push(hora)
      break
    case 6:
      consultarAluno()
      break
    case 7:
      consultarCurso()
      break
    case 8:
      consultarMaterias()
      break
    case 9:
      consultarHoras()
      break
    default:
      console.log("Opção inválida")
  }
}
