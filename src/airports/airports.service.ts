import { Injectable } from "@nestjs/common"
import { DatabaseService } from "src/database/database.service"

const pageSize = 15

@Injectable()
export class AirportsService {
  constructor(private databaseService: DatabaseService) {}
  public async getAllAirports(): Promise<any> {
    return this.databaseService.GetAllAirports()
  }
  public async getByCountry(country: string): Promise<any> {
    return this.databaseService.GetCountriesAirports(country)
  }
  public async getNumberOfRecords(): Promise<any> {
    return (await this.databaseService.GetNumberOfRecords())[0]
  }
  public async getPageOfData(page: number): Promise<any> {
    return this.databaseService.GetWithLimitAndOffset(
      parseInt(page.toString()),
      (page - 1) * pageSize,
    )
  }
}
