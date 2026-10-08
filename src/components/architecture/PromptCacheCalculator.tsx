import React, { useState } from 'react'
import { Badge } from '../ui/Badge'
import { Zap, Clock, TrendingDown } from 'lucide-react'

export const PromptCacheCalculator: React.FC = () => {
  const [worksheetsPerMonth, setWorksheetsPerMonth] = useState<number>(15000)

  // Prompt caching economics:
  // CBSE syllabus template = ~38,000 tokens cached
  // Uncached price: ~$3.00 / 1M input tokens
  // Cached write/read price: ~$0.30 / 1M cached read tokens (90% discount)
  const uncachedCostUsd = (worksheetsPerMonth * 40000 * 3.0) / 1000000
  const cachedCostUsd = (worksheetsPerMonth * 40000 * 0.30) / 1000000 + (40000 * 3.75) / 1000000
  const monthlySavingsUsd = Math.max(0, uncachedCostUsd - cachedCostUsd)
  const savingsPct = Math.round((monthlySavingsUsd / uncachedCostUsd) * 100)
  const monthlySavingsInr = monthlySavingsUsd * 86.5

  return (
    <div className="bg-dark-surface border border-slate-800 rounded-2xl p-6 sm:p-8 space-y-6 text-white">
      
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-800 pb-4">
        <div>
          <span className="text-xs font-semibold text-claude-coral uppercase tracking-wider flex items-center gap-1.5">
            <Zap className="w-4 h-4 text-claude-coral" />
            Frontier Economics Simulator
          </span>
          <h3 className="font-display font-extrabold text-xl text-white mt-1">
            Anthropic Prompt Caching Advantage
          </h3>
        </div>
        <Badge variant="cache" className="bg-[#0D281E] text-emerald-400 border-emerald-900">
          90% Cache Cost Reduction
        </Badge>
      </div>

      {/* Slider Control */}
      <div className="space-y-3">
        <div className="flex justify-between items-center text-xs">
          <span className="text-slate-400 font-medium">Monthly Worksheets & Blueprints Generated:</span>
          <span className="font-mono font-bold text-lg text-primary-light tabular-nums">
            {worksheetsPerMonth.toLocaleString('en-IN')} papers / mo
          </span>
        </div>

        <input
          type="range"
          min="2000"
          max="100000"
          step="1000"
          value={worksheetsPerMonth}
          onChange={(e) => setWorksheetsPerMonth(Number(e.target.value))}
          className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-primary"
        />

        <div className="flex justify-between text-xs text-slate-500 font-mono">
          <span>2,000 papers (Early Beta)</span>
          <span>50,000 papers (City Scale)</span>
          <span>1,00,000 papers (India Scale)</span>
        </div>
      </div>

      {/* Economic Comparison Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
        
        {/* Uncached Standard LLM */}
        <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 space-y-1">
          <span className="text-xs text-slate-500 uppercase block font-sans">
            Standard Generic LLM
          </span>
          <div className="font-mono text-xl font-bold text-slate-400 line-through tabular-nums">
            ${Math.round(uncachedCostUsd).toLocaleString()}
          </div>
          <span className="text-xs text-slate-500 flex items-center gap-1">
            <Clock className="w-3 h-3" />
            Latency: ~4.2 seconds
          </span>
        </div>

        {/* TutorGate Cached Flow */}
        <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-800/60 space-y-1">
          <span className="text-xs text-emerald-400 uppercase block font-sans">
            TutorGate + Prompt Cache
          </span>
          <div className="font-mono text-2xl font-bold text-emerald-400 tabular-nums">
            ${Math.round(cachedCostUsd).toLocaleString()}
          </div>
          <span className="text-xs text-emerald-300 flex items-center gap-1 font-mono">
            <Zap className="w-3 h-3 text-emerald-400" />
            Latency: 0.38 seconds
          </span>
        </div>

        {/* Monthly Net Savings */}
        <div className="p-4 rounded-xl bg-indigo-950/40 border border-indigo-800/60 space-y-1">
          <span className="text-xs text-indigo-300 uppercase block font-sans">
            Monthly Cost Cut
          </span>
          <div className="font-mono text-2xl font-bold text-white tabular-nums">
            ₹{Math.round(monthlySavingsInr).toLocaleString('en-IN')}
          </div>
          <span className="text-xs text-indigo-200 flex items-center gap-1 font-semibold">
            <TrendingDown className="w-3.5 h-3.5 text-emerald-400" />
            {savingsPct}% Lower Token Cost
          </span>
        </div>

      </div>

      <p className="text-xs text-slate-400 leading-relaxed border-t border-slate-800/80 pt-3">
        By caching full NCERT textbooks, Bloom's Taxonomy rubrics, and CBSE examination blueprints (38,000+ input tokens), TutorGate achieves instantaneous generation speeds while operating at fractional inference costs.
      </p>

    </div>
  )
}
