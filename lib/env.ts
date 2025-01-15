import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

export const env = createEnv({
  server: {
    DATABASE_URL: z.string().url(),
    GITHUB_ID: z.string().min(1),
    GITHUB_SECRET: z.string().min(1),
    AUTH_SECRET: z.string().min(1),
  },
  client: {
    // Define client-side environment variables here if needed
  },
  experimental__runtimeEnv: {}, // This should not have any arguments
});
