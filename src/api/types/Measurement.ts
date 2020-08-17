export class Measurement {
  private from: number

  private to: number

  private value: number

  constructor(from: number, to: number, value: number) {
    this.from = from
    this.to = to
    this.value = value
  }
}
