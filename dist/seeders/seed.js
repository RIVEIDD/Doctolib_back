"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const doctors_seed_1 = require("./doctors.seed");
const availabilities_seed_1 = require("./availabilities.seed");
const data_source_1 = require("../database/data-source");
async function runSeeds() {
    const dataSource = await data_source_1.AppDataSource.initialize();
    await (0, doctors_seed_1.seedDoctors)(dataSource);
    await (0, availabilities_seed_1.seedAvailabilities)(dataSource);
    console.log('Seeding completed!');
    await dataSource.destroy();
}
runSeeds().catch((error) => {
    console.error('Error during seeding:', error);
});
//# sourceMappingURL=seed.js.map