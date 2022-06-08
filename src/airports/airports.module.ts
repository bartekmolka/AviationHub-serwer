import { Module } from "@nestjs/common"
import { AirportsService } from "./airports.service"

@Module({
  providers: [AirportsService]
})
export class AirportsModule {}
