"use client"
// import { useSearchParams } from "next/navigation"
import React, { useEffect } from "react"

const page = () => {
  // http://localhost:3000/callback?code=AQBfPE9YiJKzndr45EbWyFFV4OkXvQ0XbvTg3eLTPM282I_UcfSycm-d6nXjZraE3xUB9njR8eGNPXI2h55ywqtwC2QGLyDPjmzGkTQdi7DD8xSBoVKP1-O33ZBjDxVNmF-xeDpGdNPSOlkH4zcFbojJiuQXpBPVKRrF57OFGp879UuXTVi8GfesbPnPNJ37RVnhAmEPNAjzDXf-6AAi
  // const params = useSearchParams()
  //   const code = params.get("code")
  // get code query params
  useEffect(() => {
    const code = window.location.search.split("=")[1]
    if (code) {
      fetch("http://localhost:3000/api/refresh", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }, [])

  return (
    <div>
      <h1 className="text-3xl my-24">Logging you in</h1>
    </div>
  )
}

export default page
