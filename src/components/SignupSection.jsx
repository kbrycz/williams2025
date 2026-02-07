import { TextAnimate } from '@/components/ui/text-animate'
import AnimateIn from './ui/AnimateIn'
import ContactForm from './ContactForm'
import siteData from '../config/siteData'
import { colors } from '@/config/colors'

function SignupSection() {
  const handleSubmit = (formData) => {
    console.log('Signup form submitted:', formData)
    // Handle form submission here (API call, etc.)
  }

  return (
    <section className="w-full py-16 md:py-24 px-6 md:px-12 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-start gap-8 md:gap-12 lg:gap-16">
          {/* Text Content on Left */}
          <div className="w-full md:w-1/2">
            <TextAnimate 
              as="h2" 
              animation="fadeIn" 
              by="word" 
              delay={0.2} 
              once 
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight tracking-tight text-center md:text-left" 
              style={{ color: colors.primary[500] }}
            >
              {siteData.signup.heading}
            </TextAnimate>

            <AnimateIn delay={0.3} className="mb-8">
              <p className="text-base md:text-lg text-neutral-600 text-center md:text-left">
                {siteData.signup.subheading}
              </p>
            </AnimateIn>

            <div className="space-y-4">
              {siteData.signup.description.map((paragraph, index) => (
                <TextAnimate 
                  key={index}
                  as="p" 
                  animation="fadeIn" 
                  by="word" 
                  delay={0.4 + index * 0.1} 
                  once 
                  className="text-base md:text-lg text-black leading-relaxed"
                >
                  {paragraph}
                </TextAnimate>
              ))}
            </div>
          </div>

          {/* Form Container on Right */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-start">
            <AnimateIn delay={0.4} className="w-full max-w-lg rounded-lg shadow-xl p-6 md:p-8 lg:p-10 mt-8 md:mt-16" style={{ backgroundColor: colors.primary[500] }}>
              <ContactForm 
                compact={false} 
                buttonText="SUBMIT"
                onSubmit={handleSubmit}
              />
            </AnimateIn>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SignupSection
