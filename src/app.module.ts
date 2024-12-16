import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';

import { User } from './user/user.entity';
import { UsersModule } from './user/users.module';
import { AuthModule } from './auth/auth.module';
import { Doctor } from './doctor/doctor.entity';
import { Availability } from './availability/availability.entity';
import { AvailabilityModule } from './availability/availability.module';
import { DoctorModule } from './doctor/doctor.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'azerty',
      database: 'doctolib',
      entities: [User,Doctor,Availability],
      synchronize: true,
    }),
    AuthModule,
    UsersModule,
    DoctorModule,
    AvailabilityModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
