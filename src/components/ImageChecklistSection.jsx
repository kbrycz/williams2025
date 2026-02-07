import sectionImage from '../assets/about-intro.png'
import { TextAnimate } from '@/components/ui/text-animate'
import AnimateIn from './ui/AnimateIn'
import siteData from '../config/siteData'
import { colors } from '@/config/colors'

function CheckIcon() {
  return (
    <svg
      className="w-7 h-7 flex-shrink-0"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 12.75L11.25 15L15 9.75M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
        stroke={colors.primary[500]}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ImageChecklistSection() {
  return (
    <section className="w-full py-16 md:py-24 px-6 md:px-12 lg:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 lg:gap-16">
          {/* Image on Left */}
          <AnimateIn delay={0} className="w-full md:w-1/2 flex justify-center">
            <img
              src={sectionImage}
              alt="Community involvement"
              className="w-full max-w-xl h-auto block rounded-lg"
              style={{
                filter: 'drop-shadow(0 8px 16px rgba(0, 0, 0, 0.2))',
              }}
            />
          </AnimateIn>

          {/* Checklist Content on Right */}
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
              {siteData.checklist.heading}
            </TextAnimate>

            <AnimateIn delay={0.3} className="mb-8">
              <p className="text-base md:text-lg text-neutral-600 text-center md:text-left">
                {siteData.checklist.subheading}
              </p>
            </AnimateIn>

            <ul className="space-y-5">
              {siteData.checklist.items.map((item, index) => (
                <AnimateIn
                  key={item}
                  delay={0.4 + index * 0.1}
                  animation="slideLeft"
                >
                  <li className="flex items-center gap-4">
                    <CheckIcon />
                    <span className="text-lg md:text-xl font-semibold text-neutral-800">
                      {item}
                    </span>
                  </li>
                </AnimateIn>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ImageChecklistSection
