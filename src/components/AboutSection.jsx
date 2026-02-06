import AnimateIn from './ui/AnimateIn'
import { TextAnimate } from '@/components/ui/text-animate'
import t2Image from '../assets/t2.png'

function AboutSection() {
  return (
    <section className="w-full py-16 md:py-20 lg:py-24" style={{ backgroundColor: '#273c75' }}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="text-center mb-10 lg:mb-12">
          <TextAnimate
            as="h2"
            animation="fadeIn"
            by="word"
            delay={0.1}
            once
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight tracking-tight"
          >
            About James
          </TextAnimate>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <AnimateIn delay={0.2}>
            <div className="w-full overflow-hidden rounded-lg shadow-2xl">
              <img
                src={t2Image}
                alt="James Harper in the community"
                className="w-full aspect-[16/10] object-cover"
              />
            </div>
          </AnimateIn>

          {/* Bio Text */}
          <div>
            <AnimateIn delay={0.3}>
              <p className="text-white/90 text-lg leading-relaxed mb-6">
                <strong className="text-white">James Harper was born and raised right here in our community.</strong> Economic hardship and a system that too often looked the other way shaped his determination to fight for something better.
              </p>
            </AnimateIn>
            <AnimateIn delay={0.4}>
              <p className="text-white/90 text-lg leading-relaxed mb-6">
                A community organizing program opened the door to public service. James found his voice, discovered his purpose, and built a belief that change was possible — <strong className="text-white">not someday, but now</strong>.
              </p>
            </AnimateIn>
            <AnimateIn delay={0.5}>
              <p className="text-white/90 text-lg leading-relaxed">
                Today, James continues the fight — standing up for working families and making sure <strong className="text-white">every voice in our community is heard</strong>.
              </p>
            </AnimateIn>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
