import { BrowserRouter, Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage'
// Commented out - Tutors show their own pricing
// import PricingPage from './pages/PricingPage'
import LoginPage from './pages/LoginPage'
import StudentServicesPage from './pages/StudentServicesPage'
import StartLearningPage from './pages/StartLearningPage'
import StartTeachingPage from './pages/StartTeachingPage'
import TutorApplicationPage from './pages/TutorApplicationPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import FindTutorsPage from './pages/FindTutorsPage'
import TutorResultsPage from './pages/TutorResultsPage'
import NotFoundPage from './pages/NotFoundPage'
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
          {/* Commented out - Tutors show their own pricing */}
          {/* <Route path="/pricing" element={<PricingPage />} /> */}
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/student-services" element={<StudentServicesPage />} />
          <Route path="/start-learning" element={<StartLearningPage />} />
          <Route path="/start-teaching" element={<StartTeachingPage />} />
          <Route path="/apply-tutor" element={<TutorApplicationPage />} />
          <Route path="/find-tutors" element={<FindTutorsPage />} />
          <Route path="/tutor-results" element={<TutorResultsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  )
}

export default App
