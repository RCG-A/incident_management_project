import { HttpException, HttpStatus, Inject, Injectable, forwardRef } from '@nestjs/common';
import { LoginAuthDto } from './dto/login-auth.dto';
import { RegisterAuthDto } from './dto/register-auth.dto';
// import { InjectRepository } from '@nestjs/typeorm';
// import { Auth } from './entities/auth.entity';
// import { Repository } from 'typeorm';
import { UsersService } from 'src/users/users.service';
import { hash, compare } from "bcrypt";
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

  constructor(
    // @InjectRepository(Auth) private authRepository: Repository<Auth>,
    @Inject(forwardRef(() => UsersService))
    private usersService: UsersService,
    private jwtService: JwtService
  ) { }

  // async registerUser(registerAuthDto: RegisterAuthDto) {
  //   const { password } = registerAuthDto;
  //   const plainToHash = await hash(password, 10)

  //   registerAuthDto = { ...registerAuthDto, password: plainToHash }
  //   return this.usersService.registerUser(registerAuthDto)
  // }

  async loginUser(loginAuthDto: LoginAuthDto) {
    const { username, password } = loginAuthDto

    const userFound = await this.usersService.userFound(username)
    if (!userFound) {
      return new HttpException('Usuario no encontrado', HttpStatus.NOT_FOUND)
    }

    const checkPassword = await compare(password, userFound.password)

    if (!checkPassword) {
      return new HttpException('Contraseña incorrecta', HttpStatus.UNAUTHORIZED)
    }

    const payload = {id: userFound.id, name: userFound.name}
    const token = await this.jwtService.sign(payload)

    const data = {
      user: userFound,
      token
    }

    return data;
  }

}
