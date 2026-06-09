import { BrowserRouter as Router, Navigate, Routes, Route } from 'react-router-dom'
import { ReactLenis } from 'lenis/react'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import KeynotePage from './pages/KeynotePage'

function App() {
  return (
    <ReactLenis root options={{ lerp: 0.08, smoothWheel: true, smoothTouch: false }}>
      <Router>
        <div className="min-h-screen bg-white flex flex-col">
          <Navigation />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/keynotes" element={<Navigate to="/keynote-topics" replace />} />
              <Route path="/keynote-topics" element={<KeynotePage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ReactLenis>
  )
}

export default App
