"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserMapper = void 0;
class UserMapper {
    static mapToUserDto(user) {
        const userDto = {
            firstName: user.firstName ?? '',
            lastName: user.lastName ?? '',
            email: user.email ?? '',
            birthDate: user.birthDate ?? '',
        };
        return userDto;
    }
}
exports.UserMapper = UserMapper;
//# sourceMappingURL=user.mapper.js.map