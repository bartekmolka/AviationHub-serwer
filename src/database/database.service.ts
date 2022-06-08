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
      password: this.config.get("DB_PASSWORD"),
      database: "airport",
    })
  }
  public GetAirports(): any {
    this.connection.connect()
    this.connection.query("SELECT * FROM airport-all", (err, rows) => {
      if (err) {
        console.error(err)
        throw new InternalServerErrorException("Cannot get airports")
      }
      return rows
    })
    return []
  }
}
