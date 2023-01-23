import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  handleRequest(err, user) {
    if (err || !user) {
      throw new UnauthorizedException('Debe de iniciar sesión.', {
        cause: new Error(),
        description: 'No autorizado',
      });
    }
    return user;
  }
}
