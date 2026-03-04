'use client'

import { useState } from 'react'
import { cn } from "@/lib/utils"

interface ProfileImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallback?: React.ReactNode
}

export function ProfileImage({ src, alt, className, fallback, ...props }: ProfileImageProps) {
  const [error, setError] = useState(false)

  if (error) {
    return <>{fallback}</>
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setError(true)}
      {...props}
    />
  )
}
