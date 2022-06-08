import { Injectable, Param } from "@nestjs/common"
import { DatabaseService } from "src/database/database.service"

@Injectable()
export class AirportsService {
  constructor(private databaseService: DatabaseService) {}
  public async getAllAirports(): Promise<any> {
    return {}
  }
  public async getByCountry(country: string): Promise<any> {
    return this.databaseService.GetCountriesAirports(country)
  }
}
