"use client"
import React from 'react'
import { Session } from "next-auth";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '../ui/dropdown-menu';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from '../ui/button';

interface LoginButtonProps {
  user?: Session["user"]; // Matches the shape of `user` from NextAuth
  status: "authenticated" | "unauthenticated" | "loading";
  loggerToggle: () => void;
}

function LoginButton({ user, status, loggerToggle }: LoginButtonProps) {
  const renderTriggerButton = () => {
    if (status === "authenticated") {
      return (
        <Avatar>
            <AvatarImage src={user?.image ?? ""} alt={user?.name ?? ""} />
            <AvatarFallback>{user?.name?.slice(0, 1)}</AvatarFallback>
          </Avatar>
      )
    } else if (status === "loading") {
      return <p>Loading</p>
    } else {
      return <Button className="ml-auto">Login</Button>
    }
  }
  console.log("status", status)
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        {renderTriggerButton()}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={loggerToggle}>
          {status === "authenticated" ? "signOut" : "GitHub"}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default LoginButton