import {
  Body,
  Controller,
  Post,
  Get,
  Req,
  HttpException,
  HttpStatus,
  Patch,
  Query
} from '@nestjs/common';
import { UsersService } from './users.service'; // Adjust the path as necessary
import { UserDto } from 'src/dto/user.dto';
import { UserMapper } from 'src/mappers/user.mapper';
import { User } from './user.entity';
import { Observable } from 'rxjs';
import { UserDecorator } from '../decorators/user.decorator';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: Partial<User>): Promise<User> {
    return this.usersService.create(createUserDto);
  }

  @Get()
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @Get('profile')
  async getProfile(@Req() request: any): Promise<UserDto> {
    const token = request.headers.authorization?.split(' ')[1];
    console.log('Token:', token);
    if (!token) {
      throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    }
    const user = await this.usersService.findProfile(token);
    console.log('User:', user);
    return UserMapper.mapToUserDto(user);
  }

  @Get('me')
  getMe(@UserDecorator('sub') userId: string): Observable<UserDto> {
    return this.usersService.findProfileByUserId(userId);
  }

  @Patch('update')
  async updateProfile(
    @Req() request: any,
    @Body() updateUserDto: UserDto,
  ): Promise<UserDto> {
    const token = request.headers.authorization?.split(' ')[1];
    if (!token) {
      throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
    }
    const userResponse = await this.usersService.updateProfile(
      token,
      updateUserDto,
    );

    return UserMapper.mapToUserDto(userResponse);
  }

  // Cette route permet de rechercher un utilisateur par son firstname
  @Get('search')
  async searchUserByFirstname(@Query('firstname') firstName: string) {
    if (!firstName) {
      return { message: 'Veuillez fournir un prénom pour la recherche.' };
    }
    const user = await this.usersService.findUserByFirstname(firstName);
    if (!user) {
      return { message: 'Aucun utilisateur trouvé avec ce prénom.' };
    }
    return user;
  }
}
