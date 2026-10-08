import React, { useState } from 'react'
import { Button } from '../ui/Button'
import { Badge } from '../ui/Badge'
import { Menu, X, Sparkles, BookOpen } from 'lucide-react'

interface NavbarProps {
  onOpenWaitlist: () => void
  onScrollToPlayground: () => void
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenWaitlist,
  onScrollToPlayground
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navLinks = [
    { label: 'AI Studio', href: '#ai-studio' },
    { label: 'WhatsApp & UPI OS', href: '#fee-os' },
    { label: 'Claude Architecture', href: '#claude-architecture' },
    { label: 'Comparison', href: '#comparison' },
    { label: 'For Tutors', href: '#testimonials' },
  ]

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-slate-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-[68px] sm:h-[72px] flex items-center justify-between">
        {/* Brand Logo & Claude Pill */}
        <div className="flex items-center gap-3">
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-primary flex items-center justify-center text-white shadow-sm group-hover:bg-primary-hover transition-colors">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-xl sm:text-2xl tracking-tight text-text-primary leading-none">
                Tutor<span className="text-primary">Gate</span>
              </span>
              <span className="text-xs font-semibold text-text-muted tracking-wider uppercase leading-tight mt-0.5">
                OS for Indian Tutors
              </span>
            </div>
          </a>

          <div className="hidden md:flex items-center ml-1">
            <Badge variant="claude" className="py-0.5 text-xs">
              Claude 5.5 Inside
            </Badge>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleLinkClick(link.href)}
              className="text-sm font-medium text-text-secondary hover:text-primary transition-colors cursor-pointer"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <Button
            variant="secondary"
            size="sm"
            onClick={onScrollToPlayground}
            icon={<Sparkles className="w-3.5 h-3.5 text-claude-coral" />}
          >
            Try Live Demo
          </Button>

          <Button
            variant="primary"
            size="sm"
            onClick={onOpenWaitlist}
          >
            Join Tutor Beta (Free)
          </Button>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-text-secondary hover:text-text-primary rounded-lg hover:bg-slate-100 min-h-[44px] min-w-[44px] flex items-center justify-center"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-neutral-border px-4 pt-3 pb-6 space-y-4 shadow-lg animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleLinkClick(link.href)}
                className="text-left py-2.5 px-3 text-sm font-medium text-text-secondary hover:text-primary hover:bg-slate-50 rounded-lg min-h-[44px] flex items-center"
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-100 flex flex-col gap-2.5">
            <Button
              variant="secondary"
              fullWidth
              onClick={() => {
                setMobileMenuOpen(false)
                onScrollToPlayground()
              }}
              icon={<Sparkles className="w-4 h-4 text-claude-coral" />}
            >
              Try Interactive AI Demo
            </Button>
            <Button
              variant="primary"
              fullWidth
              onClick={() => {
                setMobileMenuOpen(false)
                onOpenWaitlist()
              }}
            >
              Join Tutor Beta (Free)
            </Button>
          </div>
        </div>
      )}
    </header>
  )
}
