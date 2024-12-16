import { Repository } from 'typeorm';
import { Availability } from './availability.entity';
export declare class AvailabilityService {
    private readonly availabilityRepository;
    constructor(availabilityRepository: Repository<Availability>);
    createAvailability(availabilityData: Partial<Availability>): Promise<Availability>;
    getAllAvailabilities(): Promise<Availability[]>;
    getAvailabilityById(id: number): Promise<Availability>;
    updateAvailability(id: number, availabilityData: Partial<Availability>): Promise<Availability>;
    deleteAvailability(id: number): Promise<void>;
}
