import { DoctorService } from './doctor.service';
import { Doctor } from './doctor.entity';
export declare class DoctorController {
    private readonly doctorService;
    constructor(doctorService: DoctorService);
    createDoctor(doctorData: Partial<Doctor>): Promise<Doctor>;
    getAllDoctors(): Promise<Doctor[]>;
    searchDoctors(specialty: string, city: string): Promise<Doctor[]>;
    getDoctorById(id: number): Promise<Doctor>;
    updateDoctor(id: number, doctorData: Partial<Doctor>): Promise<Doctor>;
    deleteDoctor(id: number): Promise<void>;
    findDoctors(city: string, specialty: string): {
        id: number;
        firstName: string;
        lastName: string;
        city: string;
        specialty: string;
    }[];
}
