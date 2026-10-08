import React from 'react'

interface ClaudeStarIconProps {
  className?: string
  size?: number
  color?: string
}

export const ClaudeStarIcon: React.FC<ClaudeStarIconProps> = ({
  className = '',
  size = 18,
  color = '#D97757'
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block shrink-0 ${className}`}
    >
      <path
        d="M12 2L13.8 8.8L19.5 5.5L15.2 11.2L22 13L15.2 14.8L19.5 20.5L13.8 17.2L12 24L10.2 17.2L4.5 20.5L8.8 14.8L2 13L8.8 11.2L4.5 5.5L10.2 8.8L12 2Z"
        fill={color}
      />
    </svg>
  )
}
