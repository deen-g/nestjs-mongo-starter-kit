import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './interfaces/user.interface';

@Injectable()
export class UsersService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async findAll(): Promise<User[]> {
    return this.userModel.find();
  }

  async findOne(id: string): Promise<User> {
    return this.userModel.findOne({ _id: id });
  }

  async create(User: User): Promise<User> {
    const newUser = new this.userModel(User);
    return await newUser.save();
  }

  async delete(id: string): Promise<User> {
    return this.userModel.findByIdAndRemove(id);
  }

  async update(User: User, id: string): Promise<User> {
    return this.userModel.findByIdAndUpdate(id, User, { new: true });
  }
}
