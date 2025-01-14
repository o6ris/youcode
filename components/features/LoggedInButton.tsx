"use client"
import React from 'react'
import { Session } from "next-auth";
import { signOut } from "next-auth/react";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from '../ui/dropdown-menu';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import { Button } from '../ui/button';

interface LoggedInButtonProps {
  user?: Session["user"];
}

function LoggedInButton({ user }: LoggedInButtonProps) {

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar>
          <AvatarImage src={user?.image ?? ""} alt={user?.name ?? ""} />
          <AvatarFallback>{user?.name?.slice(0, 1)}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem onClick={() => signOut()}>
          sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default LoggedInButton