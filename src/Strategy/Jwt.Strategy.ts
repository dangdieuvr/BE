import { Injectable } from '@nestjs/common';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy,'jwt'){
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey:"123",
    });
  }
  async validate(payload: any) {
    return { address: payload.address }; // Dữ liệu giải mã từ token
  }
}