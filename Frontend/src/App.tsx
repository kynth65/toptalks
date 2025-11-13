import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
import PricingPage from './pages/PricingPage'
import LoginPage from './pages/LoginPage'
import StudentServicesPage from './pages/StudentServicesPage'
import StartLearningPage from './pages/StartLearningPage'
import StartTeachingPage from './pages/StartTeachingPage'
import TutorApplicationPage from './pages/TutorApplicationPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
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
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/student-services" element={<StudentServicesPage />} />
          <Route path="/start-learning" element={<StartLearningPage />} />
          <Route path="/start-teaching" element={<StartTeachingPage />} />
          <Route path="/apply-tutor" element={<TutorApplicationPage />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  )
}

export default App
