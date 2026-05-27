import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import MainR from './routes/MainR'

function App() {
  return (
    <BrowserRouter>
      <div className="theme-container">
        <Navbar />
        <main className="main-content">
          <MainR />
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
