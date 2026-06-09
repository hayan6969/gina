import { useCallback, useEffect, useMemo, useState } from 'react'

type UseInViewOptions = {
  threshold?: number | number[]
  rootMargin?: string
  triggerOnce?: boolean
  enabled?: boolean
}

type Subscriber = {
  setVisible: (visible: boolean) => void
  triggerOnce: boolean
}

type ObserverPool = {
  observer: IntersectionObserver
  subscribers: Map<Element, Subscriber>
}

const observerPools = new Map<string, ObserverPool>()

function prefersReducedMotion() {
  return typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function getPoolKey(rootMargin: string, threshold: number | number[]) {
  return `${rootMargin}|${Array.isArray(threshold) ? threshold.join(',') : threshold}`
}

function getObserverPool(rootMargin: string, threshold: number | number[]) {
  const key = getPoolKey(rootMargin, threshold)
  const existingPool = observerPools.get(key)

  if (existingPool) {
    return existingPool
  }

  const subscribers = new Map<Element, Subscriber>()

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const subscriber = subscribers.get(entry.target)

      if (!subscriber) {
        return
      }

      if (entry.isIntersecting) {
        subscriber.setVisible(true)

        if (subscriber.triggerOnce) {
          observer.unobserve(entry.target)
          subscribers.delete(entry.target)
        }
      }
    })
  }, {
    root: null,
    rootMargin,
    threshold,
  })

  const pool = { observer, subscribers }
  observerPools.set(key, pool)
  return pool
}

export function useInView<T extends HTMLElement = HTMLElement>({
  threshold = 0.18,
  rootMargin = '0px 0px -10% 0px',
  triggerOnce = true,
  enabled = true,
}: UseInViewOptions = {}) {
  const [node, setNode] = useState<T | null>(null)
  const [isInView, setIsInView] = useState(() => prefersReducedMotion())

  const ref = useCallback((element: T | null) => {
    setNode(element)
  }, [])

  const poolKey = useMemo(() => getPoolKey(rootMargin, threshold), [rootMargin, threshold])

  useEffect(() => {
    if (!enabled || !node) {
      return
    }

    if (prefersReducedMotion() || typeof IntersectionObserver === 'undefined') {
      setIsInView(true)
      return
    }

    const pool = getObserverPool(rootMargin, threshold)

    pool.subscribers.set(node, {
      setVisible: setIsInView,
      triggerOnce,
    })

    pool.observer.observe(node)

    return () => {
      pool.observer.unobserve(node)
      pool.subscribers.delete(node)

      if (pool.subscribers.size === 0) {
        pool.observer.disconnect()
        observerPools.delete(poolKey)
      }
    }
  }, [enabled, node, poolKey, rootMargin, threshold, triggerOnce])

  return { ref, isInView }
}