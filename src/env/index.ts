import zod from 'zod';

const envSchema = zod.object({
  NEXTAUTH_SECRET: zod.string().min(1),
});

export const env = envSchema.parse(process.env);
