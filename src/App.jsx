import './App.css'
import HeroSection from './components/HeroSection'
import ImageTextSection from './components/ImageTextSection'
import AboutSection from './components/AboutSection'
import SignupSection from './components/SignupSection'
import PricingSection from './components/PricingSection'
import Footer from './components/Footer'
import PopupModal from './components/PopupModal'

function App() {
  return (
    <div className="min-h-screen">
      <PopupModal />
      <HeroSection />
      <ImageTextSection />
      <AboutSection />
      <SignupSection />
      <PricingSection />
      <Footer />
    </div>
  )
}

export default App
