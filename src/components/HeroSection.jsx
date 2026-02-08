import { useState } from 'react'
import heroImage from '../assets/hero-bg.png'
import { TextAnimate } from '@/components/ui/text-animate'
import AnimateIn from './ui/AnimateIn'
import siteData from '../config/siteData'

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
      <div className="md:hidden relative min-h-screen flex flex-col">
        {/* Hero Image Background - full bleed */}
        <img 
          src={heroImage}
          alt="Hero"
          className="absolute inset-0 w-full h-full object-cover object-[75%_top]"
        />

        {/* Gradient overlay for Navbar legibility */}
        <div className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-black/50 via-black/20 to-transparent pointer-events-none z-[1]" />

        {/* Top spacer - pushes card toward center-bottom */}
        <div className="flex-1" />

        {/* Mobile Content Card - floating with hero visible on all sides */}
        <div className="relative z-10 mx-3 sm:mx-4 mb-5">
          <div className="bg-primary-600/95 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-2xl">
            {/* Headline */}
            <TextAnimate 
              as="h1" 
              animation="fadeIn" 
              by="word" 
              delay={0.2} 
              once 
              className="text-3xl sm:text-4xl font-bold text-white mb-5 leading-tight tracking-tight"
            >
              {siteData.hero.headline}
            </TextAnimate>

            {/* Form */}
            <form className="space-y-3 w-full" onSubmit={(e) => e.preventDefault()}>
              <AnimateIn delay={0.3}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3 rounded-md bg-white text-neutral-900 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-secondary-300 transition-all shadow-sm text-sm"
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={handlePhoneChange}
                    maxLength="14"
                    pattern="\(\d{3}\) \d{3}-\d{4}"
                    className="w-full px-4 py-3 rounded-md bg-white text-neutral-900 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-secondary-300 transition-all shadow-sm text-sm"
                    required
                  />
                </div>
              </AnimateIn>
              <AnimateIn delay={0.4}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <input
                    type="text"
                    placeholder="ZIP Code"
                    pattern="[0-9]{5}"
                    maxLength="5"
                    className="w-full px-4 py-3 rounded-md bg-white text-neutral-900 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-secondary-300 transition-all shadow-sm text-sm"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full px-4 py-3 rounded-md bg-secondary-500 hover:bg-secondary-400 text-white font-bold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-secondary-300 shadow-lg text-sm tracking-wide"
                  >
                    SUBMIT
                  </button>
                </div>
              </AnimateIn>
            </form>

            {/* Disclaimer Text */}
            <AnimateIn delay={0.5}>
              <p className="text-white/80 text-[10px] mt-4 leading-relaxed">
                {siteData.hero.disclaimerText} For more information, contact{' '}
                <a href={`mailto:${siteData.contact.email}`} className="underline hover:no-underline transition-all">
                  {siteData.contact.email}
                </a>
                {' '}or view our{' '}
                <a href={siteData.contact.privacyUrl} className="underline hover:no-underline transition-all">
                  Privacy Policy
                </a>
                .
              </p>
            </AnimateIn>

            {/* Social Media Icons */}
            <AnimateIn delay={0.6}>
              <div className="flex gap-2.5 mt-4">
                <a 
                  href={siteData.contact.social.facebook} 
                  className="w-9 h-9 rounded-full border border-white/30 hover:bg-white/10 flex items-center justify-center text-white transition-colors duration-200"
                  aria-label="Facebook"
                >
                  <span className="font-bold text-sm">f</span>
                </a>
                <a 
                  href={siteData.contact.social.instagram} 
                  className="w-9 h-9 rounded-full border border-white/30 hover:bg-white/10 flex items-center justify-center text-white transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a 
                  href={siteData.contact.social.twitter} 
                  className="w-9 h-9 rounded-full border border-white/30 hover:bg-white/10 flex items-center justify-center text-white transition-colors duration-200"
                  aria-label="X (Twitter)"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
              </div>
            </AnimateIn>
          </div>
        </div>
      </div>

      {/* ===== TABLET & DESKTOP LAYOUT ===== */}
      <div className="hidden md:block relative h-screen min-h-[700px]">
        {/* Hero Image Background - Full Bleed */}
        <img 
          src={heroImage}
          alt="Hero"
          className="w-full h-full absolute inset-0 object-cover object-[60%_center] lg:object-top"
        />

        {/* Gradient overlay for Navbar legibility */}
        <div className="absolute inset-x-0 top-0 h-40 xl:h-48 bg-gradient-to-b from-black/50 via-black/20 to-transparent pointer-events-none z-[1]" />

        {/* Dark Blue Content Card - Anchored to Left Edge */}
        <div className="absolute bottom-10 lg:bottom-14 xl:bottom-16 left-0 z-10 w-full md:w-[55%] lg:w-[58%] xl:w-[53%] 2xl:w-[48%]">
          <div className="bg-primary-600/[0.93] backdrop-blur-sm p-10 lg:p-12 xl:p-14 rounded-r-2xl shadow-2xl">
            {/* Headline */}
            <TextAnimate 
              as="h1" 
              animation="fadeIn" 
              by="word" 
              delay={0.2} 
              once 
              className="text-4xl lg:text-[2.75rem] xl:text-5xl font-bold text-white mb-7 lg:mb-9 leading-tight tracking-tight"
            >
              {siteData.hero.headline}
            </TextAnimate>

            {/* Form */}
            <form className="space-y-3.5 w-full" onSubmit={(e) => e.preventDefault()}>
              {/* Email and Phone Row */}
              <AnimateIn delay={0.4}>
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-4 py-3.5 lg:py-4 rounded-md bg-white text-neutral-900 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-secondary-300 transition-all shadow-sm text-sm lg:text-base"
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    value={phone}
                    onChange={handlePhoneChange}
                    maxLength="14"
                    pattern="\(\d{3}\) \d{3}-\d{4}"
                    className="w-full px-4 py-3.5 lg:py-4 rounded-md bg-white text-neutral-900 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-secondary-300 transition-all shadow-sm text-sm lg:text-base"
                    required
                  />
                </div>
              </AnimateIn>

              {/* ZIP Code and Submit Row */}
              <AnimateIn delay={0.5}>
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="ZIP Code"
                    pattern="[0-9]{5}"
                    maxLength="5"
                    className="w-full px-4 py-3.5 lg:py-4 rounded-md bg-white text-neutral-900 placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-secondary-300 transition-all shadow-sm text-sm lg:text-base"
                    required
                  />
                  <button
                    type="submit"
                    className="w-full px-4 py-3.5 lg:py-4 rounded-md bg-secondary-500 hover:bg-secondary-400 text-white font-bold transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-secondary-300 shadow-lg text-sm lg:text-base tracking-wide"
                  >
                    SUBMIT
                  </button>
                </div>
              </AnimateIn>
            </form>

            {/* Disclaimer Text */}
            <AnimateIn delay={0.6}>
              <p className="text-white/80 text-xs mt-5 lg:mt-7 leading-relaxed">
                {siteData.hero.disclaimerText} For more information, contact{' '}
                <a href={`mailto:${siteData.contact.email}`} className="underline hover:no-underline transition-all">
                  {siteData.contact.email}
                </a>
                {' '}or view our{' '}
                <a href={siteData.contact.privacyUrl} className="underline hover:no-underline transition-all">
                  Privacy Policy
                </a>
                .
              </p>
            </AnimateIn>

            {/* Social Media Icons */}
            <AnimateIn delay={0.7}>
              <div className="flex gap-3 mt-6 lg:mt-8">
                <a 
                  href={siteData.contact.social.facebook} 
                  className="w-11 h-11 rounded-full border border-white/30 hover:bg-white/10 flex items-center justify-center text-white transition-colors duration-200"
                  aria-label="Facebook"
                >
                  <span className="font-bold text-base">f</span>
                </a>
                <a 
                  href={siteData.contact.social.instagram} 
                  className="w-11 h-11 rounded-full border border-white/30 hover:bg-white/10 flex items-center justify-center text-white transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a 
                  href={siteData.contact.social.twitter} 
                  className="w-11 h-11 rounded-full border border-white/30 hover:bg-white/10 flex items-center justify-center text-white transition-colors duration-200"
                  aria-label="X (Twitter)"
                >
                  <svg className="w-[18px] h-[18px]" fill="currentColor" viewBox="0 0 24 24">
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
