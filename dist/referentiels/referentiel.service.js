"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReferentielService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const restaurant_entity_1 = require("./restaurant/restaurant.entity");
const restaurant_mapper_1 = require("../mappers/restaurant.mapper");
let ReferentielService = class ReferentielService {
    constructor(restaurantRepository) {
        this.restaurantRepository = restaurantRepository;
    }
    async getRestaurants() {
        return this.restaurantRepository.find({ relations: ['avis'] });
    }
    async addRestaurant(restaurantDto) {
        const restaurant = this.restaurantRepository.create(restaurantDto);
        const savedRestaurant = await this.restaurantRepository.save(restaurant);
        return restaurant_mapper_1.RestaurantMapper.mapRestaurantToDto(savedRestaurant);
    }
    async addMultipleRestaurants(restaurantDtos) {
        const restaurants = restaurantDtos.map((restaurantDto) => this.restaurantRepository.create(restaurantDto));
        const savedRestaurants = await this.restaurantRepository.save(restaurants);
        return savedRestaurants.map((restaurant) => restaurant_mapper_1.RestaurantMapper.mapRestaurantToDto(restaurant));
    }
};
exports.ReferentielService = ReferentielService;
exports.ReferentielService = ReferentielService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(restaurant_entity_1.Restaurant)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ReferentielService);
//# sourceMappingURL=referentiel.service.js.map