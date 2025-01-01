import { db } from "@/lib/db"
import { NextResponse } from "next/server"
import { hash } from "bcryptjs"

export async function PATCH(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params
    const json = await req.json()

    const { email, name, password, role } = json

    const data: any = {
      email,
      name,
      role,
    }

    // Only update password if provided
    if (password) {
      data.password = await hash(password, 10)
    }

    const user = await db.user.update({
      where: { id },
      data,
    })

    return NextResponse.json(user)
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 })
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params

    await db.user.delete({
      where: { id },
    })

    return new NextResponse(null, { status: 204 })
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 })
  }
}
