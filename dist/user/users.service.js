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
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./user.entity");
const typeorm_2 = require("typeorm");
const jwt_1 = require("@nestjs/jwt");
const rxjs_1 = require("rxjs");
let UsersService = class UsersService {
    constructor(usersRepository, jwtService) {
        this.usersRepository = usersRepository;
        this.jwtService = jwtService;
    }
    async create(user) {
        const existingUser = await this.usersRepository.findOne({
            where: { email: user.email },
        });
        if (existingUser) {
            throw new common_1.ConflictException('User already exists');
        }
        const hashedPassword = await bcrypt.hash(user.password, 10);
        const newUser = await this.usersRepository.create({
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
    async findOneByFirstName(firstName) {
        return this.usersRepository.findOne({ where: { firstName } });
    }
    async findOneById(id) {
        console.log('ID:', id);
        return this.usersRepository.findOne({ where: { id } });
    }
    async findProfile(token) {
        const decoded = this.jwtService.decode(token);
        const userEmail = decoded?.email;
        return this.findOneByEmail(userEmail);
    }
    findProfileByUserId(userId) {
        return (0, rxjs_1.from)(this.findOneById(Number(userId))).pipe((0, rxjs_1.map)((user) => this._toUserDto(user)));
    }
    _toUserDto(user) {
        return {
            email: user.email,
            lastName: user.lastName,
            firstName: user.firstName,
            birthDate: user.birthDate
        };
    }
    async updateProfile(token, updateUserDto) {
        const user = await this.findProfile(token);
        Object.assign(user, updateUserDto);
        return this.usersRepository.save(user);
    }
    async findUserByFirstname(firstName) {
        return this.usersRepository.findOne({
            where: { firstName },
        });
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        jwt_1.JwtService])
], UsersService);
//# sourceMappingURL=users.service.js.map