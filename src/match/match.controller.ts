import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { MatchService } from './match.service';
import { Match, PrismaClient } from '@prisma/client';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { matchDTO } from './match.dto';

@ApiTags('match')
@Controller('match')
export class MatchController {
  constructor(private readonly matchService: MatchService) {}

  @Get()
  @ApiOperation({
    description: 'Get all matches with data from database',
    summary: 'Get all matches',
  })
  @ApiResponse({
    status: 201,
    description: 'You received a array of matches',
  })
  async getAllMatches() {
    return await this.matchService.getAllMatches();
  }

  @Post()
  @ApiOperation({
    description: 'Create a match with data and save it in the database',
    summary: 'Create match',
  })
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  async createMatch(@Body() match: matchDTO) {
    return await this.matchService.createMatch(match);
  }

  @ApiOperation({
    description: 'Update a match with new data and change it in the database',
    summary: 'Update match',
  })
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  @ApiResponse({
    status: 401,
    description:
      'You are not allowed to edit this match. Because it doesn`t exist',
  })
  @Patch(':id')
  updatematch(@Param('id') id: string, @Body() match: matchDTO) {
    return this.matchService.updateMatch(Number(id), match);
  }

  @ApiOperation({
    description: 'Delete a match from the system',
    summary: 'Delete match match',
  })
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  @Delete(':id')
  deleteMatch(@Param('id') id: number) {
    return this.matchService.deleteMatch(id);
  }
}
