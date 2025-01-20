import React from 'react'
import { getAuthSession } from '@/lib/auth'
import { getServerSession } from "next-auth/next";
import { authOptions } from '../../app/api/auth/[...nextauth]/route';
import { prisma } from '@/lib/prisma';
import UserAccount from '@/components/custom/UserAccount'

async function Account() {
  const session = await getServerSession(authOptions);
  if (session?.user?.email) {
    const user = await prisma.user.findUnique({
      where: { email: session.user.email },
    });
    if (user) {
      session.user = user;
    }
  }
  const user = session?.user
  console.log("user server", user)
  return (
    <div>
      <UserAccount user={user} />
    </div>
  )
}

export default Account