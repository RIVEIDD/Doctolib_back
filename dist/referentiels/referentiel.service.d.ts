import { Repository } from 'typeorm';
import { RestaurantDto } from 'src/dto/restaurant.dto';
import { Restaurant } from './restaurant/restaurant.entity';
export declare class ReferentielService {
    private restaurantRepository;
    constructor(restaurantRepository: Repository<Restaurant>);
    getRestaurants(): Promise<Restaurant[]>;
    addRestaurant(restaurantDto: RestaurantDto): Promise<RestaurantDto>;
    addMultipleRestaurants(restaurantDtos: RestaurantDto[]): Promise<RestaurantDto[]>;
}
