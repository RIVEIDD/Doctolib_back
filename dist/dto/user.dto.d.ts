import { RestaurantDto } from './restaurant.dto';
export declare class UserDto {
    firstName: string;
    lastName: string;
    email: string;
    profilePicture: string;
    favoriteRestaurants: RestaurantDto[];
}
export declare class UserRequest {
    firstName: string;
    lastName: string;
    email: string;
    profilePicture: string;
    favoriteRestaurantsId: number[];
}
export declare class CreateUserDto {
    firstName: string;
    lastName: string;
    email: string;
}
