import { Controller, Get } from '@nestjs/common';
import { MatchService } from './match.service';

@Controller()
export class AppController {
  constructor(private readonly matchService: MatchService) {}

  @Get('/match')
  getAllMatches(): string {
    return this.matchService.getAllMatches();
  }
}
