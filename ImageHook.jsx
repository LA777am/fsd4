import { useState } from 'react'

export default function ImageHook() {
  const [currentImage, setCurrentImage] = useState('/monitor.jpg')

  const toggleImage = () => {
    if (currentImage === '/monitor.jpg') {
      setCurrentImage('/keyboard.jpg')
    } else if (currentImage === '/keyboard.jpg') {
      setCurrentImage('/mouse.jpg')
    } else {
      setCurrentImage('/monitor.jpg')
    }
  }

  return (
    <div>
      <h1>Image Hook</h1>
      <div style={{ marginTop: '1rem', marginBottom: '1rem' }}>
        <button 
          onClick={toggleImage}
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
          Change Image
        </button>
      </div>
      
      <div style={{ 
        width: '200px', 
        height: '200px', 
        backgroundColor: '#1a1a1a', 
        borderRadius: '6px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        border: '1px solid #333333'
      }}>
        <img 
          src={currentImage} 
          alt="Toggled Hook Device" 
          style={{ maxWidth: '90%', maxHeight: '90%', objectFit: 'contain' }}
        />
      </div>
      <p style={{ marginTop: '0.5rem', color: '#888888' }}>Current view: {currentImage.substring(1)}</p>
    </div>
  )
}
