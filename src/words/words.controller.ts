import { Controller, Get, HttpCode, Post } from '@nestjs/common';

@Controller('words')
export class WordsController {
  @Get('list')
  findAll(): string {
    return 'This actions returns all words';
  }

  @Post('create')
  @HttpCode(204)
  create(): string {
    return 'This actions adds new words';
  }
}
