"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const doctor_entity_1 = require("../doctor/doctor.entity");
const availability_entity_1 = require("../availability/availability.entity");
exports.AppDataSource = new typeorm_1.DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'azerty',
    database: 'doctolib',
    synchronize: true,
    logging: true,
    entities: [doctor_entity_1.Doctor, availability_entity_1.Availability],
    migrations: [],
    subscribers: [],
});
//# sourceMappingURL=data-source.js.map