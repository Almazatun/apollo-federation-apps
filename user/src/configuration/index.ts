import { config } from 'dotenv';

config();

export const configs = {
  base: {
    port: Number(process.env.PORT || '3000'),
  },
};
