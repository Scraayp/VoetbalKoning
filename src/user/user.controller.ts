import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { Match, PrismaClient, User } from '@prisma/client';
import { UserService } from './user.service';
import {
  ApiOperation,
  ApiProperty,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { userCreateDTO } from './user.dto';

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
  getUserById(@Param('id') id: number) {
    return this.userService.getUserById(id);
  }

  // Get a user by email
  @Get('/email/:email')
  getUserByEmail(@Param('email') email: string) {
    return this.userService.getUserByEmail(email);
  }

  // Create a user
  @Post()
  @ApiOperation({
    description: 'Create a user with data',
    summary: 'Create user',
  })
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully created.',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden. (Most likely the user is already existing)',
  })
  createUser(@Body() user: userCreateDTO) {
    return this.userService.createUser(user);
  }

  // Update user
  @Patch(':id')
  updateUser(@Param('id') id: string, @Body() user: userCreateDTO) {
    return this.userService.updateUser(Number(id), user);
  }

  // Delete user
  @Delete(':id')
  deleteUser(@Param('id') id: number) {
    return this.userService.deleteUser(id);
  }
}
