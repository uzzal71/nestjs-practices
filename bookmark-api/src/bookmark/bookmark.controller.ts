import {
  Controller,
  Delete,
  Get,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { GetUser } from '../auth/decorator';
import { JwtGuard } from '../auth/guard';
import { BookmarkService } from './bookmark.service';

@UseGuards(JwtGuard)
@Controller('bookmarks')
export class BookmarkController {
  constructor(private bookmarkService: BookmarkService) {}

  @Get()
  getBookmarks(@GetUser('id') userId: number) {}

  @Get()
  getBookmarkById(@GetUser('id') userId: number) {}

  @Post()
  createBookmark(@GetUser('id') userId: number) {}

  @Patch()
  editBookmarkByid(@GetUser('id') userId: number) {}

  @Delete()
  deleteBookmarkByid(@GetUser('id') userId: number) {}
}
