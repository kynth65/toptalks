import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import PricingPage from './pages/PricingPage'
import LoginPage from './pages/LoginPage'
import StudentServicesPage from './pages/StudentServicesPage'
import StartTeachingPage from './pages/StartTeachingPage'
import AboutPage from './pages/AboutPage'
import { LanguageProvider } from './contexts/LanguageContext'
import ScrollToTop from './components/common/ScrollToTop'

function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/student-services" element={<StudentServicesPage />} />
          <Route path="/start-teaching" element={<StartTeachingPage />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  )
}

export default App
