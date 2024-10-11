import { Restaurant } from 'src/referentiels/restaurant/restaurant.entity';
export declare class User {
    id: number;
    phone_number: string;
    identity: string;
    firstName: string;
    lastName: string;
    birthday: string;
    email: string;
    password: string;
    profilePicture: string;
    favoriteRestaurants: Restaurant[];
}
