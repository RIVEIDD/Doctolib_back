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
exports.UsersService = void 0;
const bcrypt = require("bcrypt");
const user_entity_1 = require("./user.entity");
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const jwt_1 = require("@nestjs/jwt");
const restaurant_entity_1 = require("../referentiels/restaurant/restaurant.entity");
let UsersService = class UsersService {
    constructor(usersRepository, restaurantRepository, jwtService) {
        this.usersRepository = usersRepository;
        this.restaurantRepository = restaurantRepository;
        this.jwtService = jwtService;
    }
    async create(user) {
        const existingUser = await this.usersRepository.findOne({
            where: { email: user.email },
        });
        if (existingUser) {
            throw new common_1.ConflictException('Un utilisateur avec cet email existe déjà');
        }
        const hashedPassword = await bcrypt.hash(user.password, 10);
        const newUser = this.usersRepository.create({
            ...user,
            password: hashedPassword,
        });
        return this.usersRepository.save(newUser);
    }
    findAll() {
        return this.usersRepository.find();
    }
    async findOneByEmail(email) {
        return this.usersRepository.findOne({ where: { email } });
    }
    async findById(id) {
        return this.usersRepository.findOne({
            where: { id },
            relations: ['favoriteRestaurants', 'favoriteRestaurants.avis'],
        });
    }
    async findProfile(token) {
        const decoded = this.jwtService.decode(token);
        const userId = decoded?.sub;
        return this.findById(userId);
    }
    async updateProfile(token, updateUserDto) {
        const user = await this.findProfile(token);
        if (updateUserDto.favoriteRestaurants) {
            const restaurantIds = updateUserDto.favoriteRestaurants.map((restaurant) => restaurant.id);
            const existingRestaurants = await this.restaurantRepository.findByIds(restaurantIds);
            user.favoriteRestaurants = existingRestaurants;
        }
        Object.assign(user, updateUserDto);
        return await this.usersRepository.save(user);
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(user_entity_1.User)),
    __param(1, (0, typeorm_2.InjectRepository)(restaurant_entity_1.Restaurant)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        typeorm_1.Repository,
        jwt_1.JwtService])
], UsersService);
//# sourceMappingURL=users.service.js.map