import { Injectable } from '@nestjs/common';
import { Match, PrismaClient } from '@prisma/client';

@Injectable()
export class MatchService {
  private prisma = new PrismaClient();
  getAllMatches(): string {
    return 'This action returns all matches';
  }

  createMatch(date: Date, home: string, out: string, referee: number): any {
    this.prisma.match
      .create({
        data: {
          date: date,
          home: home,
          out: out,
        },
      })
      .then((match) => {
        return match;
      });
  }
}
