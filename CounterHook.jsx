import { useState } from 'react'

export default function CounterHook() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>Counter Hook</h1>
      <p style={{ fontSize: '1.5rem', marginTop: '1rem' }}>Count: <strong>{count}</strong></p>
      
      <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
        <button 
          onClick={() => setCount(count + 1)}
          style={{
            backgroundColor: '#222222',
            color: '#ffffff',
            border: '1px solid #444444',
            padding: '0.5rem 1rem',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '1rem'
          }}
        >
          Inc
        </button>
        <button 
          onClick={() => setCount(count - 1)}
          style={{
            backgroundColor: '#222222',
            color: '#ffffff',
            border: '1px solid #444444',
            padding: '0.5rem 1rem',
            borderRadius: '4px',
            cursor: 'pointer',
            fontSize: '1rem'
          }}
        >
          Dec
        </button>
      </div>
    </div>
  )
}
