import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './users/user.model';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async createUser(username: string, email: string, phoneNo: string, password: string): Promise<User> {
    const newUser = new this.userModel({ username, email, phoneNo, password });
    return await newUser.save();
  }

  async findUserByEmail(email: string): Promise<User | null> {
    return await this.userModel.findOne({ email }).exec();
  }

  async validateUser(username: string, password: string): Promise<User | null> {
    return await this.userModel.findOne({ username, password }).exec();
  }
}
