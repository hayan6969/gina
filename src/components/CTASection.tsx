import Button from './Button'
import { useInView } from '../hooks/useInView'
import { animationClasses, getRevealDelayStyle } from '../lib/animations'

export default function CTASection() {
  const { ref, isInView } = useInView<HTMLElement>()

  return (
    <section ref={ref} className="py-20 md:py-28 bg-white">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className={`${animationClasses.reveal} ${isInView ? animationClasses.visible : ''} insights-heading text-primary mb-4`} style={getRevealDelayStyle(0)}>
          Bring GinaG Speaks to Your Organization
        </p>
        
        <h2 className={`${animationClasses.reveal} ${isInView ? animationClasses.visible : ''} text-4xl md:text-5xl xl:text-6xl font-heading  text-gray-900 mb-6 text-balance`} style={getRevealDelayStyle(120)}>
          Ready to Create Something<br />
          <span className="text-primary italic">Meaningful?</span>
        </h2>

        <p className={`${animationClasses.reveal} ${isInView ? animationClasses.visible : ''} text-lg text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed`} style={getRevealDelayStyle(240)}>
          Partner with GinaG Speaks to create lasting transformation, where leaders are inspired, teams are equipped, and communities are empowered to thrive.
        </p>

        {/* Interest Tags */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {[
            'Keynote Speaking Inquiry',
            'Breakout Session Request',
            'Customized Learning Solutions',
            'Workshop or Training Request',
            'Coaching or Strategy Session',
            'Post-Event Follow-Up',
          ].map((tag, index) => (
            <div
              key={index}
              className={`${animationClasses.reveal} ${isInView ? animationClasses.visible : ''} px-4 py-2 border border-[#8CC8D0]  text-sm text-[#4A7078] hover:border-primary hover:text-primary transition-colors cursor-pointer`}
              style={getRevealDelayStyle(320 + 90 * index)}
            >
              {tag}
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <Button variant="primary" className={`${animationClasses.reveal} ${isInView ? animationClasses.visible : ''} mb-4 tracking-wider`} style={getRevealDelayStyle(840)}>
          Start the Conversation
        </Button>

        {/* Contact Info */}
        <a href="mailto:gina@ginagspeaks.org" className={`${animationClasses.reveal} ${isInView ? animationClasses.visible : ''} block text-sm text-[#3C929D] mt-4 hover:text-primary transition-colors`} style={getRevealDelayStyle(960)}>
          {/* <MailIcon className="inline-block mr-2 " size={16} /> */}✉
          gina@ginagspeaks.org
        </a>
      </div>
    </section>
  )
}
