import { Module } from "@nestjs/common"
import { AppController } from "./app.controller"
import { AppService } from "./app.service"
import { AirportsController } from "./airports/airports.controller"
import { AirportsModule } from "./airports/airports.module"

@Module({
  imports: [AirportsModule],
  controllers: [AppController, AirportsController],
  providers: [AppService]
})
export class AppModule {}
