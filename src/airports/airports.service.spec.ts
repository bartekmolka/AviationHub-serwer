import { Test, TestingModule } from "@nestjs/testing"
import { AirportsService } from "./airports.service"

describe("AirportsService", () => {
  let service: AirportsService

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AirportsService]
    }).compile()

    service = module.get<AirportsService>(AirportsService)
  })

  it("should be defined", () => {
    expect(service).toBeDefined()
  })
})
