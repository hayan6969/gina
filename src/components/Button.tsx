import { ReactNode } from 'react'
import { ArrowRight } from 'lucide-react'

interface ButtonProps {
  children: ReactNode
  onClick?: () => void
  variant?: 'primary' | 'outline' | 'link'
  className?: string
  disabled?: boolean
}

export default function Button({
  children,
  onClick,
  variant = 'primary',
  className = '',
  disabled = false,
}: ButtonProps) {
  const baseStyles = 'px-6 py-3 font-medium transition-all duration-300 text-sm tracking-wide'
  
  const variants = {
    primary: 'bg-primary text-white hover:bg-opacity-90 uppercase',
    outline: 'border border-gray-300 text-gray-800 hover:border-primary hover:text-primary',
    link: 'text-primary hover:text-opacity-80 font-medium flex items-center gap-2 group',
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
    >
      {variant === 'link' && children}
      {variant !== 'link' && children}
      {variant === 'link' && <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />}
    </button>
  )
}
