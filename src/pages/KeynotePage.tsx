
import { ArrowRight, MailIcon } from 'lucide-react'
import Button from '../components/Button'
import { useState, useEffect, useRef } from 'react'
import NewKeynoteSec from '../components/NewKeynote'
import ContactNew from '../components/ContactNew'

function useInView(threshold = 0.2) {
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

export default function KeynotePage() {
  const findingYourFitSteps = [
    {
      number: '1',
      title: 'Identify Your Goal',
      description: 'Start with what your audience most needs to walk away feeling, knowing, or ready to do. That clarity drives everything.'
    },
    {
      number: '2',
      title: 'Consider Your Audience',
      description: 'Each topic is designed to meet different people where they are—whether executives, emerging leaders, or community members.'
    },
    {
      number: '3',
      title: 'Connect With Gina',
      description: 'Every GinaG Speaks experience is customized. A brief conversation ensures the keynote is shaped around your specific context and outcomes.'
    }
  ]

  const philosophyRef = useInView(0.3)
  const fitRef = useInView(0.3)
  const ctaRef = useInView()

  const [heroVisible, setHeroVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setHeroVisible(true)
    }, 100)

    return () => clearTimeout(timer)
  }, [])


  const handleBookNowClick = () => {
    document.getElementById('contactForm')?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    })
  }

  return (
    <div className="w-full">
      <style>{`
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
  }

  .scale-reveal.visible {
    opacity: 1;
    transform: scale(1);
  }

`}</style>

      <NewKeynoteSec />

      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center justify-start overflow-hidden">

        {/* Background Zoom Animation */}
        <div
          className={`absolute inset-0 transition-transform duration-[4000ms] ease-out ${heroVisible ? 'scale-100' : 'scale-110'
            }`}
          style={{
            backgroundImage: `url('/hero-bg.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'top center',
          }}
        />

        {/* Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(0deg, rgba(13, 43, 46, 0.8) 0%, rgba(13, 43, 46, 0) 50%), linear-gradient(90deg, rgba(13, 43, 46, 0.92) 0%, rgba(13, 43, 46, 0.6) 60%, rgba(13, 43, 46, 0.3) 100%)',
          }}
        />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 w-full">
          <div className="max-w-2xl">

            <p
              className={`insights-heading text-primary mb-6 uppercase transition-all duration-1000 ${heroVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-6'
                }`}
            >
              Signature Keynote Topics
            </p>

            <h1
              className={`font-heading text-5xl lg:text-6xl leading-tight text-white mb-8 transition-all duration-1000 ${heroVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
                }`}
              style={{ transitionDelay: '150ms' }}
            >
              <span className="block">Leading Through</span>
              <span className="block">
                Pressure, <span className="italic">Change</span> &
              </span>
              <span className="block">Growth</span>
            </h1>

            <p
              className={`text-lg text-gray-300 leading-relaxed mb-8 max-w-xl transition-all duration-1000 ${heroVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
                }`}
              style={{ transitionDelay: '300ms' }}
            >
              Gina Greenlee delivers transformative keynotes that help leaders,
              teams, educators, and organizations navigate pressure, change,
              and growth with greater resilience, clarity, and confidence.
            </p>

            <p
              className={`text-gray-400 leading-relaxed mb-10 max-w-xl transition-all duration-1000 ${heroVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
                }`}
              style={{ transitionDelay: '450ms' }}
            >
              Through powerful storytelling, practical strategies, and
              human-centered learning, audiences gain the tools to strengthen
              communication, lead effectively, manage challenges, and perform
              at their best—without losing themselves in the process.
            </p>

            <div
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 ${heroVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8'
                }`}
              style={{ transitionDelay: '600ms' }}
            >
              <Button
                variant="primary"

                className="w-full sm:w-auto font-body"
                onClick={handleBookNowClick}

              >
                Book Now
              </Button>

              <a
                href="mailto:gina@ginagspeaks.org"
                className="flex items-center gap-2 px-6 py-3 font-body font-medium text-[#FFFFFFBF] underline underline-offset-4 transition-colors group w-full sm:w-auto justify-center sm:justify-start"
              >
                Start a Conversation
                <ArrowRight
                  size={18}
                  className=" translate-y-[1px] group-hover:translate-x-1 transition-transform"
                />
              </a>
            </div>

          </div>

        </div>
      </section>
      {/* Philosophy Section */}
      <section
        ref={philosophyRef.ref}
        className={`w-full bg-[#F2F9FA] py-16 lg:py-24 reveal ${philosophyRef.isVisible ? 'visible' : ''
          }`}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className=" insights-heading text-primary mb-8 uppercase text-center">
            The Philosophy
          </p>

          <h2 className="font-heading text-4xl lg:text-5xl text-center text-foreground mb-8 max-w-3xl mx-auto leading-tight">
            More Than a Presentation. A Lived Experience.
          </h2>

          <div className="space-y-6 text-center">
            <p className="text-[#4A7078] text-lg leading-relaxed">
              Gina&apos;s keynote topics come from the conversations people are already having quietly, where pressure feels heavier than most people admit.
            </p>

            <p className="text-[#4A7078] text-lg leading-relaxed">
              People are trying to perform while tired, lead while stretched, communicate while overwhelmed, and support others while needing support themselves.
            </p>

            <div className="flex justify-center my-8">
              <div className="w-12 lg:w-16 xl:w-20 h-0.5 bg-primary"></div>
            </div>

            <p className="text-[#4A7078] text-lg leading-relaxed  ">
              Gina brings those realities into the room with warmth, clarity, and care.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Keynotes Section */}


      {/* Finding Your Fit Section */}
      <section
        ref={fitRef.ref}
        className="w-full bg-light-bg py-16 lg:py-24"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-primary insights-heading mb-8 uppercase">
            Finding Your Fit
          </p>

          <h2 className="font-heading text-4xl lg:text-5xl text-foreground mb-16 leading-tight">
            How to Choose the Right <br /> Topic
            for Your Audience
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {findingYourFitSteps.map((step) => (
              <div
                key={step.number}
                className={`bg-white p-8 rounded reveal ${fitRef.isVisible ? 'visible' : ''
                  }`}
                style={{
                  transitionDelay: `${Number(step.number) * 120}ms`
                }}
              >
                <div
                  className="w-10 h-10 bg-primary text-white font-body text-lg font-bold  flex items-center justify-center mb-6"
                >
                  {step.number}
                </div>
                <h3 className="font-heading text-xl lg:text-2xl font-semibold text-foreground mb-4">{step.title}</h3>
                <p className="text-[#4A7078] leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Last Section - Begin the Conversation */}
      <section
        ref={ctaRef.ref}
        className={`w-full bg-dark-bg py-16 lg:py-24 reveal ${ctaRef.isVisible ? 'visible' : ''
          }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <p className="text-primary insights-heading mb-6 uppercase">
                Let&apos;s Begin the Conversation
              </p>

              <h2 className="font-heading text-4xl lg:text-5xl text-white mb-6 leading-tight">
                Start planning a thoughtful, impactful experience
              </h2>

              <p className="text-gray-300/50 text-body text-lg leading-relaxed mb-8">
                Gina&apos;s process is collaborative, intentional, and built around your needs. Reach out and let&apos;s find the right experience for your audience.
              </p>

              <Button variant="primary"
              onClick={handleBookNowClick}
              className="mb-8 tracking-wide font-body">
                Reach Out to Gina
              </Button>

              <p className="text-gray-400 text-sm">
                <a href="mailto:gina@ginagspeaks.org" className=" text-primary flex items-center  hover:text-primary/80 transition-colors">
                  <span className='   inline-flex mr-1 '><MailIcon size={14} /></span>
                  gina@ginagspeaks.org
                </a>
              </p>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div
                className={`aspect-square overflow-hidden border p-4 scale-reveal ${ctaRef.isVisible ? 'visible' : ''
                  }`}
                style={{
                  borderColor: '#3C929D4D',
                  boxShadow: '0 0 0 12px transparent',
                  transitionDelay: '200ms'
                }}
              >
                <img
                  src="/keynotes/ginag.jpg"
                  alt="Gina Greenlee"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactNew />
    </div>
  )
}



// <section
//       ref={keynotesRef.ref}
//       className="w-full bg-white py-16 lg:py-24 relative overflow-hidden"
//     >
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         <p className="insights-heading text-primary text-center mb-12 uppercase">
//           Featured Keynote Topics
//         </p>

//         <div className="space-y-12">
//           {keynotes.map((keynote) => (
//             <div
//               key={keynote.id}
//               className={`flex flex-col lg:flex-row gap-8 items-start ${keynote.id % 2 === 0 ? 'reveal-right' : 'reveal-left'
//                 } ${keynotesRef.isVisible ? 'visible' : ''}`}
//               style={{
//                 transitionDelay: `${keynote.id * 100}ms`
//               }}
//             >
//               {/* Icon */}
//               <div className="flex-shrink-0 w-fit mx-auto">
//                 <div
//                   className={` ${keynote.id == 3 ? 'size-[130px]' : 'size-36'} flex items-center justify-center opacity-40 scale-reveal ${keynotesRef.isVisible ? 'visible' : ''
//                     }`}
//                   style={{
//                     transitionDelay: `${keynote.id * 120}ms`
//                   }}
//                 >
//                   {keynote.icon.endsWith('.svg') ? (
//                     <img src={keynote.icon} alt={keynote.title} className="w-full h-full" />
//                   ) : (
//                     <img src={keynote.icon} alt={keynote.title} className={`${keynote.id == 3 ? 'size-[130px]' : 'size-36'}`} />
//                   )}
//                 </div>
//               </div>

//               {/* Content */}
//               <div className="flex-1 border-b border-[#B8DDE2] pb-8 lg:pb-12">
//                 <div className="flex items-baseline gap-4 mb-3">
//                   <span className={`font-heading text-[#3C929D4D] text-4xl ${keynote.color}`}>{keynote.number}</span>
//                   <h3 className="font-heading font-medium text-2xl lg:text-3xl text-foreground">{keynote.title}</h3>
//                 </div>

//                 <p className="text-[#4A7078] text-base leading-relaxed mb-6">
//                   {keynote.description}
//                 </p>

//                 <div className="flex flex-wrap gap-2">
//                   {keynote.tags.map((tag, idx) => (
//                     <button
//                       key={idx}
//                       onClick={() => setSelectedKeynoteTags({ ...selectedKeynoteTags, [keynote.id]: tag })}
//                       className="px-4 py-1.5 text-sm font-medium text-[#4A7078] border border-[#8CC8D0] "
//                     >
//                       {tag}
//                     </button>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Donut Design - Bottom Left */}
//         <div
//           className="absolute -bottom-16  -right-40  size-96 "

//         >
//           <img src="/icons/border.svg" alt="Decorative donut graphic" className=" size-[700px] object-contain" />
//         </div>
//       </div>
//     </section>