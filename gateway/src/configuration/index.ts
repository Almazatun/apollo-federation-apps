import { config } from 'dotenv';

config();

export const configs = {
  base: {
    port: Number(process.env.PORT || '3000'),
  },
  graphQL: {
    user: process.env.GRAPHQL_USER_URL,
    post: process.env.GRAPHQL_POST_URL,
  },
};
