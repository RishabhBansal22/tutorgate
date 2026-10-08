import React from 'react'
import { Button } from '../ui/Button'
import { Badge } from '../ui/Badge'
import { Sparkles, ArrowRight, CheckCircle2, FileText, Smartphone, ShieldCheck, Zap } from 'lucide-react'

interface HeroSectionProps {
  onOpenWaitlist: () => void
  onScrollToPlayground: () => void
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenWaitlist,
  onScrollToPlayground
}) => {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 lg:pt-20 lg:pb-24">
      {/* Subtle radial gradient background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] pointer-events-none opacity-40">
        <div className="absolute top-10 left-1/4 w-96 h-96 bg-primary/15 rounded-full blur-3xl" />
        <div className="absolute top-20 right-1/4 w-80 h-80 bg-accent-amber/15 rounded-full blur-3xl" />
        <div className="absolute top-40 right-1/3 w-64 h-64 bg-claude-coral/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column (7 cols): Value Prop & Action Triggers */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Badges Stack */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2.5">
              <Badge variant="claude">
                Powered by Anthropic Claude 5.5
              </Badge>
              <Badge variant="board">
                CBSE • ICSE • State Boards
              </Badge>
              <span className="hidden sm:inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                1-Tap UPI Deep-Links
              </span>
            </div>

            {/* Main Display Headline */}
            <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-text-primary tracking-tight leading-[1.12]">
              The AI-Powered Superpower for{' '}
              <span className="text-primary underline decoration-primary/25 underline-offset-8">
                Indian Home Tutors
              </span>{' '}
              & Small Batches
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-text-secondary leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              Eliminate 15 hours of weekly prep with instant CBSE & ICSE test blueprints. Collect fees politely on WhatsApp in 1 click with embedded UPI deep-links. Built on Anthropic Claude.
            </p>

            {/* CTA Buttons */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5">
              <Button
                variant="primary"
                size="lg"
                onClick={onOpenWaitlist}
                icon={<ArrowRight className="w-4 h-4 ml-0.5" />}
              >
                Join Tutor Beta (Free)
              </Button>

              <Button
                variant="secondary"
                size="lg"
                onClick={onScrollToPlayground}
                icon={<Sparkles className="w-4 h-4 text-claude-coral" />}
              >
                Try Interactive AI Demo
              </Button>
            </div>

            {/* Micro Trust Proof */}
            <div className="pt-3 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-text-secondary">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-accent-emerald shrink-0" />
                <span>Zero Social Awkwardness Fee Flow</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Zap className="w-4 h-4 text-primary shrink-0" />
                <span>30-Sec Test Generation</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-claude-coral shrink-0" />
                <span>Zero STEM Hallucinations</span>
              </div>
            </div>
          </div>

          {/* Right Column (5 cols): Dual-Pillar Interactive Visual Card */}
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative background aura */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-primary/20 via-claude-coral/20 to-accent-amber/20 blur-xl opacity-75" />

              {/* Main Preview Container */}
              <div className="relative rounded-2xl bg-white border border-slate-200/90 shadow-elevation-high overflow-hidden p-5 sm:p-6 space-y-4">
                
                {/* Header bar */}
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-semibold text-slate-700 tracking-wide">
                      TutorGate Active Workspace
                    </span>
                  </div>
                  <Badge variant="claude" className="text-xs py-0.5 px-2">
                    Claude 5.5 Sonnet
                  </Badge>
                </div>

                {/* Split Previews: Pillar 1 & Pillar 2 */}
                <div className="space-y-3">
                  
                  {/* Pillar 1 Snippet: Live CBSE Blueprint */}
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 space-y-2 hover:border-indigo-300 transition-colors">
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-1.5 font-semibold text-primary">
                        <FileText className="w-3.5 h-3.5" />
                        <span>AI Blueprint • Class 10 Science</span>
                      </div>
                      <span className="text-xs font-mono font-medium text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded">
                        0.38s (92% Cache Hit)
                      </span>
                    </div>

                    <div className="bg-white p-2.5 rounded-lg border border-slate-200 text-xs space-y-1 font-body">
                      <div className="flex items-start justify-between gap-2">
                        <span className="font-semibold text-text-primary text-xs">
                          Q1. Assertion: Current is same in series circuit.
                        </span>
                        <span className="text-xs font-mono font-semibold text-primary bg-indigo-50 px-1.5 py-0.5 rounded shrink-0">
                          [1 Mark]
                        </span>
                      </div>
                      <p className="text-xs text-text-secondary">
                        <strong className="text-emerald-700">Marking Rubric:</strong> 0.5M formula + 0.5M single continuous pathway explanation.
                      </p>
                    </div>
                  </div>

                  {/* Pillar 2 Snippet: 1-Click WhatsApp & UPI Fee Card */}
                  <div className="p-3.5 rounded-xl bg-emerald-50/60 border border-emerald-200/80 space-y-2 hover:border-emerald-300 transition-colors">
                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-1.5 font-semibold text-emerald-900">
                        <Smartphone className="w-3.5 h-3.5 text-whatsapp-green" />
                        <span>Polite WhatsApp Fee Engine</span>
                      </div>
                      <span className="text-xs font-semibold text-emerald-800 bg-emerald-200/60 px-2 py-0.5 rounded-full">
                        ₹3,000 Due
                      </span>
                    </div>

                    <div className="bg-white p-2.5 rounded-lg border border-emerald-100 text-xs space-y-1.5 font-body">
                      <p className="text-xs text-text-secondary leading-snug">
                        “Namaste Mrs. Sharma, Aarav attended 12/12 sessions (92% in Polynomials). Oct fee is ready to pay below:”
                      </p>
                      <div className="flex items-center justify-between pt-0.5">
                        <span className="text-xs font-mono text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                          upi://pay?pa=tutor@okaxis...
                        </span>
                        <span className="text-xs font-semibold text-whatsapp-green-dark flex items-center gap-1">
                          ⚡ 1-Click Pay
                        </span>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Bottom interactive hint */}
                <div className="pt-1 flex items-center justify-between text-xs text-text-muted">
                  <span>Interactive Simulators below</span>
                  <button
                    onClick={onScrollToPlayground}
                    className="text-primary font-semibold hover:underline flex items-center gap-0.5"
                  >
                    <span>Try it live</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
