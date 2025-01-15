import React from 'react'
import { getAuthSession } from '@/lib/auth';
// import { useSession } from 'next-auth/react'
import LoginButton from './LoginButton';
import LoggedInButton from '@/components/features/LoggedInButton'

const AuthButton = async () => {

  const session = await getAuthSession()
  // const { data: session } = useSession()
  console.log("session", session)
  const user = session?.user

  if (!user) {
    return <LoginButton />
  }
  return <LoggedInButton user={user} />

}

export default AuthButton