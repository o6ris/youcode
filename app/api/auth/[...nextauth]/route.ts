import { env } from '@/lib/env';
import { prisma } from '@/lib/prisma';
import { PrismaAdapter } from '@auth/prisma-adapter';
import NextAuth, { AuthOptions } from 'next-auth';
import GithubProvider from 'next-auth/providers/github';

export const authOptions: AuthOptions = {
  debug: true,
  adapter: PrismaAdapter(prisma),
  theme: {
    logo: '/images/logo-text.png',
  },
  secret: env.AUTH_SECRET,
  providers: [
    GithubProvider({
      clientId: env.GITHUB_ID,
      clientSecret: env.GITHUB_SECRET,
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.image = user.image;
      }
      return token;
    },
    async session({ session, token }) {
      session.user.id = token.sub || undefined;
      session.user.name = token.name || null;
      session.user.email = token.email || null;
      session.user.image = token.picture || null;

      return session;
    },
  },
  session: {
    strategy: 'jwt',
  },
};

export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };