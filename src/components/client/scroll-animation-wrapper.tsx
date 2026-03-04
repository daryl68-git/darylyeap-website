'use client'

import { useEffect, useRef } from 'react'

/**
 * Client component wrapper that handles IntersectionObserver for scroll animations
 * Observes elements with .scroll-animation class and adds .animate-in when visible
 * 
 * @param children - React nodes to wrap with scroll animation functionality
 */
interface ScrollAnimationWrapperProps {
  children: React.ReactNode
}

export function ScrollAnimationWrapper({ children }: ScrollAnimationWrapperProps) {
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    // Initialize IntersectionObserver
    observerRef.current = new IntersectionObserver(
      (entries, observer) => {
        // Use requestAnimationFrame to batch DOM writes for smoother scrolling
        window.requestAnimationFrame(() => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('animate-in')
              // Unobserve once animated in to avoid unnecessary work
              observer.unobserve(entry.target)
            }
          })
        })
      },
      {
        // Trigger a bit before the element is fully in view for smoother perception
        threshold: 0.15,
        rootMargin: '0px 0px -10% 0px',
      }
    )

    // Observe all elements with scroll-animation class
    document.querySelectorAll<HTMLElement>('.scroll-animation').forEach((element) => {
      observerRef.current?.observe(element)
    })

    // Cleanup on unmount
    return () => observerRef.current?.disconnect()
  }, [])

  return <>{children}</>
}
