import { Controller, Get, Param } from "@nestjs/common"
import { AirportsService } from "./airports.service"

@Controller("airports")
export class AirportsController {
  constructor(private airportsService: AirportsService) {}

  @Get("all")
  public async getAllAirports(): Promise<any> {
    return await this.airportsService.getAllAirports()
  }

  @Get("page/:page")
  public async getPageOfData(@Param("page") page: number): Promise<any> {
    return await this.airportsService.getPageOfData(page)
  }

  @Get("by-country/:country")
  public async getByCountry(@Param("country") country: string): Promise<any> {
    return await this.airportsService.getByCountry(country)
  }

  @Get("count")
  public async getNumberOfRecords(): Promise<number> {
    return await this.airportsService.getNumberOfRecords()
  }
}
