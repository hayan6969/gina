import { Mail } from 'lucide-react'
import Button from '../components/Button'
import { useEffect, useRef, useState } from 'react'
import ContactNew from '../components/ContactNew'

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold }
    )

    if (ref.current) observer.observe(ref.current)

    return () => observer.disconnect()
  }, [threshold])

  return { ref, isVisible }
}

export default function AboutPage() {
  const [heroVisible, setHeroVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setHeroVisible(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])

  const messageRef = useInView()
  const workRef = useInView()
  const ctaRef = useInView()
  const handleBookNowClick = () => {
    document.getElementById('contactForm')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }
  return (
    <div className="min-h-screen">
      <style >{`
        .reveal {
          opacity: 0;
          transform: translateY(24px);
          transition:
            opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1),
            transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
          will-change: opacity, transform;
        }

        .reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .reveal-left {
          opacity: 0;
          transform: translateX(-32px);
          transition:
            opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1),
            transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
          will-change: opacity, transform;
        }

        .reveal-left.visible {
          opacity: 1;
          transform: translateX(0);
        }

        .reveal-right {
          opacity: 0;
          transform: translateX(32px);
          transition:
            opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1),
            transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
          will-change: opacity, transform;
        }

        .reveal-right.visible {
          opacity: 1;
          transform: translateX(0);
        }

        .scale-reveal {
          opacity: 0;
          transform: scale(0.96);
          transition:
            opacity 0.8s ease,
            transform 0.8s cubic-bezier(0.22, 1, 0.36, 1);
          will-change: opacity, transform;
        }

        .scale-reveal.visible {
          opacity: 1;
          transform: scale(1);
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative overflow-hidden lg:h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 min-h-[600px] md:min-h-[700px]">
          {/* Left Side - Dark Background */}
          <div
            className="relative p-8 md:p-12 lg:px-16 flex flex-col justify-start overflow-hidden"
            style={{
              backgroundColor: '#0D2B2E',
            }}
          >
            {/* Decorative Donut Pattern - Top Left */}
            <div
              className={`absolute -top-72 -left-[500px] size-[1000px] opacity-5 transition-transform duration-[5000ms] ease-out ${
                heroVisible ? 'scale-100 rotate-0' : 'scale-110 rotate-6'
              }`}
            >
              <svg viewBox="0 0 100 100" className="w-full h-full">
                <circle cx="50" cy="50" r="30" fill="none" stroke="#3DB9A6" strokeWidth="8" />
              </svg>
            </div>

            {/* Glow Effect */}
            <div
              className={`absolute top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 size-[500px] bg-primary/70 rotate-45 blur-3xl opacity-20 pointer-events-none transition-transform duration-[4500ms] ease-out ${
                heroVisible ? 'scale-100' : 'scale-110'
              }`}
            ></div>

            {/* Content */}
            <div
              className={`relative z-10 transition-all duration-1000 ease-out ${
                heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <p
                className={`insights-heading uppercase text-primary mb-4 transition-all duration-1000 ease-out ${
                  heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
              >
                About Gina Greenlee
              </p>

              <h1
                className={`text-4xl md:text-5xl lg:text-6xl font-heading mb-6 leading-tight text-white text-balance transition-all duration-1000 ease-out ${
                  heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '150ms' }}
              >
                Meet
                <br />
                <span className="text-primary italic">Gina Greenlee</span>
              </h1>

              <p
                className={`text-[#FFFFFF99] mb-8 leading-relaxed text-base md:text-lg max-w-xl transition-all duration-1000 ease-out ${
                  heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '300ms' }}
              >
                Gina Greenlee is the founder of GinaG Speaks and is a transformative keynote speaker, facilitator, and learning strategist.
              </p>

              <p
                className={`text-[#FFFFFF99] mb-8 leading-relaxed text-base md:text-lg max-w-xl transition-all duration-1000 ease-out ${
                  heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '450ms' }}
              >
                People are often expected to perform at their best while carrying unseen pressures, navigating constant change, and supporting everyone around them. Gina helps leaders, teams, individuals, and organizations build resilience, leadership capacity, communication skills, and collaborative culture needed to perform with confidence, adaptability, and purpose.
              </p>

              <div
                className={`transition-all duration-1000 ease-out ${
                  heroVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: '600ms' }}
              >
                              <Button variant="primary" onClick={handleBookNowClick}>Book Now</Button>

              </div>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative bg-gray-200 overflow-hidden">
            <img
              src="/ginagabout.jpg"
              alt="Gina Greenlee"
              className={`w-full h-full object-cover transition-transform duration-[4000ms] ease-out ${
                heroVisible ? 'scale-100' : 'scale-110'
              }`}
            />
          </div>
        </div>
      </section>

      {/* Person Message Section */}
      <section
        ref={messageRef.ref}
        className="py-16 md:py-24 bg-[#F2F9FA]"
      >
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div
              className={`reveal-left ${messageRef.isVisible ? 'visible' : ''}`}
            >
              <p className="insights-heading uppercase text-primary mb-4">
                The Person Behind the Message
              </p>
              <h2 className="text-4xl lg:text-5xl font-heading mb-6 text-gray-900 text-balance">
                Topics Rooted in Real Life, Not Surface-Level Motivation
              </h2>
              <p className="text-[#4A7078] mb-6 leading-relaxed text-lg">
                Gina's work is rooted in both professional experience and lived understanding.
              </p>
              <p className="text-[#4A7078] mb-6 text-lg leading-relaxed">
                She knows people are more than their roles, titles, and responsibilities. Behind every team, organization, classroom, and leadership space are human beings carrying hopes, stress, questions, and stories.
              </p>
              <p className="text-[#4A7078] text-lg mb-8 leading-relaxed">
                That understanding gives her work its depth.
              </p>
            </div>

            {/* Right Image */}
            <div
              className={`rounded-lg overflow-hidden scale-reveal  ${
                messageRef.isVisible ? 'visible' : ''
              }`}
              style={{ transitionDelay: '150ms' }}
            >
              <img
                src="/about/sec1.jpg"
                alt="Speaking at event"
                className="w-auto h-auto lg:max-h-[500px] object-cover rounded-lg scale-x-[-1]  "
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why This Work Matters Section */}
      <section
        ref={workRef.ref}
        className="relative py-16 md:py-24 bg-white"
      >
        <div className="absolute top-[10%] right-[4%] w-32 h-32">
          <img src="/work-matters.svg" alt="Work matters" className="w-full h-full" />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Left Image */}
            <div
              className={` col-start-1 row-start-2  md:col-start-1 md:row-start-1 rounded-lg overflow-hidden scale-reveal ${
                workRef.isVisible ? 'visible' : ''
              }`}
            >
              <img
                src="/about/sec2.jpg"
                alt="Speaking engagement"
                className="w-auto h-auto lg:max-h-[500px] object-cover rounded-lg"
              />
            </div>

            {/* Right Content */}
            <div
              className={`relative reveal-right ${
                workRef.isVisible ? 'visible' : ''
              }`}
              style={{ transitionDelay: '150ms' }}
            >
              <div className="relative "></div>

              <p className="insights-heading uppercase text-primary mb-4">
                Why This Work Matters
              </p>
              <h2 className="text-4xl lg:text-5xl font-heading mb-6 text-gray-900 text-balance">
                Creating Spaces Where People Can Truly Grow
              </h2>
              <p className="text-[#4A7078] mb-6 leading-relaxed">
                GinaG Speaks was created from a simple belief: people should not have to lose themselves in order to succeed.
              </p>
              <p className="text-[#4A7078] mb-6 leading-relaxed">
                Through keynotes, workshops, and learning experiences, Gina helps audiences reconnect with their strength, recognize their value, and move through pressure with more intention.
              </p>
              <p className="text-[#4A7078] mb-8 leading-relaxed">
                Her approach blends storytelling, emotional intelligence, reflection, and practical tools so growth feels personal, useful, and lasting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Last Section Before Footer */}
      <section
        ref={ctaRef.ref}
        className="py-16 md:py-24 bg-[#F2F9FA]"
      >
        <div
          className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center reveal ${
            ctaRef.isVisible ? 'visible' : ''
          }`}
        >
          <p className="insights-heading uppercase text-primary mb-6">
            Work With Gina
          </p>

          <h2 className="text-4xl md:text-5xl font-heading lg:text-6xl mb-4 text-gray-900">
            Let&apos;s Build Something
          </h2>

          <p
            className="text-2xl md:text-5xl xl:text-6xl font-heading text-primary mb-8"
            style={{ fontStyle: 'italic' }}
          >
            Together
          </p>

          <p className="text-[#4A7078] mb-8 leading-relaxed max-w-2xl mx-auto text-lg">
            Whether you&apos;re planning a conference, designing a learning program,
            <br />
            or
            <br />
            seeking a speaker who will truly move your audience—this is where meaningful partnership begins.
          </p>

          <div
            className={`transition-all duration-700 ${
              ctaRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '150ms' }}
          >
            <Button variant="primary">Explore Keynote Topics</Button>
          </div>

          <p
            className={`text-primary text-sm md:text-base mt-8 transition-all duration-700 ${
              ctaRef.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
            style={{ transitionDelay: '250ms' }}
          >
            <span className="flex justify-center items-center">
              <Mail size={14} />
            </span>
            gina@ginagspeaks.org
          </p>
        </div>
      </section>

      <ContactNew/>
    </div>
  )
}