import { UserDto } from 'src/dto/user.dto';
import { User } from 'src/user/user.entity';
export declare class UserMapper {
    static mapToUserDto(user: User): UserDto;
}
