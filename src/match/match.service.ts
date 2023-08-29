import { Injectable } from '@nestjs/common';

@Injectable()
export class MatchService {
  getAllMatches(): string {
    return 'This action returns all matches';
  }
}
