import { Controller, Get, Post, Param, Body, Put, Delete, Query } from '@nestjs/common';
import { DoctorService } from './doctor.service';
import { Doctor } from './doctor.entity';

@Controller('doctors')
export class DoctorController {
  constructor(private readonly doctorService: DoctorService) {}

  @Post()
  createDoctor(@Body() doctorData: Partial<Doctor>): Promise<Doctor> {
    return this.doctorService.createDoctor(doctorData);
  }

  @Get()
  getAllDoctors(): Promise<Doctor[]> {
    return this.doctorService.getAllDoctors();
  }

  @Get(':id')
  getDoctorById(@Param('id') id: number): Promise<Doctor> {
    return this.doctorService.getDoctorById(id);
  }

  @Put(':id')
  updateDoctor(
    @Param('id') id: number,
    @Body() doctorData: Partial<Doctor>,
  ): Promise<Doctor> {
    return this.doctorService.updateDoctor(id, doctorData);
  }

  @Delete(':id')
  deleteDoctor(@Param('id') id: number): Promise<void> {
    return this.doctorService.deleteDoctor(id);
  }

 /* @Get('search')
  async searchDoctors(
    @Query('city') city?: string,
    @Query('specialty') specialty?: string
  ): Promise<Doctor[]> {
    return this.doctorService.searchDoctors(city, specialty);
  }*/

  @Get('search')
async searchDoctors(@Query('location') city: string) {
  return this.doctorService.findDoctorsByLocation(city);
}
}
