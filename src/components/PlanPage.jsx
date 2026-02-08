import { Link } from 'react-router-dom'
import Footer from './Footer'
import AnimateIn from './ui/AnimateIn'
import { TextAnimate } from '@/components/ui/text-animate'
import img1Image from '../assets/plan-intro.png'
import img4Image from '../assets/plan-cta.png'
import siteData from '../config/siteData'

function PlanPage() {
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
                  {siteData.plan.sectionLabel}
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
                {siteData.plan.headline}
              </TextAnimate>

              {siteData.plan.intro.map((paragraph, index) => (
                <AnimateIn key={index} delay={0.3 + index * 0.1}>
                  <p className="text-neutral-600 text-lg leading-relaxed mb-6">
                    {paragraph}
                  </p>
                </AnimateIn>
              ))}
            </div>

            {/* Image */}
            <AnimateIn delay={0.2} className="order-first lg:order-last">
              <div className="w-full overflow-hidden rounded-2xl shadow-xl">
                <img
                  src={img1Image}
                  alt={`${siteData.candidate.fullName} connecting with the community`}
                  className="w-full aspect-[16/10] object-cover"
                />
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      {/* ===== SECTION 2: Timeline (Primary Color Background) ===== */}
      <section className="w-full py-16 md:py-20 lg:py-24 bg-primary-500">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <AnimateIn delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 text-center">
              {siteData.plan.timelineHeading}
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.15}>
            <p className="text-white/80 text-lg text-center max-w-2xl mx-auto mb-14 lg:mb-16">
              {siteData.plan.timelineSubheading}
            </p>
          </AnimateIn>

          {/* Timeline */}
          <div className="relative">
            {/* Center line (desktop only) */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-white/30 -translate-x-1/2" />

            <div className="space-y-12 lg:space-y-16">
              {siteData.plan.timeline.map((item, index) => {
                const isLeft = index % 2 === 0
                return (
                  <AnimateIn key={index} delay={0.2 + index * 0.1} animation={isLeft ? 'slideRight' : 'slideLeft'}>
                    <div className={`relative flex flex-col lg:flex-row items-center gap-6 lg:gap-0 ${isLeft ? '' : 'lg:flex-row-reverse'}`}>
                      {/* Content Card */}
                      <div className={`w-full lg:w-[calc(50%-2rem)] ${isLeft ? 'lg:pr-0 lg:text-right' : 'lg:pl-0 lg:text-left'}`}>
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-white/20">
                          <span className="inline-block text-xs font-bold uppercase tracking-widest text-secondary-400 mb-2">
                            {item.label}
                          </span>
                          <h3 className="text-xl md:text-2xl font-bold text-white mb-3">
                            {item.title}
                          </h3>
                          <p className="text-white/85 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>

                      {/* Center Dot (desktop) */}
                      <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-secondary-500 border-4 border-primary-500 items-center justify-center">
                        <div className="w-2 h-2 rounded-full bg-white" />
                      </div>

                      {/* Spacer for the other side */}
                      <div className="hidden lg:block w-[calc(50%-2rem)]" />
                    </div>
                  </AnimateIn>
                )
              })}
            </div>

          </div>
        </div>
      </section>

      {/* ===== SECTION 3: Core Priorities (White Background) ===== */}
      <section className="w-full bg-white py-20 md:py-28 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <AnimateIn delay={0.1}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 mb-6 text-center">
              {siteData.plan.prioritiesHeading}
            </h2>
          </AnimateIn>
          <AnimateIn delay={0.15}>
            <p className="text-neutral-600 text-lg text-center max-w-2xl mx-auto mb-14 lg:mb-16">
              {siteData.plan.prioritiesSubheading}
            </p>
          </AnimateIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {siteData.plan.priorities.map((priority, index) => (
              <AnimateIn key={index} delay={0.2 + index * 0.1}>
                <div className="bg-neutral-50 rounded-2xl p-6 h-full border border-neutral-100 hover:shadow-lg transition-shadow duration-300">
                  <div className="w-12 h-12 rounded-xl bg-primary-500 flex items-center justify-center mb-4">
                    <span className="text-white font-bold text-sm">{priority.number}</span>
                  </div>
                  <h3 className="text-neutral-900 font-bold text-lg mb-2">{priority.title}</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">{priority.description}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SECTION 4: Call to Action (Primary Color Background) ===== */}
      <section className="w-full py-16 md:py-20 lg:py-24 bg-primary-600">
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text + Buttons */}
            <div>
              <AnimateIn delay={0.1}>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                  {siteData.plan.ctaHeading}
                </h2>
              </AnimateIn>
              <AnimateIn delay={0.2}>
                <p className="text-white/90 text-lg leading-relaxed mb-8">
                  {siteData.plan.ctaText}
                </p>
              </AnimateIn>
              <AnimateIn delay={0.3}>
                <div className="flex flex-wrap gap-4">
                  <a
                    href={siteData.campaign.donateUrl}
                    className="bg-secondary-500 hover:bg-secondary-400 text-white font-bold px-8 py-3 rounded-md text-sm uppercase tracking-widest transition-all duration-200 hover:scale-105 hover:shadow-lg active:scale-95 inline-block"
                  >
                    Donate Now
                  </a>
                  <Link
                    to="/contact"
                    className="border-2 border-white text-white font-bold px-8 py-3 rounded-md text-sm uppercase tracking-widest transition-all duration-200 hover:bg-white hover:text-primary-600 hover:scale-105 hover:shadow-lg active:scale-95 no-underline"
                  >
                    Contact Us
                  </Link>
                </div>
              </AnimateIn>
            </div>

            {/* Image */}
            <AnimateIn delay={0.2}>
              <div className="w-full overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src={img4Image}
                  alt={`${siteData.candidate.fullName} connecting with supporters`}
                  className="w-full aspect-[16/10] object-cover"
                />
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default PlanPage
