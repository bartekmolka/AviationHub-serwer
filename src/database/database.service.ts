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
  public getData(data: any ): any {
    const res = Object.values(JSON.parse(JSON.stringify(data)))
    res.forEach((v) => console.log(v))
    return res
  }
  public GetAllAirports(): any {
    this.connection.query("SELECT * FROM Countries", (err, rows) => {
      if (err) {
        console.error(err)
        throw new InternalServerErrorException("Cannot get airports")
      }
      this.getData(rows)
    })
    return []
  }
  public GetCountriesAirports(country): any {
    console.log(this.config.get("DB_ROOT_PASSWORD"))
    this.connection.query(
      "SELECT * FROM view_all WHERE Country_Name=?",
      [country],
      (err, rows) => {
        if (err) {
          console.error(err)
          throw new InternalServerErrorException("Cannot get airports")
        }
        return rows
      },
    )
    return []
  }
}
