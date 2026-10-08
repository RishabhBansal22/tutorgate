import React, { useState } from 'react'
import { textbookExamples } from '../../data/textbookExamples'
import { Badge } from '../ui/Badge'
import { Button } from '../ui/Button'
import { Camera, Sparkles, ShieldCheck, CheckCircle2 } from 'lucide-react'

export const SnapAndPracticeDemo: React.FC = () => {
  const [selectedExampleId, setSelectedExampleId] = useState(textbookExamples[0].id)

  const activeExample = textbookExamples.find(e => e.id === selectedExampleId) || textbookExamples[0]

  const handleSelectExample = (id: string) => {
    setSelectedExampleId(id)
  }

  return (
    <section id="vision-demo" className="py-16 sm:py-20 bg-white border-t border-neutral-border relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Headline */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <Badge variant="claude">
            Multimodal Vision (Claude 5.5)
          </Badge>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-text-primary tracking-tight">
            “Snap & Practice”: Textbook Photo to Anti-Cheating Quiz
          </h2>
          <p className="text-text-secondary text-base sm:text-lg">
            Students memorize answers from Google and DoubtNut. Photograph any NCERT or reference book diagram; Claude 5.5 Vision generates freshly mutated numerical variants with verified step solutions.
          </p>
        </div>

        {/* Example Switcher Chips */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8">
          {textbookExamples.map(example => (
            <button
              key={example.id}
              onClick={() => handleSelectExample(example.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer border ${
                selectedExampleId === example.id
                  ? 'bg-primary text-white border-primary shadow-sm'
                  : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
              }`}
            >
              📷 {example.title}
            </button>
          ))}
        </div>

        {/* 3-Step Visual Transformation Flow */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Step 1: Textbook Photo Input (4 cols) */}
          <div className="lg:col-span-4 bg-slate-50 rounded-2xl border border-slate-200 p-5 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  Step 1: Tutor Phone Snapshot
                </span>
                <span className="text-xs bg-slate-200 text-slate-700 px-2 py-0.5 rounded font-mono">
                  {activeExample.sourceBook}
                </span>
              </div>

              {/* Simulated Textbook Page Box */}
              <div className="bg-amber-50/50 border border-amber-200/80 rounded-xl p-4 space-y-2.5 font-serif text-slate-800 shadow-xs">
                <div className="flex items-center gap-2 text-xs font-sans text-amber-900 font-semibold border-b border-amber-200 pb-1.5">
                  <Camera className="w-4 h-4 text-amber-700" />
                  <span>{activeExample.diagramType}</span>
                </div>
                <p className="text-xs italic leading-relaxed">
                  “{activeExample.originalSnippet}”
                </p>
                <div className="p-2 bg-white/80 rounded border border-amber-200 text-xs font-mono text-slate-600">
                  Target Concept: {activeExample.chapter}
                </div>
              </div>
            </div>

            <div className="text-xs text-text-muted flex items-center gap-1.5 pt-2">
              <Camera className="w-3.5 h-3.5 text-slate-400" />
              <span>Parsed via Claude 5.5 Multimodal Vision API</span>
            </div>
          </div>

          {/* Step 2: Claude Reasoning Engine (4 cols) */}
          <div className="lg:col-span-4 bg-dark-canvas text-white rounded-2xl border border-slate-800 p-5 space-y-4 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-claude-coral/10 rounded-full blur-2xl" />

            <div className="space-y-3 relative z-10">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-claude-coral uppercase tracking-wider flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  Step 2: Vision & Schema Extraction
                </span>
                <span className="text-xs bg-slate-800 text-emerald-400 px-2 py-0.5 rounded font-mono">
                  0.41s Latency
                </span>
              </div>

              <div className="space-y-2 text-xs font-mono">
                <div className="p-3 bg-dark-surface rounded-xl border border-slate-800 space-y-1.5">
                  <span className="text-xs text-slate-400 block font-sans">Extracted Diagram Equation:</span>
                  <div className="text-emerald-400 text-xs break-all">
                    {activeExample.parsedFormula}
                  </div>
                </div>

                <div className="p-3 bg-dark-surface rounded-xl border border-slate-800 space-y-1">
                  <span className="text-xs text-slate-400 block font-sans">Mutation Constraint:</span>
                  <p className="text-slate-300 text-xs font-sans">
                    Alters numerical values while preserving clean, integer-friendly student arithmetic.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-xs text-slate-400 flex items-center gap-1.5 pt-2 relative z-10">
              <ShieldCheck className="w-3.5 h-3.5 text-accent-emerald" />
              <span>STEM proof verifier confirms mathematical validity</span>
            </div>
          </div>

          {/* Step 3: Fresh Variant Output (4 cols) */}
          <div className="lg:col-span-4 bg-emerald-50/50 rounded-2xl border border-emerald-200 p-5 space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-emerald-900 uppercase tracking-wider">
                  Step 3: Anti-Cheating Parallel Variant
                </span>
                <span className="text-xs bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-semibold">
                  Zero Google Copies
                </span>
              </div>

              <div className="bg-white rounded-xl border border-emerald-200 p-4 space-y-3 shadow-xs text-xs">
                <div>
                  <span className="font-bold text-slate-900 block text-sm">
                    {activeExample.parallelVariant.title}
                  </span>
                  <span className="text-xs text-emerald-700 font-medium">
                    {activeExample.parallelVariant.modifiedValues}
                  </span>
                </div>

                <p className="text-slate-700 leading-relaxed font-body">
                  {activeExample.parallelVariant.problemText}
                </p>

                <div className="p-2.5 bg-emerald-50 rounded-lg border border-emerald-100 font-mono text-xs text-emerald-950">
                  <strong className="text-emerald-800 block text-xs font-sans uppercase">
                    Step Solution:
                  </strong>
                  {activeExample.parallelVariant.solutionSummary}
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Button
                variant="primary"
                size="sm"
                fullWidth
                onClick={() => alert('Exported to printable test paper!')}
                icon={<CheckCircle2 className="w-3.5 h-3.5" />}
              >
                Add Variant to Test Paper
              </Button>
            </div>
          </div>

        </div>

      </div>
    </section>
  )
}
