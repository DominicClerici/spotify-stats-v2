import { NextResponse } from "next/server"

export async function POST(req) {
  const data = await req.json()
  if (!data) {
    console.log("cant parse")
    return new NextResponse(JSON.stringify({ message: "cant parse" }), {
      status: 400,
    })
  }
  console.log(data)
  const code = data.code
  const res = await fetch("https://accounts.spotify.com/api/token", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: `Basic ${process.env.ENCODED}`,
    },
    body: `grant_type=authorization_code&redirect_uri=http://localhost:3000/callback&code=${code}`,
  })
  const json = await res.json()
  if (json.error) {
    console.log("error")
    return new NextResponse(JSON.stringify({ message: "invalid code" }), {
      status: 400,
    })
  } else {
    console.log("success")
    return new NextResponse(JSON.stringify(json), {
      status: 200,
    })
  }
}
