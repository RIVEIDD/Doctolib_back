import { User } from './user.entity';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { UserDto } from 'src/dto/user.dto';
import { Restaurant } from 'src/referentiels/restaurant/restaurant.entity';
export declare class UsersService {
    private usersRepository;
    private restaurantRepository;
    private jwtService;
    constructor(usersRepository: Repository<User>, restaurantRepository: Repository<Restaurant>, jwtService: JwtService);
    create(user: Partial<User>): Promise<User>;
    findAll(): Promise<User[]>;
    findOneByEmail(email: string): Promise<User | undefined>;
    findById(id: number): Promise<User>;
    findProfile(token: string): Promise<User>;
    updateProfile(token: string, updateUserDto: UserDto): Promise<User>;
}
