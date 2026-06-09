import Button from './Button'
import { useInView } from '../hooks/useInView'
import { animationClasses, getRevealDelayStyle } from '../lib/animations'

export default function FounderSection() {
  const { ref, isInView } = useInView<HTMLElement>()

  return (
    <section ref={ref} className="py-20 md:py-28 bg-[#F2F9FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className={`${animationClasses.revealRight} ${isInView ? animationClasses.visible : ''}`} style={getRevealDelayStyle(0)}>
            <p className="insights-heading text-primary mb-4">
              Meet Our Founder
            </p>
            <h2 className="text-4xl md:text-5xl font-heading  text-gray-900 mb-6 leading-tight text-balance">
              Meet Gina Greenlee
            </h2>

            <p className="text-gray-600 mb-6 leading-relaxed">
              Gina Greenlee is a transformational speaker, facilitator, and learning leader whose work is rooted in resilience, emotional intelligence, and human-centered growth.
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed">
              People connect with Gina because she brings authenticity, wisdom, and lived experience into her work. Her audiences often leave feeling seen, encouraged, challenged, and equipped with something meaningful they can use.
            </p>

            <Button variant="primary">Learn More About Gina</Button>
          </div>

          {/* Right Column - Image */}
          <div className="flex justify-center">
            <div className={`${animationClasses.scaleReveal} ${isInView ? animationClasses.visible : ''} relative w-full max-w-sm`} style={getRevealDelayStyle(120)}>
              <img
                src="/ginagpic1.jpg"
                alt="Gina Greenlee"
                className="w-full h-auto object-cover   shadow-2xl shadow-[#3C929D]/5 "
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
