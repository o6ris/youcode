'use client'
import { Session } from "next-auth"
import { signOut } from "next-auth/react"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"

interface UserAccountProps {
  user?: Session["user"];
}

function UserAccount({ user }: UserAccountProps) {
  return (
    <Card className='flex m-auto w-3/4'>
      <CardContent className='w-full flex flex-col gap-6 p-4'>
        <CardHeader className='flex flex-row gap-4 items-center p-0'>
          <Avatar className='w-28 h-28'>
            <AvatarImage src={user?.image ?? ""} alt={user?.name ?? ""} />
            <AvatarFallback>{user?.name?.slice(0, 1)}</AvatarFallback>
          </Avatar>
          <CardTitle className='text-2xl'>{user?.name}</CardTitle>
        </CardHeader>
        <CardDescription>
          <p>{user?.email}</p>
        </CardDescription>
        <CardFooter className='flex flex-row justify-betwwen p-0 gap-4'>
          <Button className='w-full'>Edit profile</Button>
          <Button onClick={() => signOut()} className='w-full bg-red-600'>Log out</Button>
        </CardFooter>
      </CardContent>
    </Card>
  )
}

export default UserAccount