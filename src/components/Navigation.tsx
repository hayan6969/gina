import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X ,Home,User, Mic2} from 'lucide-react'
import { useLenis } from 'lenis/react'


export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()
  const lenis = useLenis()

  useEffect(() => {
    lenis?.scrollTo(0, { immediate: true })
  }, [lenis, location.pathname])
 const navItems = [
  {
    label: 'HOME',
    path: '/',
    icon: Home,
  },
  {
    label: 'ABOUT',
    path: '/about',
    icon: User,
  },
  {
    label: 'KEYNOTE TOPICS',
    path: '/keynote-topics',
    icon: Mic2,
  },
]
  const isActive = (path: string) => location.pathname === path

  return (
    <nav
      className="sticky top-0 z-50"
      style={{
      background: 'linear-gradient(90deg, #111F22 0%, #467681 30%, #E4F5F1 50%, #467681 70%, #111F22 100%)'
      }}
    >
      <div className=" px-6 sm:px-8 lg:px-12 mx-auto  ">
        <div className="flex justify-between items-center h-16">
          {/* Left Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.slice(0, 1).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium tracking-widest transition-colors ${isActive(item.path)
                    ? 'text-primary'
                    : 'text-white hover:text-primary'
                  }`}
              >
                {item.label}
              </Link>
            ))}
            {navItems.slice(1).map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-medium tracking-widest transition-colors ${isActive(item.path)
                    ? 'text-primary'
                    : 'text-white hover:text-primary'
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Logo - Center */}
          <div className="flex-shrink-0 absolute left-1/2 transform -translate-x-1/2">
            <Link to="/" className="flex items-center">
              <img src="/logo-n.png" alt="GinaG Speaks" className="h-10 md:h-12 lg:h-14" />
            </Link>
          </div>

          {/* Right Navigation */}
          <div className="hidden lg:flex items-center justify-end flex-1">
            {/* Navigation items will be on the left, so this is empty for desktop */}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center absolute right-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:text-primary focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>


        {/* Mobile Sidebar Overlay */}
        <div
          className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ${isOpen
              ? 'bg-black/60 backdrop-blur-sm opacity-100 pointer-events-auto'
              : 'opacity-0 pointer-events-none'
            }`}
          onClick={() => setIsOpen(false)}
        />

        {/* Mobile Sidebar */}
        <div
          className={`lg:hidden fixed top-0 left-0 h-screen w-[290px] z-50
    bg-[#122429]/95 backdrop-blur-xl border-r border-white/10
    transition-transform duration-300 ease-out
    ${isOpen ? 'translate-x-0' : '-translate-x-full'}
  `}
        >
          {/* Header
          <div className="flex items-center justify-between px-6 h-20   border-b border-white/10">
            <img
              src="/logo.png"
              alt="GinaG Speaks"
              className="h-10 object-contain"
            />

            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-primary transition-colors"
            >
              <X size={24} />
            </button>
          </div> */}

          {/* Links */}
          <div className="flex flex-col p-4 gap-2 mt-4">
            {navItems.map((item) => {
              const Icon = item.icon

              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`
            group flex items-center gap-4
            px-4 py-4 rounded-2xl
            transition-all duration-300
            ${isActive(item.path)
                      ? 'bg-primary text-white shadow-lg shadow-primary/20'
                      : 'text-white/80 hover:bg-white/5 hover:text-white'
                    }
          `}
                >
                  <Icon
                    size={20}
                    className={`
              transition-transform duration-300
              group-hover:scale-110
            `}
                  />

                  <span className="font-medium tracking-wider text-sm">
                    {item.label}
                  </span>
                </Link>
              )
            })}
          </div>

          {/* Bottom Accent */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

            <p className="text-center text-white/40 text-xs tracking-widest mt-4">
              GINAG SPEAKS
            </p>
          </div>
        </div>
      </div>
    </nav>
  )
}
