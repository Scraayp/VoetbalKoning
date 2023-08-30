import { ApiProperty } from '@nestjs/swagger';
import { Role } from '@prisma/client';

export class matchDTO {
  @ApiProperty()
  date: Date;

  @ApiProperty()
  home: string;

  @ApiProperty()
  out: string;

  @ApiProperty()
  referee?: number;

  @ApiProperty()
  score?: string;
}
