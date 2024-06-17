import { Controller, Post, Body, Res, HttpStatus, NotFoundException } from '@nestjs/common';
import { UsersService } from 'app.service'; // Adjust the path as per your folder structure
import { Response } from 'express';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // Your controller methods here
}
