import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Availability } from './availability.entity';

@Injectable()
export class AvailabilityService {
  constructor(
    @InjectRepository(Availability)
    private readonly availabilityRepository: Repository<Availability>,
  ) {}

  async createAvailability(availabilityData: Partial<Availability>): Promise<Availability> {
    const availability = this.availabilityRepository.create(availabilityData);
    return this.availabilityRepository.save(availability);
  }

  async getAllAvailabilities(): Promise<Availability[]> {
    return this.availabilityRepository.find();
  }

  async getAvailabilityById(id: number): Promise<Availability> {
    return this.availabilityRepository.findOneBy({ id });
  }

  async updateAvailability(id: number, availabilityData: Partial<Availability>): Promise<Availability> {
    await this.availabilityRepository.update(id, availabilityData);
    return this.getAvailabilityById(id);
  }

  async deleteAvailability(id: number): Promise<void> {
    await this.availabilityRepository.delete(id);
  }
}
