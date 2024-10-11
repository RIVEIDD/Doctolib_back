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
exports.ReferentielController = void 0;
const common_1 = require("@nestjs/common");
const restaurant_dto_1 = require("../dto/restaurant.dto");
const referentiel_service_1 = require("./referentiel.service");
const restaurant_mapper_1 = require("../mappers/restaurant.mapper");
let ReferentielController = class ReferentielController {
    constructor(referentielService) {
        this.referentielService = referentielService;
    }
    async getRestaurants() {
        const restaurants = await this.referentielService.getRestaurants();
        return restaurants.map((restaurant) => restaurant_mapper_1.RestaurantMapper.mapRestaurantToDto(restaurant));
    }
    async addRestaurant(restaurantDto) {
        return this.referentielService.addRestaurant(restaurantDto);
    }
    async addMultipleRestaurants(restaurantDtos) {
        return this.referentielService.addMultipleRestaurants(restaurantDtos);
    }
};
exports.ReferentielController = ReferentielController;
__decorate([
    (0, common_1.Get)('restaurants'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ReferentielController.prototype, "getRestaurants", null);
__decorate([
    (0, common_1.Post)('restaurants'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [restaurant_dto_1.RestaurantDto]),
    __metadata("design:returntype", Promise)
], ReferentielController.prototype, "addRestaurant", null);
__decorate([
    (0, common_1.Post)('restaurants/bulk'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], ReferentielController.prototype, "addMultipleRestaurants", null);
exports.ReferentielController = ReferentielController = __decorate([
    (0, common_1.Controller)('referentiel'),
    __metadata("design:paramtypes", [referentiel_service_1.ReferentielService])
], ReferentielController);
//# sourceMappingURL=referentiel.controller.js.map