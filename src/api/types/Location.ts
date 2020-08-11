export default class Location {
  private id: number

  private name: string

  private network: string

  private longitude: number

  private latitude: number

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
