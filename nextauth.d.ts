import type { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: DefaultSession['user'] & {
      /** The user's id address. */
      id?: string;
    };
  }
}

declare module '../api/auth/[...nextauth]' {
  import type { AuthOptions } from 'next-auth';
  export const authOptions: AuthOptions;
}