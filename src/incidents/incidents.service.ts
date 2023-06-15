import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateIncidentDto } from './dto/create-incident.dto';
import { UpdateIncidentDto } from './dto/update-incident.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Incident } from './entities/incident.entity';
import { Repository } from 'typeorm';

@Injectable()
export class IncidentsService {

  constructor(
    @InjectRepository(Incident) private incidentRepository: Repository<Incident>,
  ){}

  async create(createIncidentDto: CreateIncidentDto) {
    const incidentFound = await this.incidentRepository.findOne({
      where: {
        numTK: createIncidentDto.numTK,
      },
    })

    if (incidentFound) {
      return new HttpException('Incidente existente', HttpStatus.CONFLICT)
    }

    const newIncident = this.incidentRepository.create(createIncidentDto)
    return this.incidentRepository.save(newIncident)
  }

  findAll() {
    return this.incidentRepository.find({
      relations: ['affectedUser', 'categories', 'assignmentGroup']
    });
  }

  async findOne(id: number) {
    const incidentFound = await this.incidentRepository.findOne({
      where: {
        id
      },
      relations: ['affectedUser', 'categories', 'assignmentGroup']
    })

    if (!incidentFound) {
      return new HttpException('incidente no encontrado', HttpStatus.NOT_FOUND)
    }

    return incidentFound;
  }

  async update(id: number, updateIncidentDto: UpdateIncidentDto) {
    const incidentFound = await this.incidentRepository.findOne({
      where: {
        id
        },
        })

    if (!incidentFound) {
      return new HttpException('Incidente no encontrado', HttpStatus.NOT_FOUND)
      }

    const updateIncident = Object.assign(incidentFound, updateIncidentDto)
    return this.incidentRepository.save(updateIncident)
  }

  async remove(id: number) {
    const result = await this.incidentRepository.delete({ id })

    if (result.affected === 0) {
      return new HttpException('Incidente no encontrado', HttpStatus.NOT_FOUND)
    }

    return result;
  }
}
