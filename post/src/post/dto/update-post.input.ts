import { IsString, IsUUID } from 'class-validator';

export class CreatePostInput {
  @IsUUID()
  id: string;

  @IsString()
  title: string;

  @IsUUID()
  userId: string;
}
