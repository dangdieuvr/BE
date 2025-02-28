import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';

@Schema()
export class WalletSchema {
  @Prop({ required: true })
  address: string;
  @Prop({ref: 'User'})
  UserId: mongoose.Schema.Types.ObjectId
  @Prop({ required: true })
  balance: number;
  @Prop({ required: true })
  createdAt: Date;
}