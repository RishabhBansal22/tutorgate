import React from 'react'
import { Badge } from '../ui/Badge'
import { Check, X, Clock, Smartphone, FileSpreadsheet, MessageSquare, UserCheck } from 'lucide-react'

export const ComparisonMatrix: React.FC = () => {
  const comparisons = [
    {
      aspect: 'Weekly Prep Time',
      icon: <Clock className="w-4 h-4 text-slate-500" />,
      oldWay: '15+ hours flipping through RD Sharma, RS Aggarwal & NCERT Exemplar late at night.',
      tutorGateWay: '30 seconds using cached CBSE & ICSE blueprints generated with Claude 5.5.',
      winner: true
    },
    {
      aspect: 'Tuition Fee Collection',
      icon: <Smartphone className="w-4 h-4 text-slate-500" />,
      oldWay: 'Socially awkward reminder calls or ignored WhatsApp chats; ₹15,000+ delayed each month.',
      tutorGateWay: '1-tap polite WhatsApp alert paired with attendance transparency & 1-click UPI links.',
      winner: true
    },
    {
      aspect: 'Question Papers & Homework',
      icon: <FileSpreadsheet className="w-4 h-4 text-slate-500" />,
      oldWay: 'Photocopied test sheets with standard textbook numbers that students easily google.',
      tutorGateWay: 'Anti-cheating numerical variants with complete 0.5-mark step rubrics and model solutions.',
      winner: true
    },
    {
      aspect: 'Parent Communication',
      icon: <MessageSquare className="w-4 h-4 text-slate-500" />,
      oldWay: 'Fragmented phone calls when grades drop; anxious parents questioning tuition quality.',
      tutorGateWay: 'Automated 1-click WhatsApp progress reports in polished English or natural Hinglish.',
      winner: true
    },
    {
      aspect: 'Attendance & Arrival Logs',
      icon: <UserCheck className="w-4 h-4 text-slate-500" />,
      oldWay: 'Dog-eared paper diaries with zero parent visibility when students travel house-to-house.',
      tutorGateWay: '1-tap check-in with instant automated WhatsApp arrival notification for anxious parents.',
      winner: true
    }
  ]

  return (
    <section id="comparison" className="py-16 sm:py-20 bg-neutral-bg border-t border-neutral-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <Badge variant="board">
            The Paradigm Shift
          </Badge>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-text-primary tracking-tight">
            The Old Way vs. The TutorGate Way
          </h2>
          <p className="text-text-secondary text-base sm:text-lg">
            See why independent Indian tutors are switching from paper notebooks and fragmented chat groups to the AI-Powered Operating System.
          </p>
        </div>

        {/* Comparison Table Container */}
        <div className="bg-white rounded-2xl border border-neutral-border shadow-elevation-low overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-neutral-border bg-slate-50/80 text-xs">
                  <th className="py-4 px-6 font-display font-bold text-text-muted uppercase tracking-wider w-1/4">
                    Workflow Dimension
                  </th>
                  <th className="py-4 px-6 font-display font-bold text-slate-500 uppercase tracking-wider w-[37.5%]">
                    The Old Way (Paper Diary & Manual Grunt)
                  </th>
                  <th className="py-4 px-6 font-display font-bold text-primary uppercase tracking-wider w-[37.5%] bg-primary-light/40">
                    The TutorGate Way (AI-Powered OS)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-border text-sm">
                {comparisons.map((row, idx) => (
                  <tr key={idx} className="hover:bg-slate-50/50 transition-colors">
                    {/* Dimension */}
                    <td className="py-5 px-6 font-display font-semibold text-text-primary">
                      <div className="flex items-center gap-2.5">
                        <span className="p-1.5 rounded-lg bg-slate-100 border border-slate-200">
                          {row.icon}
                        </span>
                        <span>{row.aspect}</span>
                      </div>
                    </td>

                    {/* Old Way */}
                    <td className="py-5 px-6 text-text-secondary text-xs sm:text-sm">
                      <div className="flex items-start gap-2">
                        <X className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                        <span>{row.oldWay}</span>
                      </div>
                    </td>

                    {/* TutorGate Way */}
                    <td className="py-5 px-6 text-text-primary text-xs sm:text-sm bg-primary-light/20 font-medium">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5 font-bold" />
                        <span>{row.tutorGateWay}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  )
}
