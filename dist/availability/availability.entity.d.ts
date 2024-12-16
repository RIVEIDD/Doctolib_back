import { Doctor } from '../doctor/doctor.entity';
export declare class Availability {
    id: number;
    doctor: Doctor;
    date: string;
    startTime: string;
    endTime: string;
    isTaken: boolean;
}
