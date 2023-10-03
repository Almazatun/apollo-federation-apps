import { Post } from '@prisma/client';

export interface User {
  id: string;
  posts?: Post[];
}
