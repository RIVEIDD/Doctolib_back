import { Repository } from 'typeorm';
import { Doctor } from './doctor.entity';
export declare class DoctorService {
    private readonly doctorRepository;
    constructor(doctorRepository: Repository<Doctor>);
    createDoctor(doctorData: Partial<Doctor>): Promise<Doctor>;
    getAllDoctors(): Promise<Doctor[]>;
    getDoctorById(id: number): Promise<Doctor>;
    updateDoctor(id: number, doctorData: Partial<Doctor>): Promise<Doctor>;
    deleteDoctor(id: number): Promise<void>;
    searchDoctors(city?: string, specialty?: string): Promise<Doctor[]>;
    findDoctorsByLocation(location: string): Promise<Doctor[]>;
}
