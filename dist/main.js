"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const dotenv = require("dotenv");
const typeorm_1 = require("typeorm");
const doctors_seed_1 = require("./seeders/doctors.seed");
const availabilities_seed_1 = require("./seeders/availabilities.seed");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: 'http://localhost:4200',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        credentials: true,
    });
    const dataSource = app.get(typeorm_1.DataSource);
    await (0, doctors_seed_1.seedDoctors)(dataSource);
    await (0, availabilities_seed_1.seedAvailabilities)(dataSource);
    await app.listen(3000);
}
bootstrap();
dotenv.config();
//# sourceMappingURL=main.js.map