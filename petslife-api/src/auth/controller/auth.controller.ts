import { Body, Controller, Get, Post, UseGuards, Req } from '@nestjs/common';
import { SignInDto, SignUpDto } from '../dto/auth.dto';
import { AuthService } from '../services/auth.service';
import { AuthGuard } from '../auth.guard';
import { jwtPayload } from '../auth.types';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signin')
  async signin(@Body() body: SignInDto) {
    return this.authService.signin(body);
  }

  @Post('signup')
  async signup(@Body() body: SignUpDto) {
    return this.authService.signup(body);
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  profile(@Req() request: Request & { user?: jwtPayload }) {
    return request.user as jwtPayload;
  }
}
