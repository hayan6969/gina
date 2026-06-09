import { useEffect, useState } from 'react'
import { ChevronRight } from 'lucide-react'
import { useInView } from '../hooks/useInView'
import { animationClasses, getRevealDelayStyle } from '../lib/animations'

export default function NewKeynoteSec() {
  const keynotesRef = useInView<HTMLDivElement>()
  const frameworkRef = useInView<HTMLDivElement>()
  const [showScrollHint, setShowScrollHint] = useState(true)

  const keynotes = [
    {
      id: 1,
      image: '/keynotes/keyn1.jpg',
      title: 'Resilience & Empowerment',
      points: [
        'Overcoming self-doubt and imposter syndrome',
        'Balancing personal and professional responsibilities',
        'Building self-awareness under pressure',
        'Empowering individuals to lead with confidence and purpose',
      ]
    },
    {
      id: 2,
      image: '/keynotes/keyn2.jpg',
      title: 'Leadership & Workplace Resilience',
      points: [
        'Leading through pressure without losing yourself',
        'Building resilient teams',
        'Managing competing priorities',
        'Creating psychological safety and trust',
      ]
    },
    {
      id: 3,
      image: '/keynotes/keyn3.jpg',
      title: 'Personal Growth Through Adversity',
      points: [
        'Finding purpose through challenges',
        'Building confidence through tough experiences',
        'Transforming pain into purpose',
        'Growing stronger through setbacks',
      ]
    }
  ]

  const resetFramework = [
    {
      letter: 'R',
      title: 'Recognize',
      description: 'Understanding your current capacity'
    },
    {
      letter: 'E',
      title: 'Examine',
      description: 'Identifying patterns that hold you back'
    },
    {
      letter: 'S',
      title: 'Shift',
      description: 'Reframing mindsets and self-talk'
    },
    {
      letter: 'E',
      title: 'Equip',
      description: 'Building your resilience toolkit'
    },
    {
      letter: 'T',
      title: 'Take Action',
      description: 'Creating sustainable change'
    }
  ]

  useEffect(() => {
    const threshold = 120

    const updateScrollHint = () => {
      setShowScrollHint(window.scrollY < threshold)
    }

    updateScrollHint()
    window.addEventListener('scroll', updateScrollHint, { passive: true })

    return () => window.removeEventListener('scroll', updateScrollHint)
  }, [])

  return (
    <section className="w-full bg-white py-8 lg:py-10 xl:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 3-Card Section */}
        <div
          ref={keynotesRef.ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 lg:mb-12"
        >
          {keynotes.map((keynote) => (
            <div 
              key={keynote.id}
              className={`${animationClasses.scaleReveal} ${keynotesRef.isInView ? animationClasses.visible : ''} border border-[#264346] p-3 rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300`}
              style={getRevealDelayStyle((keynote.id - 1) * 140)}
            >
              {/* Image */}
              <div className="relative h-56 lg:h-40 2xl:h-56 overflow-hidden">
                <img 
                  src={keynote.image} 
                  alt={keynote.title}
                  className="w-full h-full object-cover rounded-2xl"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="p-6 py-2">
                <h3 className="text-xl lg:text-3xl  font-heading font-light text-gray-900 mb-4">
                  {keynote.title}
                </h3>
                
                <ul className="space-y-1">
                  {keynote.points.map((point, idx) => (
                    <li key={idx} className="flex gap-3 text-sm text-[#383838A6] leading-relaxed">
                      <span className="text-primary font-bold mt-1">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
<div
  className={`pointer-events-none fixed bottom-10 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center transition-all duration-700 ease-out ${
    showScrollHint ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
  }`}
  aria-hidden="true"
>
  {/* Tiny custom style for a soft, gentle float instead of a harsh bounce */}
  <style>{`
    @keyframes soft-bounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(6px); }
    }
  `}</style>

  {/* The wrapper applying the soft bounce and color */}
  <div 
    className="hidden md:flex flex-col items-center drop-shadow-md text-teal-700"
    style={{ animation: 'soft-bounce 3s ease-in-out infinite' }}
  >
    {/* Size Hierarchy: Small -> Medium -> Large */}
    <ChevronRight size={16} className="rotate-90 opacity-30" />
    <ChevronRight size={20} className="rotate-90 opacity-60 -mt-2" />
    <ChevronRight size={24} className="rotate-90 opacity-100 -mt-2" />
  </div>
</div>

        {/* The RESET Resilience Framework */}
        <div
          ref={frameworkRef.ref}
          className={`${animationClasses.reveal} ${frameworkRef.isInView ? animationClasses.visible : ''} border border-[#264346] rounded-2xl overflow-hidden`}
        >
          {/* Header */}
          <div 
            className="px-6 sm:px-8 lg:px-10 py-6 flex items-center justify-between"
            style={{ backgroundColor: '#3C929D' }}
          >
            <h2 className="text-3xl lg:text-4xl font-heading font-light text-white">
              The RESET Resilience Framework
            </h2>
            <p className="text-white/60 text-sm font-body whitespace-nowrap ml-4">
              Fundamentals & application
            </p>
          </div>

          {/* Mobile Framework Grid */}
          <div className="grid grid-cols-2 md:hidden gap-0 bg-white">
            {resetFramework.map((item, idx) => (
              <div
                key={idx}
                className={`${idx === 4 ? 'col-span-2' : ''} ${animationClasses.reveal} ${frameworkRef.isInView ? animationClasses.visible : ''} px-4 py-7 text-center flex flex-col items-center justify-center ${
                  idx % 2 === 0 && idx !== resetFramework.length - 1 ? 'border-r border-[#264346]' : ''
                } ${idx < 4 ? 'border-b border-[#264346]' : ''}`}
                style={getRevealDelayStyle(idx * 100)}
              >
                <div className="text-4xl font-heading font-light text-primary mb-2">
                  {item.letter}
                </div>
                <h3 className="text-base font-body font-bold text-primary mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-[#383838A6] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Desktop Framework Grid */}
          <div className="hidden md:grid grid-cols-5 gap-0 bg-white">
            {resetFramework.map((item, idx) => (
              <div 
                key={idx}
                className={`${animationClasses.reveal} ${frameworkRef.isInView ? animationClasses.visible : ''} px-4 sm:px-6 py-8 text-center flex flex-col items-center justify-center ${
                  idx < resetFramework.length - 1 ? 'border-r border-[#264346]' : ''
                } ${idx >= 3 && idx < 4 ? 'border-r border-[#264346]' : ''}`}
                style={getRevealDelayStyle(idx * 120)}
              >
                <div className="text-5xl lg:text-6xl xl:text-7xl font-heading font-light text-primary mb-2">
                  {item.letter}
                </div>
                <h3 className="text-lg font-body font-bold text-primary mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-[#383838A6] leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scroll-bounce {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(10px);
          }
        }
      `}</style>
    </section>
  )
}
