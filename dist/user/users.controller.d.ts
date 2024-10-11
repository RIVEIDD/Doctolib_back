import { UsersService } from './users.service';
import { User } from './user.entity';
import { UserDto } from 'src/dto/user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: Partial<User>): Promise<User>;
    findAll(): Promise<User[]>;
    getProfile(request: any): Promise<UserDto>;
    updateProfile(request: any, updateUserDto: UserDto): Promise<UserDto>;
}
