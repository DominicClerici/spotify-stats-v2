import { NextResponse } from "next/server"
import { cookies } from "next/headers"

const url = "http://localhost:3000/callback"

export const POST = async (req) => {
  const data = await req.json()
  if (!data) {
    return new NextResponse(JSON.stringify({ error: 40 }), {
      status: 400,
    })
  }
  const code = data.code
  const res = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${process.env.ENCODED}`,
    },
    body: `grant_type=authorization_code&redirect_uri=${url}&code=${code}`,
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
      }
    )
  }
  if (json.error) {
    return new NextResponse(JSON.stringify({ error: 41 }), {
      status: 400,
    })
  } else {
    try {
      cookies().set(
        "refresh_token",
        json.refresh_token,
        cookies().set("refresh_token", json.refresh_token, {
          maxAge: 60 * 60 * 24 * 365,
        })
      )
      cookies().set("access_token", json.access_token, {
        maxAge: json.expires_in,
      })
    } catch (error) {
      console.error("Error setting cookies:", error)
      return new NextResponse(
        JSON.stringify({ error: "Error setting cookies" }),
        {
          status: 500,
        }
      )
    }
    if (cookies().get("refresh_token") && cookies().get("access_token")) {
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
