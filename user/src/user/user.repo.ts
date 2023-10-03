import { Injectable } from '@nestjs/common';
import { Prisma, User } from '@prisma/client';

import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserRepo {
  constructor(private prisma: PrismaService) {}

  public list(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  public get(getUserInput: Prisma.UserWhereUniqueInput): Promise<null | User> {
    return this.prisma.user.findUnique({ where: getUserInput });
  }

  public getByEmail(getUserInput: Prisma.UserWhereInput): Promise<null | User> {
    return this.prisma.user.findFirst({ where: getUserInput });
  }

  public save(createUserInput: Prisma.UserCreateInput): Promise<User> {
    return this.prisma.user.create({ data: { ...createUserInput } });
  }
}
