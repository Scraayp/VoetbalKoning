import { Injectable } from '@nestjs/common';
import { Match, PrismaClient } from '@prisma/client';

@Injectable()
export class UserService {
  private prisma = new PrismaClient();
  getAllUsers() {
    return this.prisma.user.findMany();
  }

  getUserById(id: number) {
    return this.prisma.user.findUnique({
      where: {
        id,
      },
    });
  }

  getUserByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: {
        email,
      },
    });
  }

  createUser(data: any) {
    return this.prisma.user.create({
      data,
    });
  }

  updateUser(id: number, data: any) {
    return this.prisma.user.update({
      where: {
        id,
      },
      data,
    });
  }

  deleteUser(id: number) {
    return this.prisma.user.delete({
      where: {
        id,
      },
    });
  }
}
