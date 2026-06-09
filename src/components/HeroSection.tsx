import { useEffect, useState } from 'react'
import Button from './Button'
import { animationClasses, getRevealDelayStyle } from '../lib/animations'
import { Link } from 'react-router-dom'

const trustImages = [
  '/trust/Ellipse 1.png',
  '/trust/Ellipse 2.png',
  '/trust/Ellipse 3.png',
  '/trust/Ellipse 4.png',
  '/trust/Ellipse 5.png',
]

export default function HeroSection() {
  const [heroVisible, setHeroVisible] = useState(() => {
    return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  })

  const handleBookNowClick = () => {
    document.getElementById('contactForm')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  useEffect(() => {
    if (heroVisible) {
      return
    }

    const animationFrame = window.requestAnimationFrame(() => {
      setHeroVisible(true)
    })

    return () => window.cancelAnimationFrame(animationFrame)
  }, [heroVisible])

  return (
    <section
      className="relative h-screen flex items-stretch w-full overflow-hidden"
      style={{ backgroundColor: '#0D2B2E' }}
    >
      <div className="absolute   -bottom-96 -left-20 transform  rotate-[150deg]     w-[800px] h-[800px] ">
        <img
          src="/icons/border.svg"
          alt="Gina Greenlee speaking to professionals"
          className="w-full h-full object-contain"
          loading="lazy"
        />
      </div>
      
      <div className="flex w-full z-10">
        <div className="absolute top-1/2 left-[30%] transform -translate-x-1/2 -translate-y-[40%] w-[700px] h-[500px] bg-primary/90 rotate-45 blur-3xl opacity-20 pointer-events-none "></div>
         
        {/* <BorderCircleLight/> */}

        {/* Left Content Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center lg:justify-start  px-6 sm:px-8 lg:px-12 py-12 md:py-0">
        
          <div className=" lg:max-w-[90%] lg:mt-9  xl:mt-13">
            <p
              className={`${animationClasses.reveal} ${heroVisible ? animationClasses.visible : ''} text-sm font-medium tracking-widest uppercase text-primary mb-4 flex items-center gap-2`}
              style={getRevealDelayStyle(0)}
            >
              <span className="w-6 h-px bg-primary"></span>
              Transform Your People. Elevate Your Performance.
            </p>

            <h1
              className={`${animationClasses.reveal} ${heroVisible ? animationClasses.visible : ''} text-4xl md:text-5xl  2xl:text-6xl font-heading  font-light text-white mb-6 leading-tight`}
              style={getRevealDelayStyle(150)}
            >
              Transforming <span className="text-primary italic">Mindsets</span>.<br />
              Empowering <span className="text-primary italic">Leaders</span>.<br />
              Creating Lasting <span className="text-primary italic">Impact</span>.
            </h1>

            <p
              className={`${animationClasses.reveal} ${heroVisible ? animationClasses.visible : ''} text-base font-light md:text-lg text-[#FFFFFF94] mb-8 leading-relaxed`}
              style={getRevealDelayStyle(300)}
            >
              Helping leaders and teams move beyond survival and start thriving—with resilience, clarity, and purpose-driven growth.
            </p>

            {/* CTA Buttons */}
            <div
              className={`${animationClasses.reveal} ${heroVisible ? animationClasses.visible : ''} flex items-center gap-4 mb-8`}
              style={getRevealDelayStyle(450)}
            >
              <div className="flex -space-x-7">
                {trustImages.map((src, index) => (
                  <div
                    key={src}
                    className="w-10 h-10 rounded-full   flex-shrink-0 overflow-hidden bg-[#0D2B2E]"
                  >
                    <img
                      src={src}
                      alt={`Trust badge ${index + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-300 font-medium font-body">
                Trusted By 250+ Professionals.
              </p>
            </div>

            <div
              className={`${animationClasses.reveal} ${heroVisible ? animationClasses.visible : ''} flex flex-col sm:flex-row gap-4 mb-12`}
              style={getRevealDelayStyle(600)}
            >
              <Button variant="primary" onClick={handleBookNowClick}>Book Now</Button>
              <Link to="/keynotes" >
              <button className="px-6 py-3 text-primary font-medium  transition-all flex items-center gap-2 group">
                <span className="hover:underline underline-offset-4">                Explore Keynotes </span><span className="group-hover:translate-x-1 transition-transform">→</span>
              </button></Link>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-6  ">
              <div>
                <p className="text-3xl md:text-4xl font-heading  text-primary mb-1">25k+</p>
                <p className="text-xs md:text-sm text-gray-400">Professionals Impacted</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-heading  text-primary mb-1">95%</p>
                <p className="text-xs md:text-sm text-gray-400">Positive Engagement</p>
              </div>
              <div>
                <p className="text-3xl md:text-4xl font-heading  text-primary mb-1">100+</p>
                <p className="text-xs md:text-sm text-gray-400">Events Led</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="hidden md:block w-1/2 h-full overflow-hidden">
          <img
            src="/homehero.jpg"
            alt="Gina Greenlee speaking to professionals"
            className={`w-full h-full object-cover transition-transform duration-[4000ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${heroVisible ? 'scale-100' : 'scale-[1.08]'}`}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  )
}
