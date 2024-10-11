import { RestaurantDto } from 'src/dto/restaurant.dto';
import { ReferentielService } from './referentiel.service';
export declare class ReferentielController {
    private referentielService;
    constructor(referentielService: ReferentielService);
    getRestaurants(): Promise<RestaurantDto[]>;
    addRestaurant(restaurantDto: RestaurantDto): Promise<RestaurantDto>;
    addMultipleRestaurants(restaurantDtos: RestaurantDto[]): Promise<RestaurantDto[]>;
}
