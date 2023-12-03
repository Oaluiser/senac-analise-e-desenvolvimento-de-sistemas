export class Horas {
  constructor(
    private _nome: string,
    private _quantidadeHoras: number,
    private _horasAceitas: number
  ) {}

  public get nome(): string {
    return this._nome
  }

  public get quantidadeHoras(): number {
    return this._quantidadeHoras
  }

  public get horasAceitas(): number {
    return this._horasAceitas
  }

  public static cadastrar(
    nome: string,
    quantidadeHoras: number,
    horasAceitas: number
  ): Horas {
    return new Horas(nome, quantidadeHoras, horasAceitas)
  }
}
