import { useInView } from '../hooks/useInView'
import HeroSection from '../components/HeroSection'
import WhyChooseSection from '../components/WhyChooseSection'
import InsightsSection from '../components/InsightsSection'
import KeynotesSection from '../components/KeynotesSection'
import SignatureSection from '../components/SignatureSection'
import FounderSection from '../components/FounderSection'
import CTASection from '../components/CTASection'
import { animationClasses } from '../lib/animations'
import ContactNew from '../components/ContactNew'

export default function HomePage() {
  const { ref, isInView } = useInView<HTMLDivElement>()

  return (
    <div>
      <HeroSection />

      {/* Spacer for stats card */}
      {/* <div className="h-40 md:h-32" /> */}

      <WhyChooseSection />
      <InsightsSection />
      <KeynotesSection />
      <div className="relative overflow-hidden">
        <SignatureSection />
        {/* image circle placed at mid absolute right in center of both sections
         */}
        <div ref={ref} className={`${animationClasses.fadeReveal} ${isInView ? animationClasses.visible : ''} absolute top-[40%] -right-96 transform translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] z-0`}>
          <img
            src="/icons/border.svg"
            alt="Decorative circle graphic"
            className="w-full h-full object-contain"
            loading="lazy"
          />
        </div>
        <FounderSection />
      </div>
      <CTASection />

      <ContactNew/>
    </div>
  )
}
