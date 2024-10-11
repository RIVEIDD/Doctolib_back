import { JwtService } from '@nestjs/jwt';
import { UserDto } from 'src/dto/user.dto';
import { UsersService } from 'src/user/users.service';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    validateUser(email: string, password: string): Promise<UserDto | null>;
    login(user: any): Promise<{
        access_token: string;
    }>;
}
