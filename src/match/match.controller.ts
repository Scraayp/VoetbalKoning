import { Body, Controller, Get, Post } from '@nestjs/common';
import { MatchService } from './match.service';
import { Match, PrismaClient } from '@prisma/client';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('match')
@Controller('match')
export class MatchController {
  constructor(private readonly matchService: MatchService) {}

  @Get()
  // @ts-ignore
  async getAllMatches(): any {
    return await this.matchService.getAllMatches();
  }

  @Post()
  async createMatch(
    @Body() date: Date,
    @Body() home: string,
    @Body() out: string,
    @Body() referee: number,
  ): Promise<Match> {
    return await this.matchService.createMatch(date, home, out, referee);
  }
}
