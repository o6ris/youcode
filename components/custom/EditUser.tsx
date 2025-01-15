'use client'

import { useState } from "react";
import { Session } from "next-auth"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger, AlertDialogFooter, AlertDialogDescription } from '@/components/ui/alert-dialog';
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


interface EditUserProps {
  user?: Session['user'],
  triggerButtonClass: string
}

function EditUser({ user, triggerButtonClass }: EditUserProps) {

  const [userInfos, setUserInfos] = useState<Session['user'] | undefined>(user);
  const userOnChange = (name: keyof Session['user'] | undefined, value?: string) => {
    if (name) {
      const tempUser = { ...userInfos };
      tempUser[name] = value;
      setUserInfos(tempUser);
    }
  };
  console.log("userinfos", userInfos)
  return (
    <AlertDialog>
      <AlertDialogTrigger className={triggerButtonClass}>Edit Profile</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Edit Profile</AlertDialogTitle>
        </AlertDialogHeader>
        <AlertDialogDescription className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <Label>Name</Label>
            <Input name="name" value={userInfos?.name ?? ""} onChange={(e) => userOnChange("name", e.target.value)} />
          </div>
          <div className="flex flex-col gap-2">
            <Label>E mail</Label>
            <Input disabled name="name" value={userInfos?.email ?? ""} onChange={(e) => userOnChange("email", e.target.value)} />
          </div>
        </AlertDialogDescription>
        <AlertDialogFooter className="flex flex-row w-full items-center gap-4">
          <AlertDialogCancel className="m-0 w-full">Cancel</AlertDialogCancel>
          <AlertDialogAction className="m-0 w-full">Edit</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default EditUser