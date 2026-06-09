import { useInView } from '../hooks/useInView'
import SectionHeading from './SectionHeading'
import { ArrowRight } from 'lucide-react'
import { animationClasses, getRevealDelayStyle } from '../lib/animations'

const benefits = [
  'Warmth, wisdom, honesty, and practical insight',
  'Audiences understand themselves more clearly',
  'Reconnection with inner strength and capacity',
  'Movement from survival mode into intentional action',
  'Honor for the personal weight people carry behind the scenes',
  'Spaces where people feel seen, strengthened, and equipped',
]

export default function WhyChooseSection() {
  const { ref, isInView } = useInView<HTMLElement>()

  return (
    <section ref={ref} className="py-20 md:py-28 bg-primary-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div className={`${animationClasses.revealLeft} ${isInView ? animationClasses.visible : ''}`} style={getRevealDelayStyle(0)}>
            <SectionHeading
              preheading="Why Choose GinaG Speaks"
              heading="When People Are"
              subheading="Carrying More Than They Show"
              description="Behind many workplace challenges are people trying to keep going under pressure."
            />

            <p className="text-gray-600 mt-6 mb-6 leading-relaxed">
              What looks like poor communication, low morale, conflict, or burnout often comes from something deeper. People are tired, leaders are stretched, and teams are trying to adapt while still performing.
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Gina brings warmth, honesty, and practical insight into the room, helping audiences reconnect with their strength and move from survival mode into intentional action.
            </p>

            {/* The Result Box */}
            <div className="border-l-4 border-[#3C929D] pl-6 py-4 bg-white rounded-r-lg">
              <p className="font-semibold font-body text-[#3C929D] text-sm uppercase tracking-wider mb-2">The Result</p>
              <p className="text-gray-700 italic">
                Stronger leaders, more resilient teams, and a workforce prepared to perform, adapt, and thrive in a rapidly evolving environment.
              </p>
            </div>
          </div>

          {/* Right Column - Benefits List */}
          <div className={`${animationClasses.revealRight} ${isInView ? animationClasses.visible : ''}`} style={getRevealDelayStyle(120)}>
            <h3 className="text-2xl lg:text-3xl xl:text-4xl md:mt-7 lg:mt-10 font-heading text-[#0D2B2E] font-semibold mb-6">
              GinaG Speaks Delivers
            </h3>
            <div className="flex flex-col">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className={`${animationClasses.reveal} ${isInView ? animationClasses.visible : ''} flex gap-5 items-start py-5 border-b border-gray-200/80`}
                  style={getRevealDelayStyle(100 * index)}
                >
                  <ArrowRight
                    // You can replace the hex code with "text-primary" if your Tailwind theme handles it
                    className={`${animationClasses.scaleReveal} ${isInView ? animationClasses.visible : ''} text-[#42888A] flex-shrink-0 mt-0.5`}
                    style={getRevealDelayStyle(80 + index * 100)}
                    size={22}
                    strokeWidth={1.25}
                  />
                  <p className="text-gray-800 text-lg leading-relaxed">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>


        </div>
      </div>
    </section>
  )
}
