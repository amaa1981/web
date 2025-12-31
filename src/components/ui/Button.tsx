import React from 'react'
import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'text'
  size?: 'small' | 'medium' | 'large'
  endAdornment?: React.ReactNode
  startAdornment?: React.ReactNode
  children: React.ReactNode
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    variant = 'primary', 
    size = 'medium', 
    endAdornment, 
    startAdornment,
    children, 
    ...props 
  }, ref) => {
    return (
      <button
        className={cn(
            'inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
          {
            // Primary: bright teal #29928F
            'bg-[#0F6264] text-white hover:bg-[#13787F]': variant === 'primary',
            // Secondary: deep teal #13787F
            'bg-[#29928F] text-white hover:bg-[#003F60]': variant === 'secondary',
            // Text button: bright teal text
            'bg-transparent text-[#29928F] hover:text-[#13787F] hover:bg-[#29928F]/10': variant === 'text',
          },
          {
            'h-8 px-3 text-sm': size === 'small',
            'h-10 px-4 text-sm': size === 'medium',
            'h-12 px-6 text-base': size === 'large',
          },
          className
        )}
        ref={ref}
        {...props}
      >
        {startAdornment}
        {children}
        {endAdornment}
      </button>
    )
  }
)

Button.displayName = 'Button'

export { Button }