import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateAuthDto } from './dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto';
import { Auth, AuthDocuments } from './entities/auth.entity';

@Injectable()
export class AuthService {

  constructor(@InjectModel(Auth.name) private authModule: Model<AuthDocuments>) { }

  create(createAuthDto: CreateAuthDto) {
    const user = new this.authModule(createAuthDto)
    return user.save()
  }

  findAll() {
    return this.authModule.find()
  }

  findOne(id: string) {
    return this.authModule.findById(id)
  }

  update(id: string, updateAuthDto: UpdateAuthDto) {
    return this.authModule.findByIdAndUpdate(
      {
        _id: id
      },
      {
        $set: UpdateAuthDto,
      },
      {
        new: true
      }
    )
  }

  remove(id: string) {
    return this.authModule.deleteOne({
      _id: id
    }).exec()
  }

  findByEmail(email: string) {
    const findEmail = this.authModule.findOne({ email: email })
    console.log(findEmail)
    return findEmail
  }

  generateOTP(): number {
    const minNumber = 100000
    const maxNumber = 999999
    const otp = Math.floor(Math.random() * (maxNumber - minNumber + 1) + minNumber)
    return otp
  }

  verifyOTP(email: string, id: string) {
    const emailCreated = this.findByEmail(email)

    if (emailCreated) {
      this.authModule.findById(id){}
    }

  }

  authenticateOTP() {

  }

}
