import { Default } from "./Default"

export class Horas extends Default {
  constructor(
    protected _nome: string,
    private _quantidadeHoras: number,
    private _horasAceitas: number
  ) {
    super(_nome)
  }

  public getNome(): string {
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
