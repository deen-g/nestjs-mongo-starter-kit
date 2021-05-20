import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import keys from './config/kes';

@Module({
  imports: [
    UsersModule,
    MongooseModule.forRoot(keys.mongoURI, { useFindAndModify: false }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
