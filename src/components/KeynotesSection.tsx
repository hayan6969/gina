import Button from './Button'
import { useInView } from '../hooks/useInView'
import { animationClasses, getRevealDelayStyle } from '../lib/animations'
import { Link } from 'react-router-dom'

const keynotes = [
  {
    title: 'Keynote Speaking',
    description: 'Signature talks designed for your audience and goals.',
  },
  {
    title: 'Workshops',
    description: 'Interactive, hands-on sessions that drive skill-building.',
  },
  {
    title: 'Learning Experiences',
    description: 'Full-day, tailored to organizational needs.',
  },
  {
    title: 'Breakout Sessions',
    description: 'Focused sessions that deepen conference impact.',
  },
]

export default function KeynotesSection() {
  const { ref, isInView } = useInView<HTMLElement>()

  return (
    <section ref={ref} className="py-20 md:py-28 bg-[#F2F9FA] relative overflow-hidden">

    {/* planet image top right */}
        <div className="absolute top-0 right-0  w-[400px] h-[400px] z-0">
          <img
            src="/icons/home/planet.svg"
            alt="Decorative planet graphic"
            className="w-full h-full object-contain"
            loading="lazy"
          />
        </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 relative">
        <div className=" flex flex-col md:flex-row md:gap-12 items-start md:items-start">
          {/* Left Column */}
          <div className={`${animationClasses.revealLeft} ${isInView ? animationClasses.visible : ''} md:w-1/2 lg:w-[45%] mb-12 md:mb-0`} style={getRevealDelayStyle(0)}>
            <p className= "insights-heading text-primary mb-4">
              Keynotes, Workshops & Learning Experiences
            </p>
            <h2 className="text-4xl md:text-5xl font-heading  text-gray-900 mb-6 leading-tight text-balance">
              For Organizations That<br />Want More Than<br />Surface-Level<br />Encouragement
            </h2>

            <p className="text-gray-600 mb-8 leading-relaxed">
              GinaG Speaks offers transformational experiences for organizations, teams, leaders, educators, and communities that want more than surface-level encouragement.
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Whether Gina is delivering a keynote, guiding a workshop, or facilitating a custom experience, the goal remains the same: help people feel understood, think with more honesty, and grow with purpose.
            </p>

            <div className={`${animationClasses.reveal} ${isInView ? animationClasses.visible : ''}`} style={getRevealDelayStyle(320)}>
             <Link to="/keynotes" > <Button variant="primary">View Keynote Topics</Button></Link>
            </div>
          </div>

          {/* Right Column - Grid of Offerings */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:w-1/2  ">
            {keynotes.map((item, index) => (
              <div
                key={index}
                className={`${index % 2 === 0 ? animationClasses.revealLeft : animationClasses.revealRight} ${isInView ? animationClasses.visible : ''} p-6 border-b-2 border-[#3C929D] bg-white`}
                style={getRevealDelayStyle(120 * index)}
              >
                <h3 className="text-lg font-heading  font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
              <p className="text-sm text-[#4A7078] leading-relaxed xl:w-[95%]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
