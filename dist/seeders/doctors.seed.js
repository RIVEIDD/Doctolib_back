"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedDoctors = void 0;
const doctor_entity_1 = require("../doctor/doctor.entity");
const seedDoctors = async (dataSource) => {
    const doctorRepository = dataSource.getRepository(doctor_entity_1.Doctor);
    await dataSource.query('TRUNCATE TABLE "doctor" CASCADE');
    console.log('All existing doctors and related data have been cleared.');
    const doctors = [
        {
            firstName: 'Chloé',
            lastName: 'Dupon',
            specialty: 'Médecin généraliste',
            address: '2 Boulevard Amiral Courbet',
            city: 'Nantes',
            postalCode: '44000',
            sector: '1',
            profilePictureUrl: 'https://example.com/doctor1.jpg',
        },
        {
            firstName: 'Paul',
            lastName: 'Martin',
            specialty: 'Dermatologue',
            address: '15 Rue des Lilas',
            city: 'Paris',
            postalCode: '75010',
            sector: '2',
            profilePictureUrl: 'https://example.com/doctor2.jpg',
        },
        {
            firstName: 'Sophie',
            lastName: 'Durand',
            specialty: 'Pédiatre',
            address: '30 Rue Saint-Nicolas',
            city: 'Lyon',
            postalCode: '69001',
            sector: '1',
            profilePictureUrl: 'https://example.com/doctor3.jpg',
        },
        {
            firstName: 'Antoine',
            lastName: 'Lemoine',
            specialty: 'Cardiologue',
            address: '10 Rue de la Paix',
            city: 'Marseille',
            postalCode: '13001',
            sector: '3',
            profilePictureUrl: 'https://example.com/doctor4.jpg',
        },
        {
            firstName: 'Isabelle',
            lastName: 'Girard',
            specialty: 'Ophtalmologue',
            address: '5 Avenue des Champs-Élysées',
            city: 'Paris',
            postalCode: '75008',
            sector: '1',
            profilePictureUrl: 'https://example.com/doctor5.jpg',
        },
        {
            firstName: 'Luc',
            lastName: 'Bernard',
            specialty: 'Orthopédiste',
            address: '22 Rue de la République',
            city: 'Lille',
            postalCode: '59000',
            sector: '2',
            profilePictureUrl: 'https://example.com/doctor6.jpg',
        },
        {
            firstName: 'Marie',
            lastName: 'Moreau',
            specialty: 'Médecin généraliste',
            address: '11 Rue de la Gare',
            city: 'Toulouse',
            postalCode: '31000',
            sector: '1',
            profilePictureUrl: 'https://example.com/doctor7.jpg',
        },
        {
            firstName: 'Jean',
            lastName: 'Rousseau',
            specialty: 'Dentiste',
            address: '7 Rue des Bons Enfants',
            city: 'Bordeaux',
            postalCode: '33000',
            sector: '2',
            profilePictureUrl: 'https://example.com/doctor8.jpg',
        },
        {
            firstName: 'Camille',
            lastName: 'Dufresne',
            specialty: 'Gynécologue',
            address: '19 Rue de la Liberté',
            city: 'Nice',
            postalCode: '06000',
            sector: '1',
            profilePictureUrl: 'https://example.com/doctor9.jpg',
        },
        {
            firstName: 'David',
            lastName: 'Vasseur',
            specialty: 'Chirurgien',
            address: '4 Place du Marché',
            city: 'Strasbourg',
            postalCode: '67000',
            sector: '3',
            profilePictureUrl: 'https://example.com/doctor10.jpg',
        },
    ];
    for (const doctor of doctors) {
        const newDoctor = doctorRepository.create(doctor);
        await doctorRepository.save(newDoctor);
    }
    console.log('Doctors seeded successfully!');
};
exports.seedDoctors = seedDoctors;
//# sourceMappingURL=doctors.seed.js.map