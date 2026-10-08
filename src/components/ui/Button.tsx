import React from 'react'

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'whatsapp' | 'claude' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  icon?: React.ReactNode
  fullWidth?: boolean
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  icon,
  fullWidth = false,
  className = '',
  disabled,
  ...props
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return 'bg-primary text-text-inverse hover:bg-primary-hover active:bg-primary-dark shadow-[0_1px_2px_rgba(0,0,0,0.05),inset_0_1px_0_rgba(255,255,255,0.15)] hover:-translate-y-0.5 active:translate-y-0'
      case 'secondary':
        return 'bg-white text-text-primary border border-neutral-border-strong hover:bg-neutral-bg hover:border-slate-400 active:bg-slate-100 shadow-sm hover:-translate-y-0.5 active:translate-y-0'
      case 'whatsapp':
        return 'bg-whatsapp-green text-text-inverse hover:bg-whatsapp-green-dark shadow-sm hover:-translate-y-0.5 active:translate-y-0'
      case 'claude':
        return 'bg-gradient-to-r from-primary via-indigo-600 to-claude-coral text-white shadow-md hover:shadow-lg hover:claude-glow hover:-translate-y-0.5 active:translate-y-0'
      case 'outline':
        return 'bg-transparent text-text-secondary border border-neutral-border hover:bg-slate-50 hover:text-text-primary'
      case 'ghost':
        return 'bg-transparent text-text-secondary hover:bg-slate-100 hover:text-text-primary'
      default:
        return ''
    }
  }

  const getSizeStyles = () => {
    switch (size) {
      case 'sm':
        return 'px-3.5 py-2 text-xs font-semibold rounded-md min-h-[36px]'
      case 'lg':
        return 'px-7 py-3.5 text-base font-semibold rounded-xl min-h-[50px]'
      case 'md':
      default:
        return 'px-5 py-2.5 text-sm font-semibold rounded-lg min-h-[44px]'
    }
  }

  return (
    <button
      disabled={disabled}
      className={`inline-flex items-center justify-center gap-2 font-display transition-all duration-150 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none select-none ${getVariantStyles()} ${getSizeStyles()} ${
        fullWidth ? 'w-full' : ''
      } ${className}`}
      {...props}
    >
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </button>
  )
}
