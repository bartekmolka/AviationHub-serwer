import { Module } from "@nestjs/common"
import { ConfigModule } from "@nestjs/config"
import { DatabaseService } from "./database.service"

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true })],
  providers: [DatabaseService],
  exports: [DatabaseService],
})
export class DatabaseModule {}
