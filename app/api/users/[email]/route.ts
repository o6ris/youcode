import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";

export async function PATCH(req: NextRequest, { params }: { params: { email: string } }) {
  const { email } = params;
  // We can check email format
  console.log("params", params);
  console.log("email", email);

  if (!email) {
    return NextResponse.json({ error: "email is required" })
  }

  try {
    const body = await req.json();
    // we can check body format
    const { name } = body
    console.log("name", name);
    const updatedUser = await prisma.user.update({
      where: { email },
      data: { ...(name && { name }) },
    })
    
    console.log("updatedUser", updatedUser);
    return NextResponse.json({ message: "User updated", user: updatedUser }, { status: 200 })

  } catch (error) {
    return NextResponse.json({ error: 'Failed to update user.' }, { status: 500 });
  }

}