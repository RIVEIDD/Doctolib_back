import { AvailabilityService } from './availability.service';
import { Availability } from './availability.entity';
export declare class AvailabilityController {
    private readonly availabilityService;
    constructor(availabilityService: AvailabilityService);
    createAvailability(availabilityData: Partial<Availability>): Promise<Availability>;
    getAllAvailabilities(): Promise<Availability[]>;
    getAvailabilityById(id: number): Promise<Availability>;
    updateAvailability(id: number, availabilityData: Partial<Availability>): Promise<Availability>;
    deleteAvailability(id: number): Promise<void>;
}
