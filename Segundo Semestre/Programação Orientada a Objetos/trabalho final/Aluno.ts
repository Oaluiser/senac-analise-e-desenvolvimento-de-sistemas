import { Default } from './Default'

export class Aluno extends Default {
  constructor(
    protected _nome: string,
    private _senha: string
  ) {
    super(_nome)
  }

  public getNome(): string {
    return this._nome
  }

  public get senha(): string {
    return this._senha
  }

  public static cadastrar(nome: string, senha: string): Aluno {
    return new Aluno(nome, senha)
  }

  public set senha(senha: string) {
    this._senha = senha
  }
}
