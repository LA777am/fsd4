import { useState } from 'react'

export default function CountLike() {
  const [likes, setLikes] = useState(0)

  return (
    <div>
      <h1>Count Like</h1>
      <div style={{ marginTop: '1rem', marginBottom: '1rem' }}>
        <button 
          onClick={() => setLikes(likes + 1)}
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
          Like
        </button>
      </div>
      <p style={{ fontSize: '1.25rem' }}>{likes} Likes</p>
    </div>
  )
}
