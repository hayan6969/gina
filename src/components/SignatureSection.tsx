import { useEffect, useState } from 'react'
import { useInView } from '../hooks/useInView'
import { animationClasses, getRevealDelayStyle } from '../lib/animations'

const topics = [
  {
    icon: '/icons/home/zap.svg',
    title: 'Resilience & Empowerment',
    description: 'Helping people grow through pressure without disconnecting from their well-being, values, or sense of self.',
  },
  {
    icon: '/icons/home/leadership.svg',
    title: 'Human-Centered Leadership',
    description: 'Guiding teams and leaders toward healthier patterns of performance, restoration, and long-term growth.',
  },
  {
    icon: '/icons/home/eq.svg',
    title: 'Emotional Intelligence & Communication',
    description: 'Communicating with clarity and intention, navigating conversations with confidence and professionalism.',
  },
  {
    icon: '/icons/home/change.svg',
    title: 'Navigating Change',
    description: 'Helping individuals and teams move through uncertainty with adaptability, self-awareness, and grounded confidence.',
  },
  {
    icon: '/icons/home/growth.svg',
    title: 'Personal Growth',
    description: 'Helping organizations build healthier cultures where people can pursue excellence without losing connection, care, and dignity.',
  },
  {
    icon: '/icons/home/success.svg',
    title: 'Sustainable Success',
    description: 'Guiding teams and leaders toward healthier patterns of performance, restoration, and long-term growth.',
  },
]

export default function SignatureSection() {
  const { ref, isInView } = useInView<HTMLElement>({threshold: 0.1})
  const [gridBackgroundVisible, setGridBackgroundVisible] = useState(false)

  useEffect(() => {
    if (!isInView) {
      setGridBackgroundVisible(false)
      return
    }

    const timeoutId = window.setTimeout(() => {
      setGridBackgroundVisible(true)
    }, 700)

    return () => window.clearTimeout(timeoutId)
  }, [isInView])

  return (
    <section ref={ref} className="py-20 md:py-28 bg-white">

{/* two circles with border placed absolute right top and absolute right bottom in center of both sections one small circleis #C8963C26 and other bigger is #1B5C5226 bordered with bg color transparent and border color #C8963C26 and #1B5C5226 respectively with opacity 70% and pointer events none */}
<div className="absolute  top-0 sm:-left-[230px] bg-transparent border z-0 border-[#C8963C26] rounded-full w-[200px] h-[200px] sm:w-[300px] sm:h-[300px]   opacity-100 pointer-events-none">
</div>

<div className="absolute  -top-[100px] -left-[370px] bg-transparent border z-0 border-[#1B5C5226] rounded-full w-[500px] h-[500px]   opacity-100 pointer-events-none">
</div>


      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* <SectionHeading
          preheading="Signature Conversations"
          heading="Topics that Move People"
          subheading="Forward"
          centered
          description="Each conversation is designed with emotional nuance and practical value—creating interest that becomes action."
        /> */}
        <section className={`${animationClasses.revealLeft} ${isInView ? animationClasses.visible : ''} bg-white`} style={getRevealDelayStyle(0)}>
          <p className="insights-heading text-primary mb-4">
            Signature Conversations
          </p>
          <h2 className="text-4xl md:text-5xl font-heading  text-gray-900 mb-6 leading-tight text-balance">
            Topics that Move People<br />Forward
          </h2>
          <p className="text-gray-600 mb-8 leading-relaxed">
            Each conversation is designed with emotional nuance and practical value—creating interest that becomes action.
          </p>
        </section>


        <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16 gap-[2px] bg-[#C8E6EA]" style={{ backgroundColor: 'transparent' }}>
          <div className={`absolute inset-0 bg-[#C8E6EA] opacity-0 transition-opacity duration-300 ${gridBackgroundVisible ? 'opacity-100' : ''}`} />
          {topics.map((topic, index) => (
            <div
              key={index}
              className={`${animationClasses.reveal} ${isInView ? animationClasses.visible : ''} p-8 bg-white relative z-10 transition-all duration-300`}
              style={getRevealDelayStyle(120 * index)}
            >
              <div className="w-12 h-12 mb-6">
                <img src={topic.icon} alt={topic.title} className="w-full h-full" />
              </div>
              <h3 className="text-lg font-heading font-bold xl:text-xl text-gray-900 mb-3">
                {topic.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {topic.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
