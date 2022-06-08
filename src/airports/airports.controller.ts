import { Controller, Get } from "@nestjs/common"
import { AirportsService } from "./airports.service"

@Controller("airports")
export class AirportsController {
  constructor(private airportsService: AirportsService) {}

  @Get("all")
  public async getAllAirports(): Promise<any> {
    return await this.airportsService.getAllAirports()
  }
}
