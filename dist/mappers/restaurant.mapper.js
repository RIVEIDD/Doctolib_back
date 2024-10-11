"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantMapper = void 0;
class RestaurantMapper {
    static mapRestaurantToDto(restaurant) {
        return {
            id: restaurant.id,
            name: restaurant.name,
            adresse: restaurant.adresse,
            note: restaurant.avis.length > 0
                ? Math.round(restaurant.avis.reduce((acc, avis) => acc + avis.note, 0) /
                    restaurant.avis.length)
                : 0,
            avis: restaurant.avis.map((avis) => ({
                user: avis.user,
                date: avis.date,
                com: avis.com,
                note: avis.note,
            })),
        };
    }
}
exports.RestaurantMapper = RestaurantMapper;
//# sourceMappingURL=restaurant.mapper.js.map