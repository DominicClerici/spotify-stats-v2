import { cookies } from "next/headers"
import { NextResponse } from "next/server"

export const POST = async (req) => {
  const data = await req.json()
  if (!data) {
    return new NextResponse(JSON.stringify({ error: 40 }), {
      status: 400,
    })
  }
  const token = data.token.value
  const res = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${process.env.ENCODED}`,
    },
    body: `grant_type=refresh_token&refresh_token=${token}`,
  })
  let json
  try {
    json = await res.json()
  } catch (error) {
    console.error("Error parsing response:", error)
    return new NextResponse(
      JSON.stringify({ error: "Error parsing response" }),
      {
        status: 500,
      },
    )
  }
  if (json.error) {
    console.log(json)
    return new NextResponse(JSON.stringify({ error: 41 }), {
      status: 400,
    })
  } else {
    try {
      console.log(json)
      cookies().set("access_token", json.access_token, {
        maxAge: json.expires_in,
      })
    } catch (error) {
      console.error("Error setting cookies:", error)
      return new NextResponse(
        JSON.stringify({ error: "Error setting cookies" }),
        {
          status: 500,
        },
      )
    }
    if (cookies().get("access_token") && cookies().get("refresh_token")) {
      return new NextResponse(JSON.stringify({ message: "success" }), {
        status: 200,
      })
    } else {
      return new NextResponse(JSON.stringify({ error: 42 }), {
        status: 400,
      })
    }
  }
}
