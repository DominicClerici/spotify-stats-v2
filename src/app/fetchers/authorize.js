// const url = "https://spotifystats.dominicclerici.com"
const url = "http://localhost:3000"
const authorize = (code) => {
  return new Promise((res, rej) => {
    fetch(`${url}/api/authorize`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ code }),
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

export default authorize
