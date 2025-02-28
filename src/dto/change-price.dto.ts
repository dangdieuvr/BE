import { IsNotEmpty, IsString, IsNumberString, IsNumber } from 'class-validator';

export class ChangePriceDto {
  @IsNotEmpty()
  @IsNumber() // Vì tokenId trên blockchain là string
  tokenId: number;

  @IsNotEmpty()
  @IsNumberString() // Hạn chế lỗi kiểu dữ liệu
  price: string;
}
