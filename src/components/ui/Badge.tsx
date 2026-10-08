import React from 'react'
import { ClaudeStarIcon } from './ClaudeStarIcon'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'claude' | 'board' | 'cache' | 'amber' | 'neutral' | 'dark'
  className?: string
  icon?: React.ReactNode
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'neutral',
  className = '',
  icon
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'claude':
        return 'bg-claude-coral-light text-claude-coral border border-claude-coral-border font-medium'
      case 'board':
        return 'bg-primary-light text-primary-dark border border-indigo-200 font-semibold'
      case 'cache':
        return 'bg-accent-emerald-light text-emerald-800 border border-emerald-200 font-medium'
      case 'amber':
        return 'bg-accent-amber-light text-amber-800 border border-amber-200 font-medium'
      case 'dark':
        return 'bg-dark-surface text-slate-300 border border-dark-border font-medium'
      case 'neutral':
      default:
        return 'bg-slate-100 text-slate-700 border border-slate-200 font-medium'
    }
  }

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs tracking-wide transition-colors ${getVariantStyles()} ${className}`}
    >
      {variant === 'claude' && !icon && <ClaudeStarIcon size={12} />}
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  )
}
