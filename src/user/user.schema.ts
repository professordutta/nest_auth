import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { ObjectId } from 'mongodb';

@Schema()
export class User {
  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  password: string;

  @Prop({ required: true })
  _id: ObjectId;
}

export type UserDocument = User & Document;

export const UserSchema = SchemaFactory.createForClass(User);