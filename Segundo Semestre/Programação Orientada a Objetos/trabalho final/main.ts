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
let isLogado: boolean = false

const consultarAluno = () => {
  aluno
    ? console.log("Nome: ", aluno.getNome)
    : console.log("Aluno não cadastrado")
}

const login = (nome: string, senha: string) => {
  if (!aluno) {
    console.log("Aluno não cadastrado")
    return
  }

  if (aluno.getNome() === nome && aluno.senha === senha) {
    isLogado = true
    console.log("Login efetuado com sucesso")
  } else {
    console.log("Login ou senha inválidos")
  }
}

const consultarCurso = () => {
  curso
    ? console.log("Nome: ", curso.nome)
    : console.log("Curso não cadastrado")
}

const consultarMaterias = () => {
  materias.length > 0
    ? materias.forEach((materia) => console.log("Nome: ", materia.getNome()))
    : console.log("Nenhuma matéria cadastrada")
}

const consultarHoras = () => {
  if (horas.length > 0) {
    horas.forEach((hora) => console.log("Nome: ", hora.getNome()))
    console.log(
      "Total de horas: ",
      horas.reduce((acc, hora) => acc + hora.quantidadeHoras, 0)
    )
  } else {
    console.log("Nenhuma hora cadastrada")
  }
}

while (run) {
  if (!isLogado) {
    console.log("0 - Sair")
    console.log("1 - Cadastrar Aluno")
    console.log("2 - Login")
  } else {
    console.log("0 - Sair")
    console.log("3 - Cadastrar Curso")
    console.log("4 - Cadastrar Matéria")
    console.log("5 - Cadastrar Horas")
    console.log("6 - Consultar Aluno")
    console.log("7 - Consultar Curso")
    console.log("8 - Consultar Matérias")
    console.log("9 - Consultar Horas")
  }

  let opcao: number = +prompt("Digite uma opção: ")

  switch (opcao) {
    case 0:
      run = false
      break
    case 1:
      aluno = Aluno.cadastrar(
        prompt("Digite o nome do aluno: "),
        prompt("Digite a senha do aluno: ")
      )
      break
    case 2:
      const nome: string = prompt("Digite o nome do aluno: ")
      const senha: string = prompt("Digite a senha do aluno: ")
      login(nome, senha)
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
