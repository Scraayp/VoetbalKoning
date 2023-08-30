import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Match, PrismaClient, Role } from '@prisma/client';
import { userCreateDTO } from './user.dto';
import { ApiOperation } from '@nestjs/swagger';

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

  async createUser(user: userCreateDTO) {
    let awaitedUser = await this.getUserByEmail(user.email);

    if (awaitedUser)
      throw new HttpException(
        'A user exists already with that email',
        HttpStatus.FORBIDDEN,
      );

    return this.prisma.user.create({
      data: {
        email: user.email,
        name: user.name,
        role: user.role ? user.role : Role.Gebruiker,
      },
    });
  }

  async updateUser(id: number, user: userCreateDTO) {
    let awaitedUser = await this.getUserById(id);

    if (!awaitedUser)
      throw new HttpException(
        'No user exists with that id',
        HttpStatus.FORBIDDEN,
      );

    return this.prisma.user.update({
      where: {
        id,
      },
      data: {
        email: user.email ? user.email : awaitedUser.email,
        name: user.name ? user.name : awaitedUser.name,
        role: user.role ? user.role : awaitedUser.role,
      },
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
