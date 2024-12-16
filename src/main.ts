import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { DataSource } from 'typeorm';
import { seedDoctors } from './seeders/doctors.seed';
import { seedAvailabilities } from './seeders/availabilities.seed';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: 'http://localhost:4200', // Origine de l'application Angular
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Méthodes autorisées
    credentials: true, // Cookies ou autorisations HTTP
  });

  const dataSource = app.get(DataSource);

  // Exécution des seeders
  await seedDoctors(dataSource);
  await seedAvailabilities(dataSource);

  await app.listen(3000);
}
bootstrap();
dotenv.config();



