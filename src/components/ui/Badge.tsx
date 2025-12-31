import React from 'react'
import { cn } from '@/lib/utils'

interface BadgeProps {
  variant?: 'primary' | 'secondary'
  size?: 'small' | 'medium' | 'large' | 'xlarge'
  children: React.ReactNode
  className?: string
}

export function Badge({ variant = 'primary', size = 'medium', children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full font-medium',
        {
          'bg-indigo-100 text-indigo-800': variant === 'primary',
          'bg-gray-100 text-gray-800': variant === 'secondary',
        },
        {
          'px-2 py-1 text-xs': size === 'small',
          'px-2.5 py-0.5 text-sm': size === 'medium',
          'px-5 py-1 text-lg': size === 'large',
          // 'px-5 py-1 text-base': size === 'xlarge',
        },
        className
      )}
    >
      {children}
    </span>
  )
}