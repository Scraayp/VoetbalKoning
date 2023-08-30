import { Body, Controller, Delete, Get, Patch, Post } from '@nestjs/common';
import { Match, PrismaClient } from '@prisma/client';
import { UserService } from './user.service';
import { ApiProperty, ApiTags } from '@nestjs/swagger';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  // Get all users
  @Get()
  getUsers() {
    return this.userService.getAllUsers();
  }

  // Get a user by id
  @Get('/id/:id')
  getUserById(id: number) {
    return this.userService.getUserById(id);
  }

  // Get a user by email
  @Get('/email/:email')
  getUserByEmail(email: string) {
    return this.userService.getUserByEmail(email);
  }

  // Create a user
  @Post()
  createUser(@Body() data: any) {
    return this.userService.createUser(data);
  }

  // Update user
  @Patch(':id')
  updateUser(id: number, @Body() data: any) {
    return this.userService.updateUser(id, data);
  }

  // Delete user
  @Delete(':id')
  deleteUser(id: number) {
    return this.userService.deleteUser(id);
  }
}
