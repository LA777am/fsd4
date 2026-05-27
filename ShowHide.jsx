import { useState } from 'react'

export default function ShowHide() {
  const [btnText, setBtnText] = useState('show')
  const [showText, setShowText] = useState(false)

  const handleToggle = () => {
    if (btnText === 'show') {
      setBtnText('hide')
      setShowText(true)
    } else {
      setBtnText('show')
      setShowText(false)
    }
  }

  return (
    <div>
      <h1>Show Hide Effect</h1>
      <button 
        onClick={handleToggle}
        style={{
          backgroundColor: '#222222',
          color: '#ffffff',
          border: '1px solid #444444',
          padding: '0.5rem 1rem',
          borderRadius: '4px',
          cursor: 'pointer',
          fontSize: '1rem',
          marginTop: '1rem',
          marginBottom: '1rem'
        }}
      >
        {btnText}
      </button>
      {showText && (
        <div style={{ marginTop: '0.5rem' }}>
          <p>This is the text message!</p>
        </div>
      )}
    </div>
  )
}
