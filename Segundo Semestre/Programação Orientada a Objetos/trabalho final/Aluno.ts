export class Aluno {
  constructor(
    private _nome: string,
    private _senha: string,
  ) {}

  public get nome(): string {
    return this._nome;
  }

  public get senha(): string {
    return this._senha;
  }

  public static cadastrar(
    nome: string,
    senha: string,
  ): Aluno {
    return new Aluno(nome, senha);
  }

  public set senha(senha: string) {
    this._senha = senha;
  }
}
