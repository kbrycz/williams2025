import { useState, memo } from 'react'
import { TextAnimate } from '@/components/ui/text-animate'
import AnimateIn from './ui/AnimateIn'
import siteData from '../config/siteData'
import { colors } from '@/config/colors'

// Separate component for buttons to isolate state changes
function ContributionButtons() {
  const [selectedAmount, setSelectedAmount] = useState(null)
  const amounts = [...siteData.donation.amounts, 'Other']

  const handleAmountClick = (amount) => {
    setSelectedAmount(selectedAmount === amount ? null : amount)
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
      {amounts.map((amount, index) => {
        const isSelected = selectedAmount === amount
        return (
          <button
            key={index}
            onClick={() => handleAmountClick(amount)}
            className={`
              px-4 py-4 md:px-6 md:py-5 rounded-md font-semibold text-base md:text-lg
              transition-all duration-200 shadow-md hover:shadow-lg
              ${isSelected 
                ? 'text-white' 
                : 'bg-white text-neutral-800'
              }
            `}
            style={{
              backgroundColor: isSelected ? colors.primary[500] : '#ffffff',
              border: `2px solid ${colors.primary[500]}`,
              color: isSelected ? '#ffffff' : colors.primary[500],
            }}
            onMouseEnter={(e) => {
              if (!isSelected) {
                e.target.style.backgroundColor = colors.primary[50]
              }
            }}
            onMouseLeave={(e) => {
              if (!isSelected) {
                e.target.style.backgroundColor = '#ffffff'
              }
            }}
          >
            {typeof amount === 'number' ? `$${amount}` : amount}
          </button>
        )
      })}
    </div>
  )
}

// Memoized heading to prevent re-renders
const SectionHeading = memo(function SectionHeading() {
  return (
    <TextAnimate 
      as="h2" 
      animation="fadeIn" 
      by="word" 
      delay={0.2} 
      once 
      className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-10 leading-tight tracking-tight text-center" 
      style={{ color: colors.primary[500] }}
    >
      Choose Your Contribution
    </TextAnimate>
  )
})

// Memoized info text to prevent re-renders
const InfoText = memo(function InfoText() {
  return (
    <div className="text-center space-y-2">
      <TextAnimate 
        as="p" 
        animation="fadeIn" 
        by="word" 
        delay={0} 
        once 
        className="text-sm md:text-base" 
        style={{ color: colors.primary[800] }}
      >
        Your support helps us continue our mission to create positive change.
      </TextAnimate>
      <TextAnimate 
        as="p" 
        animation="fadeIn" 
        by="word" 
        delay={0.1} 
        once 
        className="text-xs md:text-sm" 
        style={{ color: colors.primary[700] }}
      >
        {siteData.donation.disclaimer}
      </TextAnimate>
    </div>
  )
})

function PricingSection() {
  return (
    <section className="w-full py-16 md:py-24 px-6 md:px-12 lg:px-16" style={{ backgroundColor: colors.primary[50] }}>
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <SectionHeading />

        {/* Toggle Buttons Grid */}
        <AnimateIn delay={0.4}>
          <ContributionButtons />
        </AnimateIn>

        {/* Informational Text */}
        <AnimateIn delay={0.6}>
          <InfoText />
        </AnimateIn>
      </div>
    </section>
  )
}

export default PricingSection
