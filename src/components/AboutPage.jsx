import Footer from './Footer'
import AnimateIn from './ui/AnimateIn'
import { TextAnimate } from '@/components/ui/text-animate'
import sectionImage from '../assets/about-intro.png'
import t2Image from '../assets/candidate-portrait.png'
import img2Image from '../assets/video-thumbnail.png'
import siteData from '../config/siteData'

function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* ===== SECTION 1: Intro (White Background) ===== */}
      <section className="w-full bg-white pt-10 pb-20 md:pt-14 md:pb-24 lg:pt-16 lg:pb-28">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text Content */}
            <div className="order-last lg:order-first">
              <AnimateIn delay={0.1}>
                <p className="text-sm font-bold uppercase tracking-widest mb-4 text-primary-500">
                  {siteData.about.sectionLabel}
                </p>
              </AnimateIn>
              <TextAnimate
                as="h1"
                animation="fadeIn"
                by="word"
                delay={0.15}
                once
                className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6 leading-tight"
              >
                {siteData.about.headline}
              </TextAnimate>
              {siteData.about.intro.map((paragraph, index) => (
                <AnimateIn key={index} delay={0.3 + index * 0.1}>
                  <p className="text-neutral-600 text-lg leading-relaxed mb-6">
                    {paragraph}
                  </p>
                </AnimateIn>
              ))}
            </div>

            {/* Image */}
            <AnimateIn delay={0.2} className="w-full flex justify-center order-first lg:order-last">
              <img
                src={sectionImage}
                alt="Community gathering"
                className="w-full max-w-xl h-auto block rounded-2xl"
                style={{
                  filter: 'drop-shadow(0 8px 16px rgba(0, 0, 0, 0.2))',
                  transform: 'rotate(3deg)',
                }}
              />
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ===== SECTION 2: Bio (Primary Color Background) ===== */}
      <section className="w-full py-16 md:py-20 lg:py-24 bg-primary-500">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <AnimateIn delay={0.1} className="hidden lg:block">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-10 lg:mb-12 text-center">
              {siteData.about.bioHeading}
            </h2>
          </AnimateIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image */}
            <AnimateIn delay={0.2}>
              <div className="w-full overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={t2Image}
                  alt={`${siteData.candidate.fullName} in the community`}
                  className="w-full aspect-[16/10] object-cover"
                />
              </div>
            </AnimateIn>

            {/* Bio Text */}
            <div>
              <AnimateIn delay={0.1} className="lg:hidden">
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
                  {siteData.about.bioHeading}
                </h2>
              </AnimateIn>
              {siteData.about.bio.map((paragraph, index) => (
                <AnimateIn key={index} delay={0.3 + index * 0.1}>
                  <p className="text-white/90 text-lg leading-relaxed mb-6">
                    {paragraph}
                  </p>
                </AnimateIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== SECTION 3: Highlights (White Background) ===== */}
      <section className="w-full bg-white py-20 md:py-28 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <AnimateIn delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6 text-center">
              {siteData.about.trackRecordHeading}
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.15}>
            <p className="text-neutral-600 text-lg text-center max-w-2xl mx-auto mb-14 lg:mb-16">
              {siteData.about.trackRecordSubheading}
            </p>
          </AnimateIn>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Image - shows first on mobile, last on desktop */}
            <AnimateIn delay={0.2} className="order-first lg:order-last">
              <div className="w-full overflow-hidden rounded-2xl shadow-xl">
                <img
                  src={img2Image}
                  alt={`${siteData.candidate.fullName} meeting with community members`}
                  className="w-full aspect-square object-cover"
                />
              </div>
            </AnimateIn>

            {/* Accomplishments */}
            <div className="space-y-8 order-last lg:order-first">
              {siteData.about.accomplishments.map((item, index) => (
                <AnimateIn key={index} delay={0.3 + index * 0.1}>
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-primary-500 flex items-center justify-center mt-0.5">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-neutral-900 font-bold text-lg mb-1">{item.title}</h3>
                      <p className="text-neutral-600 leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </AnimateIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default AboutPage
