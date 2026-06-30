// src/App.jsx
import { Outlet } from 'react-router-dom'
import { Footer } from './components/Layout/Footer'
import { Navbar } from './components/Layout/Navbar'

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
