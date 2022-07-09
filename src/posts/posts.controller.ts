import { Body, Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreatePostDto } from './dto/create-post.dto';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {}

  @ApiOperation({ summary: 'Create post' })
  @ApiResponse({ status: 200, type: Post })
  @UseInterceptors(FileInterceptor('image'))
  @Post()
  createPost(@Body() postDto: CreatePostDto, @UploadedFile() image) {
    return this.postsService.createPost(postDto, image);
  }
}
