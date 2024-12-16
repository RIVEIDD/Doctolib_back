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
exports.DoctorService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const doctor_entity_1 = require("./doctor.entity");
let DoctorService = class DoctorService {
    constructor(doctorRepository) {
        this.doctorRepository = doctorRepository;
    }
    async createDoctor(doctorData) {
        const doctor = this.doctorRepository.create(doctorData);
        return this.doctorRepository.save(doctor);
    }
    async getAllDoctors() {
        return this.doctorRepository.find();
    }
    async getDoctorById(id) {
        return this.doctorRepository.findOneBy({ id });
    }
    async updateDoctor(id, doctorData) {
        await this.doctorRepository.update(id, doctorData);
        return this.getDoctorById(id);
    }
    async deleteDoctor(id) {
        await this.doctorRepository.delete(id);
    }
    async searchDoctors(city, specialty) {
        const query = this.doctorRepository.createQueryBuilder('doctor');
        if (city) {
            query.andWhere('doctor.city = :city', { city });
        }
        if (specialty) {
            query.andWhere('doctor.specialty = :specialty', { specialty });
        }
        return query.getMany();
    }
    async findDoctorsByLocation(location) {
        if (!isNaN(Number(location))) {
            return this.doctorRepository.find({
                where: { id: parseInt(location, 10) },
            });
        }
        return this.doctorRepository.find({
            where: { city: location },
        });
    }
};
exports.DoctorService = DoctorService;
exports.DoctorService = DoctorService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(doctor_entity_1.Doctor)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], DoctorService);
//# sourceMappingURL=doctor.service.js.map