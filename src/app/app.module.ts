import { Module } from '@nestjs/common';
import { MatchModule } from '../match/match.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from 'src/user/user.module';
@Module({
  imports: [MatchModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
