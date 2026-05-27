import { useState, useEffect } from 'react'

export default function SecondsCount() {
  const [seconds, setSeconds] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(prev => prev + 1)
    }, 1000)

    return () => clearInterval(timer) 
  }, [])

  return (
    <div>
      <h1>Seconds Count</h1>
      <p style={{ fontSize: '1.25rem', marginTop: '1.5rem' }}>
        Timer: <strong style={{ color: '#ffffff' }}>{seconds}</strong> seconds passed
      </p>
    </div>
  )
}
