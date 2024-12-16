import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Doctor } from '../doctor/doctor.entity';

@Entity()
export class Availability {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Doctor)
  @JoinColumn({ name: 'doctorId' })
  doctor: Doctor;

  @Column()
  date: string; // Format: YYYY-MM-DD

  @Column()
  startTime: string; // Format: HH:MM:SS

  @Column()
  endTime: string; // Format: HH:MM:SS

  @Column()
  isTaken: boolean;
}
