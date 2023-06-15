import { Injectable, HttpException, HttpStatus, Inject, forwardRef } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from './dto/update-user.dto';
import { hash } from "bcrypt";

@Injectable()
export class UsersService {

  constructor(
      @InjectRepository(User) private userRepository: Repository<User>
  ) { }

  async createUser(user: CreateUserDto) {

      const userFound = await this.userRepository.findOne({
          where: {
              DNI: user.DNI
          }
      })

      if (userFound) {
          return new HttpException('El usuario existe', HttpStatus.CONFLICT)
      }

      const { password } = user
      const plainToHash = await hash(password, 10)

      user = { ...user, password: plainToHash }

      const newUser = this.userRepository.create(user)
      return this.userRepository.save(newUser)
  }

  getUsers() {
      return this.userRepository.find({
          relations: ['role','assignmentGroup']
      })
  }

  async getUser(id: number) {
      const userFound = await this.userRepository.findOne({
          where: {
              id
          },
          relations: ['role','assignmentGroup']
      })

      if (!userFound) {
          return new HttpException('Usuario no encontrado', HttpStatus.NOT_FOUND)
      }

      return userFound;

  }

  async deleteUser(id: number) {

      const datosUser = await this.userRepository.findOne({
          where: {
              id
          },
      })

      const result = await this.userRepository.delete({ id })

      if (result.affected === 0) {
          return new HttpException('Usuario no encontrado', HttpStatus.NOT_FOUND)
      }

      return [result];
  }

  async updateUser(id: number, user: UpdateUserDto) {
      const userFound = await this.userRepository.findOne({
          where: {
              id
          }
      })

      if (!userFound) {
          return new HttpException('Usuario no encontrado', HttpStatus.NOT_FOUND)
      }

      const updateUser = Object.assign(userFound, user)
      return this.userRepository.save(updateUser)
  }


  async userFound(username: string) {
      const userFound = await this.userRepository.findOne({
          where: [
              {DNI: username},
              {email: username}
          ]
      })
      return userFound;

  }

  async registerUser(user: CreateUserDto) {

      const userFound = await this.userRepository.findOne({
          where: {
              DNI: user.DNI
          }
      })

      if (userFound) {
          return new HttpException('El usuario existe', HttpStatus.CONFLICT)
      }

      const newUser = this.userRepository.create(user)
      return this.userRepository.save(newUser)
  }

  async getValidate(email: string, DNI: string) {
      const userFound = await this.userRepository.findOne({
          where: {
              email,
              DNI
          }
      })
      return userFound;
  }

}
