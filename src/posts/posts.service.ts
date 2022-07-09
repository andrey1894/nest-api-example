import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { FilesService } from 'src/files/files.service';
import { CreatePostDto } from './dto/create-post.dto';
import { Post } from './posts.model';

@Injectable()
export class PostsService {
  constructor(@InjectModel(Post) private postRepository: typeof Post, private filesService: FilesService) {}

  async createPost(postDto: CreatePostDto, file: any) {
    const image = await this.filesService.createFile(file);
    const post = await this.postRepository.create({ ...postDto, image });
    return post;
  }
}
