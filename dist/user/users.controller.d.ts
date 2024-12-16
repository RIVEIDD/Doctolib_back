import { UsersService } from './users.service';
import { UserDto } from 'src/dto/user.dto';
import { User } from './user.entity';
import { Observable } from 'rxjs';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    create(createUserDto: Partial<User>): Promise<User>;
    findAll(): Promise<User[]>;
    getProfile(request: any): Promise<UserDto>;
    getMe(userId: string): Observable<UserDto>;
    updateProfile(request: any, updateUserDto: UserDto): Promise<UserDto>;
    searchUserByFirstname(firstName: string): Promise<User | {
        message: string;
    }>;
}
