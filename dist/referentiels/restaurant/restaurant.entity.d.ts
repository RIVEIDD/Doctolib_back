import { User } from 'src/user/user.entity';
export declare class Restaurant {
    id: number;
    name: string;
    adresse: string;
    avis: Avis[];
    users: User[];
    createdAt: Date;
    updatedAt: Date;
}
export declare class Avis {
    id: number;
    user: string;
    com: string;
    note: number;
    date: Date;
    restaurant: Restaurant;
}
