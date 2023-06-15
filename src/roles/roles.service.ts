import {  HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Role } from './entities/role.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RolesService {

  constructor(
    @InjectRepository(Role) private roleRepository: Repository<Role>,
  ) { }


  async create(createRoleDto: CreateRoleDto) {

    const roleFound = await this.roleRepository.findOne({
      where: {
        name: createRoleDto.name
      }
    })

    if (roleFound) {
      return new HttpException('El rol ya  existe', HttpStatus.CONFLICT)
    }

    const newRole = this.roleRepository.create(createRoleDto)
    return this.roleRepository.save(newRole)

  }
////////////////////////


findAll() {
  return this.roleRepository.find();
}

async findOne(id: number) {
  const roleFound = await this.roleRepository.findOne({
    where: {
      id
    },
  })

  if (!roleFound) {
    return new HttpException('Creacion de rol erronea', HttpStatus.NOT_FOUND)
  }

  return roleFound
}

async update(id: number, updateRoleDto: UpdateRoleDto) {
  const roleFound = await this.roleRepository.findOne({
    where: {
      id
    }
  })

  if (!roleFound) {
    return new HttpException('rol no encontrada', HttpStatus.NOT_FOUND)
  }

  const updateRole = Object.assign(roleFound, updateRoleDto)
  return this.roleRepository.save(updateRole)

}


}
