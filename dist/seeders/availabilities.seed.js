"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedAvailabilities = void 0;
const availability_entity_1 = require("../availability/availability.entity");
const doctor_entity_1 = require("../doctor/doctor.entity");
const seedAvailabilities = async (dataSource) => {
    const availabilityRepository = dataSource.getRepository(availability_entity_1.Availability);
    const doctorRepository = dataSource.getRepository(doctor_entity_1.Doctor);
    const doctors = await doctorRepository.find();
    const generateSlots = (date, startHour, endHour) => {
        const slots = [];
        let currentHour = startHour;
        let currentMinute = 0;
        while (currentHour < endHour || (currentHour === endHour && currentMinute === 0)) {
            const startTime = new Date(date);
            startTime.setHours(currentHour, currentMinute);
            const endTime = new Date(startTime);
            endTime.setMinutes(startTime.getMinutes() + 15);
            slots.push({
                startTime,
                endTime,
                isTaken: false,
            });
            currentMinute += 15;
            if (currentMinute === 60) {
                currentHour += 1;
                currentMinute = 0;
            }
        }
        return slots;
    };
    const dates = Array.from({ length: 7 }, (_, i) => {
        const date = new Date();
        date.setDate(date.getDate() + i);
        return date;
    });
    for (const doctor of doctors) {
        for (const date of dates) {
            const slots = generateSlots(date, 9, 18);
            for (const slot of slots) {
                const newAvailability = availabilityRepository.create({
                    doctor: doctor,
                    date: slot.startTime.toISOString().split('T')[0],
                    startTime: slot.startTime.toTimeString().split(' ')[0],
                    endTime: slot.endTime.toTimeString().split(' ')[0],
                    isTaken: slot.isTaken,
                });
                await availabilityRepository.save(newAvailability);
            }
        }
    }
    console.log('Availabilities seeded successfully!');
};
exports.seedAvailabilities = seedAvailabilities;
//# sourceMappingURL=availabilities.seed.js.map