import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RequestNonceDto } from '../dto/RequestNonceDto';
import { JwtAuthGuard } from '../Guard/Jwt.Guard';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('nonce')
  async getNonce(@Body() requestNonceDto: RequestNonceDto): Promise<{ nonce: string }> {
    const nonce = await this.authService.requestNonce(requestNonceDto.address);
    return { nonce };
  }

  @Post('verify-signature')
  async verifySignature(@Body() body :{ address: string; signature: string }) {
    return await this.authService.verifySignature(body.address, body.signature);
  }

  @Get('profile')
  @UseGuards(JwtAuthGuard)
  async getProfile(@Req() req) {
    console.log("🔍 Full req.user:", req.user);  // Kiểm tra dữ liệu JWT
    return { address: req.user?.address || "Không tìm thấy" };
  }
}