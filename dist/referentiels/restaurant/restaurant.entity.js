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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Avis = exports.Restaurant = void 0;
const user_entity_1 = require("../../user/user.entity");
const typeorm_1 = require("typeorm");
let Restaurant = class Restaurant {
};
exports.Restaurant = Restaurant;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Restaurant.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], Restaurant.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 200 }),
    __metadata("design:type", String)
], Restaurant.prototype, "adresse", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Avis, (avis) => avis.restaurant, { cascade: true }),
    __metadata("design:type", Array)
], Restaurant.prototype, "avis", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => user_entity_1.User, (user) => user.favoriteRestaurants),
    __metadata("design:type", Array)
], Restaurant.prototype, "users", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Restaurant.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)(),
    __metadata("design:type", Date)
], Restaurant.prototype, "updatedAt", void 0);
exports.Restaurant = Restaurant = __decorate([
    (0, typeorm_1.Entity)('restaurants')
], Restaurant);
let Avis = class Avis {
};
exports.Avis = Avis;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Avis.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ length: 100 }),
    __metadata("design:type", String)
], Avis.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], Avis.prototype, "com", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', default: 0 }),
    __metadata("design:type", Number)
], Avis.prototype, "note", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Date)
], Avis.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Restaurant, (restaurant) => restaurant.avis),
    __metadata("design:type", Restaurant)
], Avis.prototype, "restaurant", void 0);
exports.Avis = Avis = __decorate([
    (0, typeorm_1.Entity)('avis')
], Avis);
//# sourceMappingURL=restaurant.entity.js.map