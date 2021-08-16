import { Controller, Get, Post, Put, Delete, Body, Req, Res } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { Request, Response } from '@nestjs/common';

@Controller('items')
export class ItemsController {
    @Get()
    findAll(@Req() req: Request, @Res() res: Response): string {
        return 'Get all items'
    }

    @Post()
    create(@Body() createItemDto: CreateItemDto): string {
        return `Name: ${createItemDto.name}, Desc: ${createItemDto.description}`
    }
}
