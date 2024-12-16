// src/data-source.ts
import { DataSource } from 'typeorm';
import { Doctor } from '../doctor/doctor.entity';  // Remplace par le bon chemin vers ton entité
import { Availability } from '../availability/availability.entity';  // Remplace par le bon chemin vers ton entité

export const AppDataSource = new DataSource({
  type: 'postgres',  // Utilise 'postgres' comme type de base de données
  host: 'localhost',  // Adresse de ton hôte (si tu utilises un conteneur Docker ou un autre hôte, adapte ce paramètre)
  port: 5432,  // Port de PostgreSQL
  username: 'postgres',  // Ton utilisateur PostgreSQL
  password: 'azerty',  // Ton mot de passe PostgreSQL
  database: 'doctolib',  // Le nom de ta base de données
  synchronize: true,  // Attention : Utilise avec précaution en production
  logging: true,
  entities: [Doctor, Availability],  // Les entités que tu utilises dans ton projet
  migrations: [],  // Si tu utilises des migrations, liste-les ici
  subscribers: [],
});
