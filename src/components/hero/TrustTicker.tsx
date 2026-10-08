import React from 'react'
import { Users, Clock, ShieldCheck, Zap } from 'lucide-react'

export const TrustTicker: React.FC = () => {
  const stats = [
    {
      icon: <Users className="w-4 h-4 text-primary" />,
      label: 'Target Market',
      value: '10M+ Independent Tutors',
      detail: '1-on-1 & small batch educators across India'
    },
    {
      icon: <Clock className="w-4 h-4 text-accent-amber" />,
      label: 'Weekly Prep Time',
      value: '15+ Hours Saved',
      detail: 'No more late nights with RD Sharma & NCERT'
    },
    {
      icon: <ShieldCheck className="w-4 h-4 text-accent-emerald" />,
      label: 'Fee Reconciliation',
      value: '1-Click UPI & WhatsApp',
      detail: 'Zero social awkwardness collecting tuition'
    },
    {
      icon: <Zap className="w-4 h-4 text-claude-coral" />,
      label: 'Claude Prompt Caching',
      value: '90% Cost Cut • Sub-Second',
      detail: 'Syllabus cached for instant generation'
    }
  ]

  return (
    <div className="border-y border-neutral-border bg-white/70 py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-slate-50 border border-slate-200 shrink-0 mt-0.5">
                {stat.icon}
              </div>
              <div>
                <span className="block text-xs font-semibold text-text-muted uppercase tracking-wider">
                  {stat.label}
                </span>
                <span className="block text-base sm:text-lg font-display font-bold text-text-primary tabular-nums leading-snug">
                  {stat.value}
                </span>
                <span className="block text-xs text-text-secondary mt-0.5">
                  {stat.detail}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
