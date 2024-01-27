function timeAgo(dateString) {
  const date = new Date(dateString)
  const now = new Date()
  const seconds = Math.floor((now - date) / 1000)

  let interval = seconds / 86400
  if (interval > 1) {
    return Math.floor(interval) + "d"
  }
  interval = seconds / 3600
  if (interval > 1) {
    return Math.floor(interval) + "h"
  }
  interval = seconds / 60
  if (interval > 1) {
    return Math.floor(interval) + "m"
  }
  return Math.floor(seconds) + "s"
}

export default timeAgo
