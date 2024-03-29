import { Default } from "./Default"

export class Curso extends Default {
  constructor(
    protected _nome: string,
    private _totalHorasComplementares: number,
    private _totalHoras: number
  ) {
    super(_nome)
  }

  public getNome(): string {
    return this._nome
  }

  public get totalHorasComplementares(): number {
    return this._totalHorasComplementares
  }

  public get totalHoras(): number {
    return this._totalHoras
  }

  public static cadastrar(
    nome: string,
    totalHorasComplementares: number,
    totalHoras: number
  ): Curso {
    return new Curso(nome, totalHorasComplementares, totalHoras)
  }

  public set nome(nome: string) {
    this._nome = nome
  }

  public set totalHorasComplementares(totalHorasComplementares: number) {
    this._totalHorasComplementares = totalHorasComplementares
  }

  public set totalHoras(totalHoras: number) {
    this._totalHoras = totalHoras
  }
}
