import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ethers } from 'ethers';

@Injectable()
export class AuthService {
  private nonces = new Map<string, string>();
  constructor(private jwtService: JwtService) {}

  async requestNonce(address: string): Promise<string> {
    const nonce = Math.random().toString(36).substring(2);
    this.nonces.set(address, nonce);
    return nonce;
  }
  async verifySignature(address: string, signature: string): Promise<string> {
    const nonce = this.nonces.get(address);
    if (!nonce) throw new Error('Nonce not found');

    const recoveredAddress = ethers.verifyMessage(nonce, signature);
    if (recoveredAddress.toLowerCase() !== address.toLowerCase()) {
      throw new Error('Invalid signature');
    }

    const token = this.jwtService.sign({ address });

    this.nonces.delete(address);
    return token;
  }


}
