import type { CSSProperties } from 'react'

export const animationClasses = {
  reveal: 'reveal',
  revealLeft: 'reveal-left',
  revealRight: 'reveal-right',
  scaleReveal: 'scale-reveal',
  fadeReveal: 'fade-reveal',
  visible: 'is-visible',
} as const

export function getRevealDelayStyle(delayMs = 0): CSSProperties {
  return {
    '--reveal-delay': `${delayMs}ms`,
  } as CSSProperties
}