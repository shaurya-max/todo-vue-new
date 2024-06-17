import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersController } from './users/users.controller'; // Corrected path
import { UsersService } from './users/users.service'; // Corrected path
import { UserSchema } from './users/user.model'; // Adjusted path if necessary

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/nestjs_vue'),
    MongooseModule.forFeature([{ name: 'User', schema: UserSchema }]),
  ],
  controllers: [UsersController],
  providers: [UsersService],
})
export class AppModule {}
