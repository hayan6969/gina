import { useInView } from '../hooks/useInView'
import { animationClasses, getRevealDelayStyle } from '../lib/animations'

const insights = [
  'Resilience & Empowerment',
  'Leadership Excellence',
  'Effective Communication',
  'Conflict Resolution',
  'Personal Growth',
  'Team Collaboration',
]

export default function InsightsSection() {
  const { ref, isInView } = useInView<HTMLElement>()

  return (
    <section ref={ref} className=" bg-dark-bg text-white relative overflow-hidden">
      <div className=" mx-auto  ">
      
        <div className="absolute top-0 right-0 bg-transparent border z-0 border-[#FFFFFF1F] rounded-full w-[500px] h-[500px] transform translate-x-1/2 -translate-y-1/2 opacity-70 pointer-events-none"> 


        
        </div>




        <div className="absolute top-0 right-0 bg-transparent border z-0 border-[#FFFFFF1F] rounded-full w-[700px] h-[700px] transform translate-x-1/2 -translate-y-1/2 opacity-70 pointer-events-none"> 
        </div>



        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center  relative z-10">
          {/* Left - Image */}
          <div className={`${animationClasses.scaleReveal} ${isInView ? animationClasses.visible : ''} relative w-full overflow-hidden h-96 md:h-full `} style={getRevealDelayStyle(0)}>
            <img
              src="/homehero.jpg"
              alt="Speaking engagement"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div 
              className="absolute inset-0"
              style={{
                background: 'linear-gradient(0deg, rgba(13, 43, 46, 0.8) 0%, rgba(13, 43, 46, 0) 50%), linear-gradient(90deg, rgba(13, 43, 46, 0.92) 0%, rgba(13, 43, 46, 0.6) 60%, rgba(13, 43, 46, 0.3) 100%)'
              }}
            />
          </div>

          {/* Right - Content */}
          <div className="px-6 sm:px-8 lg:px-12 py-12 md:py-20">
            <p className={`${animationClasses.reveal} ${isInView ? animationClasses.visible : ''} insights-heading text-primary mb-4`} style={getRevealDelayStyle(0)}>
              What GinaG Speaks Helps People Build
            </p>
            <h2 className={`${animationClasses.reveal} ${isInView ? animationClasses.visible : ''} text-4xl md:text-5xl font-light font-heading  mb-6 leading-tight text-balance`} style={getRevealDelayStyle(120)}>
              From Insight to <span className="text-primary italic">Impact</span>
            </h2>
            
            <p className={`${animationClasses.reveal} ${isInView ? animationClasses.visible : ''} text-gray-300/50 mb-8 leading-relaxed`} style={getRevealDelayStyle(240)}>
              Real transformation happens when insight is put into action. GinaG Speaks turns meaningful ideas into decisive steps.
            </p>

            <div className="space-y-0">
              {insights.map((insight, index) => (
                <div 
                  key={index} 
                  className={`${animationClasses.reveal} ${isInView ? animationClasses.visible : ''} flex items-center gap-3 group cursor-pointer py-4 px-4 -mx-4 border-b border-[#3C7A7CD1]`}
                  style={getRevealDelayStyle(120 * index)}
                >
                  <span className="text-gray-300 font-bold text-lg flex-shrink-0">+</span>
                  <p className="text-gray-300 text-lg lg:text-xl 2xl:text-2xl font-heading font-semibold group-hover:text-white transition-colors">{insight}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
