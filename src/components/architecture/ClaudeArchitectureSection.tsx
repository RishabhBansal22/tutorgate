import React from 'react'
import { Badge } from '../ui/Badge'
import { PromptCacheCalculator } from './PromptCacheCalculator'
import { Sparkles, Layers, ShieldCheck, Camera, Cpu, Zap } from 'lucide-react'

export const ClaudeArchitectureSection: React.FC = () => {
  const pipelineSteps = [
    {
      step: '01',
      title: 'Curriculum Blueprint Agent',
      model: 'System Prompt Cache',
      detail: 'Pre-caches 40,000+ tokens of official CBSE & ICSE syllabus guidelines, Bloom’s taxonomy targets, and exam blueprints at 90% cost reduction.',
      icon: <Layers className="w-5 h-5 text-indigo-400" />
    },
    {
      step: '02',
      title: 'Pedagogical Generation Engine',
      model: 'Claude 5.5 Sonnet',
      detail: 'Synthesizes authentic board-level assertions, distractors, case studies, and long-answer derivations with deep reasoning.',
      icon: <Cpu className="w-5 h-5 text-claude-coral" />
    },
    {
      step: '03',
      title: 'STEM & Rubric Verifier Agent',
      model: 'Autonomous Self-Check',
      detail: 'Solves generated math and physics problems step-by-step from scratch. Discards any calculation that deviates by even 0.01%, guaranteeing 0 hallucinations.',
      icon: <ShieldCheck className="w-5 h-5 text-emerald-400" />
    },
    {
      step: '04',
      title: 'Multimodal Vision Engine',
      model: 'Claude 5.5 Vision',
      detail: 'Parses complex handwritten student assignments, geometry diagrams, and circuit schematics directly from tutor smartphone camera shots.',
      icon: <Camera className="w-5 h-5 text-amber-400" />
    },
    {
      step: '05',
      title: 'Hinglish Doubt & Chat Agent',
      model: 'Claude 5 Haiku',
      detail: 'Powers sub-second student analogies and warm, culturally respectful WhatsApp parent updates in natural English and Hinglish.',
      icon: <Zap className="w-5 h-5 text-whatsapp-green" />
    }
  ]

  return (
    <section id="claude-architecture" className="py-16 sm:py-24 bg-dark-canvas text-white border-t border-slate-800 relative overflow-hidden">
      
      {/* Background Glows */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-primary/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-claude-coral/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <Badge variant="claude" className="bg-[#1F1916] text-[#E8977F] border-[#3F170D]">
            Frontier AI Integration
          </Badge>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            Why Anthropic Claude is Our Architectural Backbone
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            High-stakes Indian exams (CBSE, ICSE, JEE/NEET foundation) leave zero margin for mathematical or scientific hallucination. We rely on Claude’s benchmark-leading reasoning and prompt caching.
          </p>
        </div>

        {/* 5-Stage Agentic Pipeline Grid */}
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-slate-800 pb-3">
            <span className="font-display font-bold text-lg text-white">
              The 5-Stage Agentic Content Pipeline
            </span>
            <span className="text-xs font-mono text-slate-400">
              Zero-Hallucination Architecture
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {pipelineSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-dark-surface border border-slate-800 rounded-2xl p-5 space-y-3 hover:border-slate-700 transition-all flex flex-col justify-between"
              >
                <div className="space-y-2.5">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-slate-500 font-bold">
                      {step.step}
                    </span>
                    <div className="p-2 rounded-lg bg-slate-900 border border-slate-800">
                      {step.icon}
                    </div>
                  </div>

                  <h3 className="font-display font-bold text-sm text-white leading-snug">
                    {step.title}
                  </h3>

                  <div className="inline-block px-2 py-0.5 rounded text-xs font-mono font-semibold bg-slate-800 text-slate-300 border border-slate-700">
                    {step.model}
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed font-body">
                    {step.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Economics Slider */}
        <PromptCacheCalculator />

        {/* Tiered Model Routing Matrix */}
        <div className="bg-dark-surface border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-5">
          <h3 className="font-display font-bold text-lg text-white">
            Tiered Model Routing for Cost & Latency Optimization
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-300">
              <thead className="bg-slate-900 text-slate-400 uppercase font-mono text-xs border-b border-slate-800">
                <tr>
                  <th className="py-3 px-4">Model Tier</th>
                  <th className="py-3 px-4">Primary Workload</th>
                  <th className="py-3 px-4">Latency</th>
                  <th className="py-3 px-4">Key Advantage</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-800/80">
                <tr>
                  <td className="py-3 px-4 font-semibold text-white flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-claude-coral" />
                    Claude 5.5 Sonnet
                  </td>
                  <td className="py-3 px-4 text-slate-300">50-Mark CBSE Question Papers, Step-Marking Rubrics, STEM Proofs</td>
                  <td className="py-3 px-4 font-mono text-slate-400">~1.2s</td>
                  <td className="py-3 px-4 text-emerald-400">State-of-the-art mathematical derivation accuracy</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-semibold text-white flex items-center gap-2">
                    <Zap className="w-3.5 h-3.5 text-whatsapp-green" />
                    Claude 5 Haiku
                  </td>
                  <td className="py-3 px-4 text-slate-300">Polite WhatsApp Parent Cards, 5-Min Warmup Quizzes, Cultural Analogies</td>
                  <td className="py-3 px-4 font-mono text-emerald-400">0.35s</td>
                  <td className="py-3 px-4 text-primary-light">Ultra-low latency with native Hinglish conversational tone</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  )
}
