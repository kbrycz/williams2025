import { TextAnimate } from '@/components/ui/text-animate'
import AnimateIn from './ui/AnimateIn'
import ContactForm from './ContactForm'

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
              style={{ color: '#3498db' }}
            >
              Sign Up to Join Us
            </TextAnimate>

            <AnimateIn delay={0.3} className="mb-8">
              <p className="text-base md:text-lg text-neutral-600 text-center md:text-left">
                Sign up and be part of the <span className="font-bold text-primary-600">movement for change</span> in our community.
              </p>
            </AnimateIn>

            <div className="space-y-4">
              <TextAnimate 
                as="p" 
                animation="fadeIn" 
                by="word" 
                delay={0.4} 
                once 
                className="text-base md:text-lg text-black leading-relaxed"
              >
                Join our community and help us build a stronger future together. Your voice matters, and together we can make a difference in our democracy and our communities.
              </TextAnimate>
              <TextAnimate 
                as="p" 
                animation="fadeIn" 
                by="word" 
                delay={0.5} 
                once 
                className="text-base md:text-lg text-black leading-relaxed"
              >
                Every contribution — no matter the size — goes directly toward expanding voter outreach, supporting grassroots organizers, and funding the programs that strengthen our neighborhoods. Your donation helps keep this movement independent, people-powered, and focused on the issues that matter most to working families.
              </TextAnimate>
            </div>
          </div>

          {/* Form Container on Right */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-start">
            <AnimateIn delay={0.4} className="w-full max-w-lg rounded-lg shadow-xl p-6 md:p-8 lg:p-10 mt-8 md:mt-16" style={{ backgroundColor: '#3498db' }}>
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
