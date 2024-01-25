const refresh = (token) => {
  return new Promise((res, rej) => {
    fetch("http://localhost:3000/api/refresh", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          rej(data.error)
        } else {
          res(data)
        }
      })
  })
}

export default refresh
