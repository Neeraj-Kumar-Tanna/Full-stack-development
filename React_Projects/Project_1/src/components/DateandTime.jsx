import React from 'react'
import { useEffect, useState } from 'react'

const DateandTime = () => {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const intervalId = setInterval(() => setNow(new Date()), 1000)

    return () => clearInterval(intervalId)
  }, [])

  const day = now.getDate()
  const month = now.toLocaleString('en', { month: 'short' }).toLowerCase()
  const year = now.getFullYear()
  const hours = now.getHours()
  const formattedHours = String(hours % 12 || 12).padStart(2, '0')
  const minutes = String(now.getMinutes()).padStart(2, '0')
  const period = hours >= 12 ? 'PM' : 'AM'

  return (
    <div>
      {`${day} ${month} ${year} , ${formattedHours}:${minutes}${period}`}
    </div>
  )
}

export default DateandTime
