"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserMapper = void 0;
const restaurant_mapper_1 = require("./restaurant.mapper");
class UserMapper {
    static mapToUserDto(user) {
        const userDto = {
            firstName: user.firstName ?? '',
            lastName: user.lastName ?? '',
            email: user.email ?? '',
            profilePicture: user.profilePicture ?? '',
            favoriteRestaurants: [],
        };
        if (user.favoriteRestaurants) {
            user.favoriteRestaurants.forEach((restaurant) => {
                userDto.favoriteRestaurants.push(restaurant_mapper_1.RestaurantMapper.mapRestaurantToDto(restaurant));
            });
        }
        return userDto;
    }
}
exports.UserMapper = UserMapper;
//# sourceMappingURL=user.mapper.js.map