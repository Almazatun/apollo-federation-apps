import { IsString, IsUUID } from 'class-validator';

export class CreatePostInput {
  @IsString()
  title: string;

  @IsUUID()
  userId: string;
}
