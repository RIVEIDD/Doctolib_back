import { RestaurantDto } from 'src/dto/restaurant.dto';
import { Restaurant } from 'src/referentiels/restaurant/restaurant.entity';
export declare class RestaurantMapper {
    static mapRestaurantToDto(restaurant: Restaurant): RestaurantDto;
}
