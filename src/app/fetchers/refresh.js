// const url = "https://spotifystats.dominicclerici.com"
const url = "http://localhost:3000"
const refresh = (token) => {
  return new Promise((res, rej) => {
    fetch(`${url}/api/refresh`, {
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
