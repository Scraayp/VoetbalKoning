import { ApiProperty } from '@nestjs/swagger';
import { Role } from '@prisma/client';

export class userCreateDTO {
  @ApiProperty()
  email: string;

  @ApiProperty()
  name: string;

  @ApiProperty()
  role?: Role;
}
