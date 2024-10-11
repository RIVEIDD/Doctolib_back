export declare class RestaurantDto {
    id: number;
    name: string;
    adresse: string;
    note: number;
    avis: AvisDto[];
}
export declare class AvisDto {
    user: string;
    date: Date;
    com: string;
    note: number;
}
