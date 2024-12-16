import { DoctorService } from './doctor.service';
import { Doctor } from './doctor.entity';
export declare class DoctorController {
    private readonly doctorService;
    constructor(doctorService: DoctorService);
    createDoctor(doctorData: Partial<Doctor>): Promise<Doctor>;
    getAllDoctors(): Promise<Doctor[]>;
    getDoctorById(id: number): Promise<Doctor>;
    updateDoctor(id: number, doctorData: Partial<Doctor>): Promise<Doctor>;
    deleteDoctor(id: number): Promise<void>;
    searchDoctors(city: string): Promise<Doctor[]>;
}
