import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Match, PrismaClient } from '@prisma/client';
import { matchDTO } from './match.dto';

@Injectable()
export class MatchService {
  private prisma = new PrismaClient();
  getAllMatches() {
    return 'This action returns all matches';
  }

  getMatchById(id: number) {
    return this.prisma.match.findUnique({
      where: {
        id,
      },
    });
  }

  async createMatch(match: matchDTO) {
    return this.prisma.match.create({
      data: {
        date: match.date,
        home: match.home,
        out: match.out,
        refereeId: match.referee ? match.referee : null,
        score: match.score ? match.score : null,
      },
    });
  }

  async updateMatch(id: number, match: matchDTO) {
    let awaitedGame = await this.getMatchById(id);

    if (!awaitedGame)
      throw new HttpException(
        'No user exists with that id',
        HttpStatus.FORBIDDEN,
      );

    return this.prisma.match.update({
      where: {
        id,
      },
      data: {
        date: match.date ? match.date : awaitedGame.date,
        home: match.home ? match.home : awaitedGame.home,
        out: match.out ? match.out : awaitedGame.out,
        refereeId: match.referee ? match.referee : awaitedGame.refereeId,
        score: match.score ? match.score : awaitedGame.score,
      },
    });
  }

  deleteMatch(id: number) {
    return this.prisma.match.delete({
      where: {
        id,
      },
    });
  }
}
