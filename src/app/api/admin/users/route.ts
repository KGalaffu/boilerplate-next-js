import { db } from "@/lib/db"
import { hash } from "bcryptjs"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  try {
    const json = await req.json()
    const { email, name, password, role } = json

    const hashedPassword = await hash(password, 10)

    const user = await db.user.create({
      data: {
        email,
        name,
        password: hashedPassword,
        role,
      },
    })

    return NextResponse.json(user)
  } catch (error) {
    return new NextResponse("Internal Error", { status: 500 })
  }
}
