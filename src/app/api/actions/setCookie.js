"use server"

import { cookies } from "next/headers"

export async function setCookie(data) {
  cookies().set("refresh_token", data.refresh_token)
  cookies().set("access_token", data.access_token, { maxAge: data.expires_in })

  if (cookies().get("refresh_token") && cookies().get("access_token")) {
    return Promise.resolve()
  } else {
    return Promise.reject()
  }
}
