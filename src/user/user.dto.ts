import { Role } from "@prisma/client";

export class userCreateDTO {
  email: string;
  name: string;
  role?: Role;
}
