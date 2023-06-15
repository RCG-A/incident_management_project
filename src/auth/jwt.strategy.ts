import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { HttpException, HttpStatus, Inject, Injectable, forwardRef } from '@nestjs/common';
import { jwtConstants } from './constants';
import { PayloadInterface } from './interface/payload.interface';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @Inject(forwardRef(() => UsersService))
    private usersService: UsersService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstants.secret,
    });
  }

  async validate(payload: PayloadInterface) {
    // return { userId: payload.id, username: payload.name };
  
    const {DNI, email} = payload
    const user = await this.usersService.getValidate(DNI,email)
    if (!user) {
      return new HttpException('Incorrect credentials', HttpStatus.NOT_ACCEPTABLE)
    } 
    return payload
  }
}