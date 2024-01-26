import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export const GET = async () => {
  cookies().set("refresh_token", "", {
    maxAge: 0,
  })
  cookies().set("access_token", "", {
    maxAge: 0,
  })
  return new NextResponse(JSON.stringify({ message: "success" }), {
    status: 200,
  })
}
