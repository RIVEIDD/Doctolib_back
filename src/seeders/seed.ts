import { DataSource } from 'typeorm';
import { seedDoctors } from './doctors.seed';
import { seedAvailabilities } from './availabilities.seed';
import { AppDataSource } from '../database/data-source'; // Si vous utilisez un fichier de connexion à la base

async function runSeeds() {
  const dataSource = await AppDataSource.initialize();

  await seedDoctors(dataSource);
  await seedAvailabilities(dataSource);

  console.log('Seeding completed!');
  await dataSource.destroy();
}

runSeeds().catch((error) => {
  console.error('Error during seeding:', error);
});
