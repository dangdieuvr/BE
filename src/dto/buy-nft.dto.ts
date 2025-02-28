import { IsString, IsNotEmpty, IsOptional, IsNumber } from 'class-validator';

export class BuyNftDto {
  @IsNotEmpty()
  @IsNumber()
  tokenId: number;

  @IsNotEmpty()
  @IsString()
  buyer: string;
}