export abstract class Default {
  constructor(
    private _nome: string,
  ) {}

  public get nome(): string {
    return this._nome
  }

  abstract cadastrar(): void
}