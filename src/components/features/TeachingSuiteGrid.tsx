import React, { useState } from 'react'
import { analogies } from '../../data/analogies'
import { Badge } from '../ui/Badge'
import { Button } from '../ui/Button'
import { FileText, Camera, Lightbulb, MessageSquareQuote, CheckCircle2, ChevronRight, X } from 'lucide-react'

export const TeachingSuiteGrid: React.FC = () => {
  const [selectedAnalogyIndex, setSelectedAnalogyIndex] = useState<number | null>(null)

  const features = [
    {
      icon: <FileText className="w-5 h-5 text-primary" />,
      tag: 'CBSE & ICSE Blueprints',
      title: 'Smart Question Paper & Rubric Maker',
      description: 'Generates 25-mark or 50-mark board-pattern papers in 30 seconds. Includes assertion-reasoning questions and granular 0.5-mark step rubrics.',
      cta: 'View Playground',
      href: '#ai-studio'
    },
    {
      icon: <Camera className="w-5 h-5 text-claude-coral" />,
      tag: 'Claude 5.5 Vision',
      title: 'Multimodal Textbook-to-Quiz',
      description: 'Take a photo of any bulky RD Sharma or NCERT page. Claude parses the geometry diagram and generates fresh numerical variants so students cannot google answers.',
      cta: 'See Vision Demo',
      href: '#vision-demo'
    },
    {
      icon: <Lightbulb className="w-5 h-5 text-accent-amber" />,
      tag: 'Indian Relatability Engine',
      title: 'The 5-Min Concept Simplifier',
      description: 'Explain tough abstract formulas with unforgettable cultural hooks: auto-rickshaw fares for AP, Diwali fairy lights for series circuits, pressure cookers for gas laws.',
      cta: 'Explore Indian Analogies',
      action: () => setSelectedAnalogyIndex(0)
    },
    {
      icon: <MessageSquareQuote className="w-5 h-5 text-whatsapp-green" />,
      tag: 'Hinglish Parent Updates',
      title: '1-Click WhatsApp Progress Cards',
      description: 'Synthesizes attendance, test marks, and student weak-areas into warm, respectful WhatsApp cards in natural English or Hinglish that parents love.',
      cta: 'Explore Fee & Chat OS',
      href: '#fee-os'
    }
  ]

  return (
    <section id="teaching-suite" className="py-16 sm:py-20 bg-neutral-bg border-t border-neutral-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Pillar Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <Badge variant="claude">
              Pillar 1: Academic Superpower
            </Badge>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-text-primary tracking-tight">
              The AI Teaching & Content Studio
            </h2>
            <p className="text-text-secondary text-base sm:text-lg">
              Engineered specifically for Indian tutors who teach across multiple boards and grades simultaneously. Save 15 hours every single week.
            </p>
          </div>

          <div className="text-xs font-semibold text-text-muted">
            Powered by Claude 5.5 Sonnet & Haiku
          </div>
        </div>

        {/* 4-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-neutral-border p-6 shadow-elevation-low hover:border-slate-300 hover:shadow-elevation-medium transition-all duration-200 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200 inline-block">
                    {item.icon}
                  </div>
                  <span className="text-xs font-semibold text-text-muted uppercase tracking-wider">
                    {item.tag}
                  </span>
                </div>

                <h3 className="font-display font-bold text-lg text-text-primary leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs text-text-secondary leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-2 border-t border-slate-100">
                {item.href ? (
                  <a
                    href={item.href}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
                  >
                    <span>{item.cta}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <button
                    onClick={item.action}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-accent-amber hover:underline cursor-pointer"
                  >
                    <span>{item.cta}</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Indian Analogies Modal */}
      {selectedAnalogyIndex !== null && (
        <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-xl w-full p-6 sm:p-8 space-y-6 shadow-2xl border border-slate-200 relative">
            <button
              onClick={() => setSelectedAnalogyIndex(null)}
              className="absolute top-5 right-5 p-1 text-slate-400 hover:text-slate-700"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-2">
              <Badge variant="amber">Indian Relatability Engine</Badge>
              <h3 className="font-display font-extrabold text-2xl text-text-primary">
                Culturally Relatable Science & Math Analogies
              </h3>
              <p className="text-xs text-text-secondary">
                Designed to bridge abstract textbook formulas with everyday Indian scenes.
              </p>
            </div>

            {/* Analogy Selector Pills */}
            <div className="flex gap-2 border-b border-slate-200 pb-2">
              {analogies.map((a, i) => (
                <button
                  key={a.id}
                  onClick={() => setSelectedAnalogyIndex(i)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    selectedAnalogyIndex === i
                      ? 'bg-primary text-white'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  {a.topic.split(' ')[0]}
                </button>
              ))}
            </div>

            {/* Active Analogy Card */}
            {analogies[selectedAnalogyIndex] && (
              <div className="space-y-4 p-4 rounded-xl bg-amber-50/60 border border-amber-200 text-xs">
                <div className="space-y-1">
                  <span className="font-bold text-amber-900 text-sm block">
                    🍛 Hook: {analogies[selectedAnalogyIndex].indianRelatableHook}
                  </span>
                  <span className="text-slate-600 block text-xs">
                    Concept: {analogies[selectedAnalogyIndex].abstractConcept}
                  </span>
                </div>

                <div className="bg-white p-3.5 rounded-lg border border-amber-200 text-slate-800 leading-relaxed font-body">
                  {analogies[selectedAnalogyIndex].explanation}
                </div>

                <div className="flex items-center gap-1.5 text-emerald-800 text-xs font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Why it sticks: {analogies[selectedAnalogyIndex].whyStudentsRemember}</span>
                </div>
              </div>
            )}

            <div className="flex justify-end">
              <Button
                variant="primary"
                size="sm"
                onClick={() => setSelectedAnalogyIndex(null)}
              >
                Close Demo
              </Button>
            </div>
          </div>
        </div>
      )}

    </section>
  )
}
