import { useState } from 'react'
import heroImage from '../assets/hero.png'
import logoImage from '../assets/logo.png'
import { TextAnimate } from '@/components/ui/text-animate'
import AnimateIn from './ui/AnimateIn'

function HeroSection() {
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')

  // Format phone number as (XXX) XXX-XXXX
  const formatPhoneNumber = (value) => {
    const phoneNumber = value.replace(/\D/g, '')
    const limitedNumber = phoneNumber.slice(0, 10)
    
    if (limitedNumber.length === 0) return ''
    if (limitedNumber.length <= 3) return `(${limitedNumber}`
    if (limitedNumber.length <= 6) return `(${limitedNumber.slice(0, 3)}) ${limitedNumber.slice(3)}`
    return `(${limitedNumber.slice(0, 3)}) ${limitedNumber.slice(3, 6)}-${limitedNumber.slice(6)}`
  }

  const handlePhoneChange = (e) => {
    setPhone(formatPhoneNumber(e.target.value))
  }

  return (
    <section className="w-full overflow-hidden">
      {/* ===== MOBILE LAYOUT (phones only) ===== */}
      <div className="md:hidden flex flex-col bg-primary-500">
        {/* Mobile Header Bar */}
        <div className="relative px-4 py-3 flex items-center justify-between">
          <AnimateIn delay={0}>
            <img 
              src={logoImage}
              alt="Campaign Logo"
              className="h-10 sm:h-12 w-auto"
            />
          </AnimateIn>
          <AnimateIn delay={0}>
            <button className="bg-secondary-600 hover:bg-secondary-700 text-white font-semibold px-5 py-2 rounded-md transition-colors duration-200 shadow-lg text-sm">
              DONATE
            </button>
          </AnimateIn>
        </div>

        {/* Mobile Hero Image - Smaller, Centered, Clean */}
        <div className="flex justify-center px-4 py-3">
          <div className="relative w-[85%] max-w-md aspect-[16/10] rounded-lg overflow-hidden shadow-xl">
            <img 
              src={heroImage}
              alt="Hero"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>

        {/* Mobile Content Section */}
        <div className="px-5 sm:px-8 py-6 pb-10 flex flex-col items-center">
          {/* Headline */}
          <TextAnimate 
            as="h1" 
            animation="fadeIn" 
            by="word" 
            delay={0.2} 
            once 
            className="text-4xl sm:text-5xl font-bold text-white mb-6 leading-tight tracking-tight text-center"
          >
            Building a stronger community, together.
          </TextAnimate>

          {/* Form */}
          <form className="space-y-3 w-full max-w-sm" onSubmit={(e) => e.preventDefault()}>
            <AnimateIn delay={0.3}>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-md bg-white text-neutral-900 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-secondary-400 transition-all shadow-sm text-base"
                required
              />
            </AnimateIn>
            <AnimateIn delay={0.35}>
              <input
                type="tel"
                placeholder="Phone"
                value={phone}
                onChange={handlePhoneChange}
                maxLength="14"
                pattern="\(\d{3}\) \d{3}-\d{4}"
                className="w-full px-4 py-3 rounded-md bg-white text-neutral-900 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-secondary-400 transition-all shadow-sm text-base"
                required
              />
            </AnimateIn>
            <AnimateIn delay={0.4}>
              <input
                type="text"
                placeholder="ZIP Code"
                pattern="[0-9]{5}"
                maxLength="5"
                className="w-full px-4 py-3 rounded-md bg-white text-neutral-900 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-secondary-400 transition-all shadow-sm text-base"
                required
              />
            </AnimateIn>
            <AnimateIn delay={0.45}>
              <button
                type="submit"
                className="w-full px-4 py-3 rounded-md bg-secondary-600 hover:bg-secondary-700 text-white font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-secondary-400 shadow-lg text-base"
              >
                JOIN US
              </button>
            </AnimateIn>
          </form>

          {/* Disclaimer Text */}
          <AnimateIn delay={0.5}>
            <p className="text-white/90 text-xs mt-6 leading-relaxed max-w-sm text-center">
              By providing your contact information, you agree to receive campaign updates and messages from us. Message and data rates may apply. Reply STOP to opt out. For more information, contact{' '}
              <a href="mailto:support@winadvocacy.com" className="underline hover:no-underline transition-all">
                support@winadvocacy.com
              </a>
              {' '}or view our{' '}
              <a href="#" className="underline hover:no-underline transition-all">
                Privacy Policy
              </a>
              .
            </p>
          </AnimateIn>

          {/* Social Media Icons */}
          <AnimateIn delay={0.6}>
            <div className="flex gap-3 mt-6 justify-center">
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-secondary-600 hover:bg-secondary-700 flex items-center justify-center text-white transition-colors duration-200 shadow-lg"
                aria-label="Facebook"
              >
                <span className="font-bold text-base">f</span>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-secondary-600 hover:bg-secondary-700 flex items-center justify-center text-white transition-colors duration-200 shadow-lg"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a 
                href="#" 
                className="w-10 h-10 rounded-full bg-secondary-600 hover:bg-secondary-700 flex items-center justify-center text-white transition-colors duration-200 shadow-lg"
                aria-label="X (Twitter)"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </AnimateIn>
        </div>
      </div>

      {/* ===== TABLET & DESKTOP LAYOUT ===== */}
      <div className="hidden md:block relative h-screen min-h-[700px]">
        {/* Hero Image Background */}
        <img 
          src={heroImage}
          alt="Hero"
          className="w-full h-full absolute inset-0 object-cover object-right"
        />
        
        {/* Donate Button - Top Right */}
        <AnimateIn delay={0} className="absolute top-6 right-10 lg:right-16 xl:right-20 z-20">
          <button className="bg-secondary-600 hover:bg-secondary-700 text-white font-semibold px-8 py-3 rounded-md transition-colors duration-200 shadow-lg">
            DONATE
          </button>
        </AnimateIn>

        {/* Gradient Overlay - Responsive */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to right, rgba(39, 60, 117, 1) 0%, rgba(39, 60, 117, 1) 20%, rgba(39, 60, 117, 0.97) 30%, rgba(39, 60, 117, 0.9) 40%, rgba(39, 60, 117, 0.75) 50%, rgba(39, 60, 117, 0.5) 60%, rgba(39, 60, 117, 0.25) 70%, rgba(39, 60, 117, 0.1) 78%, transparent 85%)',
          }}
        ></div>

        {/* Content - positioned on the left side */}
        <div className="relative z-10 h-full flex flex-col pl-10 lg:pl-16 xl:pl-20 pr-8">
          {/* Logo - pinned to top */}
          <AnimateIn delay={0} className="pt-6 lg:pt-8">
            <img 
              src={logoImage}
              alt="Campaign Logo"
              className="h-12 lg:h-14 xl:h-16 w-auto"
            />
          </AnimateIn>

          {/* Main content - centered in remaining space */}
          <div className="flex-1 flex flex-col justify-center w-full max-w-xl lg:max-w-2xl xl:max-w-3xl pb-10 lg:pb-14">
            {/* Headline */}
            <TextAnimate 
              as="h1" 
              animation="fadeIn" 
              by="word" 
              delay={0.2} 
              once 
              className="text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold text-white mb-8 lg:mb-10 leading-tight tracking-tight"
            >
              Building a stronger community, together.
            </TextAnimate>

            {/* Form */}
            <form className="space-y-3 lg:space-y-4 w-full max-w-sm lg:max-w-md" onSubmit={(e) => e.preventDefault()}>
              {/* Email and Phone Row */}
              <AnimateIn delay={0.4}>
                <div className="grid grid-cols-2 gap-2 lg:gap-3">
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 lg:px-4 py-3 lg:py-3.5 rounded-md bg-white text-neutral-900 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-secondary-400 transition-all shadow-sm text-sm"
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Phone"
                    value={phone}
                    onChange={handlePhoneChange}
                    maxLength="14"
                    pattern="\(\d{3}\) \d{3}-\d{4}"
                    className="w-full px-3 lg:px-4 py-3 lg:py-3.5 rounded-md bg-white text-neutral-900 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-secondary-400 transition-all shadow-sm text-sm"
                    required
                  />
                </div>
              </AnimateIn>

              {/* ZIP Code and Submit Row */}
              <AnimateIn delay={0.6}>
                <div className="grid grid-cols-2 gap-2 lg:gap-3">
                  <input
                    type="text"
                    placeholder="ZIP Code"
                    pattern="[0-9]{5}"
                    maxLength="5"
                    className="w-full px-3 lg:px-4 py-3 lg:py-3.5 rounded-md bg-white text-neutral-900 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-secondary-400 transition-all shadow-sm text-sm"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full px-3 lg:px-4 py-3 lg:py-3.5 rounded-md bg-secondary-600 hover:bg-secondary-700 text-white font-semibold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-secondary-400 shadow-lg text-sm"
                  >
                    JOIN US
                  </button>
                </div>
              </AnimateIn>
            </form>

            {/* Disclaimer Text */}
            <AnimateIn delay={0.8}>
              <p className="text-white/90 text-xs mt-5 lg:mt-6 max-w-sm lg:max-w-md leading-relaxed">
                By providing your contact information, you agree to receive campaign updates and messages from us. Message and data rates may apply. Reply STOP to opt out. For more information, contact{' '}
                <a href="mailto:support@winadvocacy.com" className="underline hover:no-underline transition-all">
                  support@winadvocacy.com
                </a>
                {' '}or view our{' '}
                <a href="#" className="underline hover:no-underline transition-all">
                  Privacy Policy
                </a>
                .
              </p>
            </AnimateIn>

            {/* Social Media Icons */}
            <AnimateIn delay={1.0}>
              <div className="flex gap-2 lg:gap-3 mt-6 lg:mt-8">
                <a 
                  href="#" 
                  className="w-10 h-10 lg:w-11 lg:h-11 rounded-full bg-secondary-600 hover:bg-secondary-700 flex items-center justify-center text-white transition-colors duration-200 shadow-lg"
                  aria-label="Facebook"
                >
                  <span className="font-bold text-base lg:text-lg">f</span>
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 lg:w-11 lg:h-11 rounded-full bg-secondary-600 hover:bg-secondary-700 flex items-center justify-center text-white transition-colors duration-200 shadow-lg"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 lg:w-11 lg:h-11 rounded-full bg-secondary-600 hover:bg-secondary-700 flex items-center justify-center text-white transition-colors duration-200 shadow-lg"
                  aria-label="X (Twitter)"
                >
                  <svg className="w-4 h-4 lg:w-5 lg:h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
            </AnimateIn>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
