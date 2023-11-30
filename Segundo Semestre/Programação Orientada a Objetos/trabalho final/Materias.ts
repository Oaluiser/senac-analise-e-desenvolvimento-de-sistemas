export class Materia {
  constructor(
    private _nome: string,
    private _semestre: number,
    private _status: boolean,
    private _horas: number,
  ) { }

  public get nome(): string {
    return this._nome;
  }

  public get semestre(): number {
    return this._semestre;
  }

  public get status(): boolean {
    return this._status;
  }

  public get horas(): number {
    return this._horas;
  }
}