import React from 'react'
import { Session } from "next-auth";
import LoginButton from './LoginButton';
import LoggedInButton from '@/components/features/LoggedInButton'

interface AuthButtonProps {
  user?: Session["user"];
  status: "authenticated" | "unauthenticated" | "loading";
}

function AuthButton({ status, user }: AuthButtonProps) {

  if (status === "unauthenticated") {
    return <LoginButton />
  } else if (status === "loading") {
    return <p>Loading</p>
  } else {
    return <LoggedInButton user={user} />
  }
}

export default AuthButton