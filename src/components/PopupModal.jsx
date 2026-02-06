import { useState, useEffect } from 'react'
import ContactForm from './ContactForm'

/**
 * Popup Modal Component
 * Shows on first visit to encourage signups
 * Uses localStorage to track if user has seen/dismissed it
 * 
 * ⬇️ SET THIS TO true TO ALWAYS SHOW THE POPUP (ignores localStorage) ⬇️
 */
const ALWAYS_SHOW_POPUP = false

function PopupModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    // If ALWAYS_SHOW_POPUP is true, skip the localStorage check
    const hasSeenPopup = ALWAYS_SHOW_POPUP ? false : localStorage.getItem('hasSeenSignupPopup')
    
    if (!hasSeenPopup) {
      // Show popup after a short delay for better UX
      const timer = setTimeout(() => {
        setIsOpen(true)
        // Trigger animation after mount
        requestAnimationFrame(() => {
          setIsAnimating(true)
        })
      }, 1500)

      return () => clearTimeout(timer)
    }
  }, [])

  const handleClose = () => {
    setIsAnimating(false)
    // Wait for animation to complete before unmounting
    setTimeout(() => {
      setIsOpen(false)
      localStorage.setItem('hasSeenSignupPopup', 'true')
    }, 300)
  }

  const handleSubmit = (formData) => {
    console.log('Popup form submitted:', formData)
    // Handle form submission here (API call, etc.)
    handleClose()
  }

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose()
    }
  }

  if (!isOpen) return null

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-300 ${
        isAnimating ? 'bg-black/50 backdrop-blur-sm' : 'bg-transparent'
      }`}
      onClick={handleBackdropClick}
    >
      <div 
        className={`relative w-full max-w-3xl rounded-2xl shadow-2xl transition-all duration-300 ${
          isAnimating 
            ? 'opacity-100 scale-100 translate-y-0' 
            : 'opacity-0 scale-95 translate-y-4'
        }`}
        style={{ backgroundColor: '#3498db' }}
      >
        <div className="p-10 md:p-14">
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center rounded-full bg-white/15 hover:bg-white/25 text-white transition-colors duration-200"
            aria-label="Close popup"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Heading */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-white text-center mb-8 leading-tight pr-8">
            Join our movement and help build a stronger community together.
          </h2>

          {/* Form */}
          <ContactForm 
            compact={true} 
            buttonText="JOIN NOW"
            onSubmit={handleSubmit}
          />

          {/* Disclaimer */}
          <p className="text-white/70 text-xs mt-6 text-center leading-relaxed">
            By providing your contact information, you agree to receive updates and messages from us. 
            Message and data rates may apply. Reply STOP to opt out. For questions, reach out to{' '}
            <a href="mailto:support@winadvocacy.com" className="underline hover:no-underline transition-all text-white/90">
              support@winadvocacy.com
            </a>
            . Your information will not be shared with third parties. View our{' '}
            <a href="#" className="underline hover:no-underline transition-all text-white/90">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  )
}

export default PopupModal
