import { DatabaseModule } from "./../database/database.module"
import { Module } from "@nestjs/common"
import { AirportsController } from "./airports.controller"
import { AirportsService } from "./airports.service"

@Module({
  providers: [AirportsService],
  controllers: [AirportsController],
  exports: [AirportsService],
  imports: [DatabaseModule],
})
export class AirportsModule {}
