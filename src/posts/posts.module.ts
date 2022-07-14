import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';

import { FilesModule } from '@/files/files.module';
import { User } from '@/users/users.model';

import { PostsController } from './posts.controller';
import { PostsService } from './posts.service';
import { Post } from './posts.model';

@Module({
  controllers: [PostsController],
  providers: [PostsService],
  imports: [SequelizeModule.forFeature([Post, User]), FilesModule],
})
export class PostsModule {}
