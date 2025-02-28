import { Controller, Get, Query } from '@nestjs/common';
import { BlockchainService } from './blockchain.service';

@Controller('blockchain')
export class BlockchainController {
  constructor(private readonly blockchainService: BlockchainService) {}

  @Get('balance')
  async getBalance(@Query('address') address: string) {
    return this.blockchainService.getEthBalance(address);
  }

  @Get('tokens')
  async getTokens(@Query('address') address: string) {
    return this.blockchainService.getTokenBalances(address);
  }

  @Get('nfts')
  async getNFTs(@Query('address') address: string) {
    return this.blockchainService.getNFTs(address);
  }
}
