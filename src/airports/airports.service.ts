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
    return { number: this.databaseService.GetNumberOfRecords() }
  }
  public async getPageOfData(page: number): Promise<any> {
    return this.databaseService.GetWithLimitAndOffset(pageSize, page * pageSize)
  }
}
