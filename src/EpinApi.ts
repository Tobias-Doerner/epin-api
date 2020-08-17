import axios from 'axios'
import { Location } from './api/types/Location'
import { Measurement } from './api/types/Measurement'
import { Pollen } from './api/types/Pollen'

export class EpinApi {
  private static readonly baseUrl: string = 'https://epin.lgl.bayern.de/api'

  private static readonly location: string = '/locations'

  private static readonly measurement: string = '/measurements'

  private static readonly pollen: string = '/pollen'

  public getLocations(): Promise<Array<Location>> {
    return new Promise<Array<Location>>((resolve, reject) => {
      const query = `${EpinApi.baseUrl}${EpinApi.location}`
      axios
        .get(query)
        .then((res) => {
          const locations: Location[] = res.data.map(
            (el) => new Location(el.id, el.name, el.network, el.lon, el.lat)
          )
          resolve(locations)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  public getMeasurements(
    from: number,
    to: number,
    location: string,
    pollen: string
  ): Promise<Array<Measurement>> {
    return new Promise<Array<Measurement>>((resolve, reject) => {
      const query = `${EpinApi.baseUrl}${EpinApi.measurement}?from=${from}&to=${to}&locations=${location}&pollen=${pollen}`
      axios
        .get(query)
        .then((res) => {
          if (res.data.measurements.length === 0) {
            resolve([])
          } else {
            const measurements: Measurement[] = res.data.measurements[0].data
              .map((el) => new Measurement(el.from, el.to, el.value))
              .sort((el) => el.from)
            resolve(measurements)
          }
        })
        .catch((err) => {
          reject(err)
        })
    })
  }

  public getPollen(): Promise<Array<Pollen>> {
    return new Promise<Array<Pollen>>((resolve, reject) => {
      const query = `${EpinApi.baseUrl}${EpinApi.pollen}`
      axios
        .get(query)
        .then((res) => {
          const pollen: Pollen[] = res.data.map((el) => new Pollen(el))
          resolve(pollen)
        })
        .catch((err) => {
          reject(err)
        })
    })
  }
}
