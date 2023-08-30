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
  @ApiOperation({
    description: 'Get all users',
    summary: 'Get all users',
  })
  getUsers() {
    return this.userService.getAllUsers();
  }

  // Get a user by id
  @Get('/id/:id')
  @ApiOperation({
    description: 'Get user by id',
    summary: 'Get user by id',
  })
  getUserById(@Param('id') id: number) {
    return this.userService.getUserById(id);
  }

  // Get a user by email
  @Get('/email/:email')
  @ApiOperation({
    description: 'Get user by email',
    summary: 'Get user by email',
  })
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
  @ApiOperation({
    description: 'Update a user with new data',
    summary: 'Update a user',
  })
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully patched..',
  })
  @ApiResponse({
    status: 403,
    description: 'Forbidden. (Most likely the user is not existing)',
  })
  updateUser(@Param('id') id: string, @Body() user: userCreateDTO) {
    return this.userService.updateUser(Number(id), user);
  }

  // Delete user
  @Delete(':id')
  @ApiOperation({
    description: 'Delete a user by id',
    summary: 'Delete a user with id',
  })
  @ApiResponse({
    status: 201,
    description: 'The record has been successfully deleted...',
  })
  deleteUser(@Param('id') id: number) {
    return this.userService.deleteUser(id);
  }
}
