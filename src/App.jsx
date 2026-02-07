import './App.css'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import HeroSection from './components/HeroSection'
import VideoSection from './components/VideoSection'
import ImageChecklistSection from './components/ImageChecklistSection'
import PricingSection from './components/PricingSection'
import SignupSection from './components/SignupSection'
import Footer from './components/Footer'
import PopupModal from './components/PopupModal'
import Navbar from './components/Navbar'
import ScrollToTop from './components/ScrollToTop'
import AboutPage from './components/AboutPage'
import JordansPlan from './components/JordansPlan'
import ContactPage from './components/ContactPage'

function HomePage() {
  return (
    <>
      <PopupModal />
      <HeroSection />
      <VideoSection />
      <ImageChecklistSection />
      <PricingSection />
      <SignupSection />
      <Footer />
    </>
  )
}

function Layout({ children }) {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <>
      <Navbar variant={isHome ? 'transparent' : 'white'} />
      {children}
    </>
  )
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/jordans-plan" element={<JordansPlan />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
