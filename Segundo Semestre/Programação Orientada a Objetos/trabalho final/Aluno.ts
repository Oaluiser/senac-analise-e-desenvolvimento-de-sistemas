import { Default } from './Default'

export class Aluno extends Default {
  constructor(
    nome: string,
    private _senha: string
  ) {
    super(nome)
  }

  public get senha(): string {
    return this._senha
  }

  public cadastrar(nome: string, senha: string): void {
    this._senha = senha
    this.nome = nome
  }

  public set senha(senha: string) {
    this._senha = senha
  }
}
