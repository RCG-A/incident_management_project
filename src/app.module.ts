import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AssignmentGroupModule } from './assignment-group/assignment-group.module';
import { UsersModule } from './users/users.module';
import { IncidentsModule } from './incidents/incidents.module';
import { CategoriesModule } from './categories/categories.module';
import { Subcategories1Module } from './subcategories1/subcategories1.module';
import { Subcategories2Module } from './subcategories2/subcategories2.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthModule } from './auth/auth.module';
import { RolesModule } from './roles/roles.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    // type: 'mariadb',
    // host: 'containers-us-west-207.railway.app',
    // port: 6030,
    // username: 'root',
    // password: 'ttnJ0pYrBtndd9MDiM4G',
    // database: 'railway',
    // autoLoadEntities: true,    
    // synchronize: true
    type: 'mariadb',
    host: 'localhost',
    port: 3306,
    username: 'admin',
    password: 'Alonso959739006',
    database: 'incidentmp',
    autoLoadEntities: true,
    synchronize: true
  }),AssignmentGroupModule, UsersModule, IncidentsModule, CategoriesModule, Subcategories1Module, Subcategories2Module, AuthModule, RolesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
