import { User } from './user.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { UserDto } from 'src/dto/user.dto';
import { Observable } from 'rxjs';
export declare class UsersService {
    private usersRepository;
    private jwtService;
    constructor(usersRepository: Repository<User>, jwtService: JwtService);
    create(user: Partial<User>): Promise<User>;
    findAll(): Promise<User[]>;
    findOneByEmail(email: string): Promise<User>;
    findOneByFirstName(firstName: string): Promise<User>;
    findOneById(id: number): Promise<User>;
    findProfile(token: string): Promise<User>;
    findProfileByUserId(userId: string): Observable<UserDto>;
    private _toUserDto;
    updateProfile(token: string, updateUserDto: UserDto): Promise<User>;
    findUserByFirstname(firstName: string): Promise<User>;
}
