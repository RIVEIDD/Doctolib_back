import { AuthService } from './auth.service';
import { UserDto } from 'src/dto/user.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(body: any): Promise<{
        message: string;
        user: UserDto;
        token: {
            access_token: string;
        };
    }>;
    log(body: any): Promise<{
        user: UserDto;
        token: {
            access_token: string;
        };
    }>;
}
