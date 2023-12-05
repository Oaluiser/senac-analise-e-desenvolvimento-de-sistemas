import { Default } from './Default'

export class Materia extends Default {
  constructor(
    protected _nome: string,
    private _semestre: number,
    private _status: boolean,
    private _horas: number
  ) {
    super(_nome)
  }

  public getNome(): string {
    return this._nome
  }

  public get semestre(): number {
    return this._semestre
  }

  public get status(): boolean {
    return this._status
  }

  public get horas(): number {
    return this._horas
  }

  public static cadastrar(
    nome: string,
    semestre: number,
    status: boolean,
    horas: number
  ): Materia {
    return new Materia(nome, semestre, status, horas)
  }
}
