import { IsString, IsUUID } from 'class-validator';

export class CreatePostDto {
  @IsUUID()
  id: string;

  @IsString()
  title: string;

  @IsUUID()
  userId: string;
}
