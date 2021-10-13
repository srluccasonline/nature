import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AuthDocuments = Auth & Document;

@Schema()
export class Auth {
    @Prop()
    email: string;

    @Prop()
    fullName: string;

    @Prop()
    password: string;

    @Prop()
    phoneNumber: number;

    @Prop()
    city: string;

    @Prop()
    address: string;

    @Prop()
    addressNumber: number;

    @Prop()
    district: string;

    @Prop()
    complement: string;
}

export const AuthSchema = SchemaFactory.createForClass(Auth);