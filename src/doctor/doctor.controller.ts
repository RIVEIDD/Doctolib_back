import { Controller, Get, Post, Param, Body, Put, Delete, Query } from '@nestjs/common';
import { DoctorService } from './doctor.service';
import { Doctor } from './doctor.entity';

@Controller('api/doctors')
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

  @Get()
  async searchDoctors(
    @Query('specialty') specialty: string,
    @Query('city') city: string,
  ) {
    return this.doctorService.searchDoctors(specialty, city);
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

 /* @Get('search')
async searchDoctors(@Query('location') city: string) {
  return this.doctorService.findDoctorsByLocation(city);
}*/

@Get()
findDoctors(
  @Query('city') city: string,
  @Query('specialty') specialty: string,
) {
  const doctors = [
    { id: 1, firstName: 'Chloé', lastName: 'Dupon', city: 'Nantes', specialty: 'Médecin généraliste' },
    { id: 2, firstName: 'Paul', lastName: 'Martin', city: 'Paris', specialty: 'Dermatologue' },
    { id: 3, firstName: 'Sophie', lastName: 'Durand', city: 'Nantes', specialty: 'Pédiatre' },
  ];

  let filteredDoctors = doctors;

  if (city) {
    filteredDoctors = filteredDoctors.filter(doctor => doctor.city.toLowerCase() === city.toLowerCase());
  }

  if (specialty) {
    filteredDoctors = filteredDoctors.filter(doctor => doctor.specialty.toLowerCase() === specialty.toLowerCase());
  }

  return filteredDoctors;
}
}
