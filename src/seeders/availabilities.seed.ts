import { DataSource } from 'typeorm';
import { Availability } from '../availability/availability.entity';
import { Doctor } from '../doctor/doctor.entity';

export const seedAvailabilities = async (dataSource: DataSource) => {
  const availabilityRepository = dataSource.getRepository(Availability);
  const doctorRepository = dataSource.getRepository(Doctor);

  // Récupérer tous les médecins
  const doctors = await doctorRepository.find();

  // Fonction pour générer des créneaux horaires de 15 minutes
  const generateSlots = (date: Date, startHour: number, endHour: number) => {
    const slots = [];
    let currentHour = startHour;
    let currentMinute = 0;

    while (currentHour < endHour || (currentHour === endHour && currentMinute === 0)) {
      const startTime = new Date(date);
      startTime.setHours(currentHour, currentMinute);

      const endTime = new Date(startTime);
      endTime.setMinutes(startTime.getMinutes() + 15); // Créneau de 15 minutes

      slots.push({
        startTime,
        endTime,
        isTaken: false, // Créneau non pris
      });

      currentMinute += 15;
      if (currentMinute === 60) {
        currentHour += 1;
        currentMinute = 0;
      }
    }

    return slots;
  };

  // Générer des dates pour 7 jours
  const dates = Array.from({ length: 7 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i);
    return date;
  });

  // Insérer des créneaux horaires pour chaque médecin et chaque jour
  for (const doctor of doctors) {
    for (const date of dates) {
      const slots = generateSlots(date, 9, 18); // Créneaux de 9h00 à 18h00

      for (const slot of slots) {
        const newAvailability = availabilityRepository.create({
          doctor: doctor,
          date: slot.startTime.toISOString().split('T')[0], // Format: YYYY-MM-DD
          startTime: slot.startTime.toTimeString().split(' ')[0], // Format: HH:MM:SS
          endTime: slot.endTime.toTimeString().split(' ')[0], // Format: HH:MM:SS
          isTaken: slot.isTaken,
        });

        await availabilityRepository.save(newAvailability);
      }
    }
  }

  console.log('Availabilities seeded successfully!');
};
