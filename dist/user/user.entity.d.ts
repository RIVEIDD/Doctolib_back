import { Restaurant } from 'src/referentiels/restaurant/restaurant.entity';
export declare class User {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    password: string;
    profilePicture: string;
    favoriteRestaurants: Restaurant[];
}
