import { Injectable, InternalServerErrorException } from "@nestjs/common"
import { ConfigService } from "@nestjs/config"
import { Connection, createConnection } from "mysql"
@Injectable()
export class DatabaseService {
  private connection: Connection
  constructor(private config: ConfigService) {
    this.connection = createConnection({
      host: this.config.get("DB_HOST"),
      user: "root",
      password: this.config.get("DB_ROOT_PASSWORD"),
      database: "Aviation",
    })
  }
  public getData(data: any): any {
    const res = Object.values(JSON.parse(JSON.stringify(data)))
    res.forEach((v) => console.log(v))
    return res
  }
  public async GetAllAirports(): Promise<any> {
    return new Promise((res, rej) => {
      this.connection.query("select * from view_all", (err, results) => {
        if (err) {
          console.error(err)
          throw new InternalServerErrorException("Cannot get airports")
        }
        console.log(results)
        res(results)
      })
    })
  }
  public async GetCountriesAirports(country: string): Promise<any> {
    return new Promise((res, rej) => {
      this.connection.query(
        "SELECT * FROM view_all WHERE Country_Name=?",
        [country],
        (err, results) => {
          if (err) {
            console.error(err)
            throw new InternalServerErrorException("Cannot get airports")
          }
          console.log(results)
          res(results)
        },
      )
    })
  }
  public GetNumberOfRecords(): Promise<number> {
    return new Promise((res, rej) => {
      this.connection.query(
        "SELECT COUNT(*) AS count FROM view_all",
        (err, results) => {
          if (err) {
            console.error(err)
            throw new InternalServerErrorException("Cannot get airports")
          }
          console.log(results)
          res(results)
        },
      )
    })
  }
  public async GetWithLimitAndOffset(
    limit: number,
    offset: number,
  ): Promise<any> {
    return new Promise((res, rej) => {
      this.connection.query(
        "SELECT * FROM view_all LIMIT ? OFFSET ?",
        [limit, offset],
        (err, results) => {
          if (err) {
            console.error(err)
            throw new InternalServerErrorException("Cannot get airports")
          }
          console.log(results)
          res(results)
        },
      )
    })
  }
}
