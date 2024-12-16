import { Controller, Get, Post, Param, Body, Put, Delete } from '@nestjs/common';
import { AvailabilityService } from './availability.service';
import { Availability } from './availability.entity';

@Controller('availabilities')
export class AvailabilityController {
  constructor(private readonly availabilityService: AvailabilityService) {}

  @Post()
  createAvailability(@Body() availabilityData: Partial<Availability>): Promise<Availability> {
    return this.availabilityService.createAvailability(availabilityData);
  }

  @Get()
  getAllAvailabilities(): Promise<Availability[]> {
    return this.availabilityService.getAllAvailabilities();
  }

  @Get(':id')
  getAvailabilityById(@Param('id') id: number): Promise<Availability> {
    return this.availabilityService.getAvailabilityById(id);
  }

  @Put(':id')
  updateAvailability(
    @Param('id') id: number,
    @Body() availabilityData: Partial<Availability>,
  ): Promise<Availability> {
    return this.availabilityService.updateAvailability(id, availabilityData);
  }

  @Delete(':id')
  deleteAvailability(@Param('id') id: number): Promise<void> {
    return this.availabilityService.deleteAvailability(id);
  }
}
