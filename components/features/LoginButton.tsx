"use client"
import React from 'react'
import { Button } from '../ui/button';
import { signIn } from "next-auth/react";

function LoginButton() {

  return (
    <Button onClick={() => signIn()}>Login</Button>
  )
}

export default LoginButton