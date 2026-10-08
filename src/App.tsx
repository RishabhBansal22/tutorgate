import React, { useState } from 'react'
import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { HeroSection } from './components/hero/HeroSection'
import { TrustTicker } from './components/hero/TrustTicker'
import { AIPlayground } from './components/playground/AIPlayground'
import { FeeEngineSimulator } from './components/fee-engine/FeeEngineSimulator'
import { SnapAndPracticeDemo } from './components/vision/SnapAndPracticeDemo'
import { TeachingSuiteGrid } from './components/features/TeachingSuiteGrid'
import { AdminOSGrid } from './components/features/AdminOSGrid'
import { ClaudeArchitectureSection } from './components/architecture/ClaudeArchitectureSection'
import { ComparisonMatrix } from './components/comparison/ComparisonMatrix'
import { TutorTestimonials } from './components/testimonials/TutorTestimonials'
import { WaitlistModal } from './components/waitlist/WaitlistModal'
import { Button } from './components/ui/Button'
import { Badge } from './components/ui/Badge'
import { Sparkles, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react'

export const App: React.FC = () => {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false)

  const scrollToPlayground = () => {
    const el = document.getElementById('ai-studio')
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-neutral-bg text-text-primary flex flex-col font-body selection:bg-primary/20 selection:text-primary">
      {/* Sticky Header */}
      <Navbar
        onOpenWaitlist={() => setIsWaitlistOpen(true)}
        onScrollToPlayground={scrollToPlayground}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection
          onOpenWaitlist={() => setIsWaitlistOpen(true)}
          onScrollToPlayground={scrollToPlayground}
        />

        {/* Trust Metrics Bar */}
        <TrustTicker />

        {/* Flagship Feature 1: The Live Claude 5.5 AI Playground */}
        <AIPlayground />

        {/* Flagship Feature 2: WhatsApp & UPI Fee Engine */}
        <FeeEngineSimulator />

        {/* Multimodal Vision Demo: Snap & Practice */}
        <SnapAndPracticeDemo />

        {/* Feature Pillar 1: AI Teaching Suite */}
        <TeachingSuiteGrid />

        {/* Feature Pillar 2: Administrative & Financial OS */}
        <AdminOSGrid />

        {/* Technical Deep Dive: Built on Anthropic Claude */}
        <ClaudeArchitectureSection />

        {/* Old Way vs TutorGate Way Comparison Matrix */}
        <ComparisonMatrix />

        {/* Testimonials from Indian Tutors */}
        <TutorTestimonials />

        {/* Final Conversion Callout Banner */}
        <section className="py-20 bg-primary text-white relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-claude-coral/20 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6 relative z-10">
            <Badge variant="claude" className="bg-white/15 text-white border-white/25">
              Empowering 10M+ Indian Educators
            </Badge>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl tracking-tight leading-tight">
              Ready to Reclaim 15 Hours Every Week & End Fee Awkwardness?
            </h2>

            <p className="text-indigo-100 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Join thousands of forward-thinking Indian home tutors and neighborhood batch teachers. Free early access beta is open now.
            </p>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                variant="secondary"
                size="lg"
                onClick={() => setIsWaitlistOpen(true)}
                icon={<ArrowRight className="w-4 h-4 ml-0.5 text-primary" />}
                className="font-bold text-primary hover:text-primary-hover shadow-lg"
              >
                Join Free Tutor Beta Now
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={scrollToPlayground}
                icon={<Sparkles className="w-4 h-4 text-amber-300" />}
                className="border-white/40 text-white hover:bg-white/10 hover:text-white"
              >
                Test Interactive AI Studio
              </Button>
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-center gap-6 text-xs text-indigo-200">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                100% Free during Beta
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-emerald-300" />
                Direct UPI Bank Settlement
              </span>
              <span className="flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-amber-300" />
                Anthropic Claude 5.5 Powered
              </span>
            </div>
          </div>
        </section>
      </main>

      {/* Global Footer */}
      <Footer />

      {/* Waitlist Modal */}
      <WaitlistModal
        isOpen={isWaitlistOpen}
        onClose={() => setIsWaitlistOpen(false)}
      />
    </div>
  )
}

export default App
