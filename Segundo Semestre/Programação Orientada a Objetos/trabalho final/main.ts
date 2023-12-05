import { Aluno } from "./Aluno"
import { Curso } from "./Curso"
import { Horas } from "./Horas"
import { Materia } from "./Materias"
const prompt = require("prompt-sync")()

let run: boolean = true
let aluno: Aluno | null = null
let curso: Curso | null = null
let materias: Array<Materia> = []
let horas: Array<Horas> = []
let isLogado: boolean = false

const consultarAluno = () => {
  aluno
    ? console.log("Nome: ", aluno.getNome())
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
      horas.reduce((acc, hora) => acc + hora.horasAceitas, 0)
    )
  } else {
    console.log("Nenhuma hora cadastrada")
  }
}

const editarAluno = () => {
  if (!aluno) {
    console.log("Aluno não cadastrado")
    return
  }

  aluno.setNome(prompt("Digite o novo nome do aluno: "))
  aluno.senha = prompt("Digite a nova senha do aluno: ")
}

const editarCurso = () => {
  if (!curso) {
    console.log("Curso não cadastrado")
    return
  }

  curso.nome = prompt("Digite o novo nome do curso: ")
  curso.totalHorasComplementares = +prompt(
    "Digite o novo total de horas complementares: "
  )
  curso.totalHoras = +prompt("Digite o novo total de horas: ")
}

const editarMateria = () => {
  if (materias.length === 0) {
    console.log("Nenhuma matéria cadastrada")
    return
  }

  materias.forEach((materia, index) => {
    console.log(`${index} - ${materia.getNome()}`)
  })

  const index: number = +prompt("Digite o número da matéria: ")
  const materia: Materia = materias[index]
  materia.setNome(prompt("Digite o novo nome da matéria: "))
  materia.setSemestre(+prompt("Digite o novo semestre da matéria: "))
  const status: number = +prompt("Digite 1 - Concluído | 0 - Não Concluído: ")
  materia.setStatus(status === 1 ? true : false)
  materia.setHoras(+prompt("Digite o novo total de horas: "))
}

const editarHoras = () => {
  if (horas.length === 0) {
    console.log("Nenhuma hora cadastrada")
    return
  }

  horas.forEach((hora, index) => {
    console.log(`${index} - ${hora.getNome()}`)
  })

  const index: number = +prompt("Digite o número da hora: ")
  const hora: Horas = horas[index]
  hora.setNome(prompt("Digite o novo nome da hora: "))
  hora.setQuantidadeHoras(+prompt("Digite o novo total de horas: "))
  hora.setQuantidadeHorasAceitas(
    +prompt("Digite o novo total de horas aceitas: ")
  )
}

const excluirAluno = () => {
  aluno = null
}

const excluirCurso = () => {
  curso = null
}

const excluirMateria = () => {
  if (materias.length === 0) {
    console.log("Nenhuma matéria cadastrada")
    return
  }

  materias.forEach((materia, index) => {
    console.log(`${index} - ${materia.getNome()}`)
  })

  const index: number = +prompt("Digite o número da matéria a ser excluida: ")
  materias.splice(index, 1)
  console.log("Matéria excluída com sucesso")
}

const excluirHoras = () => {
  if (horas.length === 0) {
    console.log("Nenhuma hora cadastrada")
    return
  }

  horas.forEach((hora, index) => {
    console.log(`${index} - ${hora.getNome()}`)
  })

  const index: number = +prompt("Digite o número da hora a ser excluida: ")
  horas.splice(index, 1)
  console.log("Hora excluída com sucesso")
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
    console.log("10 - Editar Aluno")
    console.log("11 - Editar Curso")
    console.log("12 - Editar Matéria")
    console.log("13 - Editar Horas")
    console.log("14 - Excluir Aluno")
    console.log("15 - Excluir Curso")
    console.log("16 - Excluir Matéria")
    console.log("17 - Excluir Horas")
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
    case 10:
      editarAluno()
      break
    case 11:
      editarCurso()
      break
    case 12:
      editarMateria()
      break
    case 13:
      editarHoras()
      break
    case 14:
      excluirAluno()
      break
    case 15:
      excluirCurso()
      break
    case 16:
      excluirMateria()
      break
    case 17:
      excluirHoras()
      break
    default:
      console.log("Opção inválida")
  }
}
