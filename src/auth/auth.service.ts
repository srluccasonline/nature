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
  
}
