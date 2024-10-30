import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { ApiTags } from '@nestjs/swagger';
import { SignInDto, SignUpDto } from './dto';
import { AuthGuard } from '@nestjs/passport';

@ApiTags('Auth')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('sign-up')
  async signUp(@Body() signUpDto:SignUpDto){
    return await this.authService.signUp(signUpDto);
  }

  @Post('sign-in')
  async signIn(@Body() signInDto:SignInDto){
    return await this.authService.signIn(signInDto);
  }

  @Get('google')
  async googleAuth(){}

  @UseGuards(AuthGuard('google'))
  @Get('/google/callback')
  async googleAuthCallback(@Req() request:any){
    return this.authService.googleAuth(request)
  }
}
