import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Doctor } from './doctor.entity';

@Injectable()
export class DoctorService {
  constructor(
    @InjectRepository(Doctor)
    private readonly doctorRepository: Repository<Doctor>,
  ) {}

  async createDoctor(doctorData: Partial<Doctor>): Promise<Doctor> {
    const doctor = this.doctorRepository.create(doctorData);
    return this.doctorRepository.save(doctor);
  }

  async getAllDoctors(): Promise<Doctor[]> {
    return this.doctorRepository.find();
  }

  async getDoctorById(id: number): Promise<Doctor> {
    return this.doctorRepository.findOneBy({ id });
  }

  async updateDoctor(id: number, doctorData: Partial<Doctor>): Promise<Doctor> {
    await this.doctorRepository.update(id, doctorData);
    return this.getDoctorById(id);
  }

  async deleteDoctor(id: number): Promise<void> {
    await this.doctorRepository.delete(id);
  }

  async searchDoctors(city?: string, specialty?: string): Promise<Doctor[]> {
    const query = this.doctorRepository.createQueryBuilder('doctor');

    if (city) {
      query.andWhere('doctor.city = :city', { city });
    }
    if (specialty) {
      query.andWhere('doctor.specialty = :specialty', { specialty });
    }

    return query.getMany();
  }

  async findDoctorsByLocation(location: string) {
    if (!isNaN(Number(location))) {
      // Si "location" est un nombre, le convertir en entier
      return this.doctorRepository.find({
        where: { id: parseInt(location, 10) },
      });
    }
  
    // Sinon, chercher par nom ou localisation
    return this.doctorRepository.find({
      where: { city: location },
    });
  }
}
