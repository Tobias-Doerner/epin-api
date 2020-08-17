export class Location {
  public readonly id: number

  public readonly name: string

  public readonly network: string

  public readonly longitude: number

  public readonly latitude: number

  constructor(
    id: number,
    name: string,
    network: string,
    longitude: number,
    latitude: number
  ) {
    this.id = id
    this.name = name
    this.network = network
    this.longitude = longitude
    this.latitude = latitude
  }
}
