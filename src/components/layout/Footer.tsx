import React from 'react'
import { Badge } from '../ui/Badge'
import { BookOpen, Mail, MapPin, Sparkles, CheckCircle2 } from 'lucide-react'

export const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary-slate text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          
          {/* Col 1 & 2: Mission & Identity */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center text-white">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="font-display font-extrabold text-2xl tracking-tight text-white">
                Tutor<span className="text-indigo-400">Gate</span>
              </span>
            </div>
            
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              The AI-Powered Operating System designed specifically for India’s 10 million+ independent home tutors and neighborhood coaching batches. Eliminating the 15-hour prep tax and awkward fee collection.
            </p>

            <div className="pt-2">
              <Badge variant="claude" className="bg-[#1A1513] border-[#3F170D] text-[#E8977F]">
                Anthropic Claude for Startups Cohort Application
              </Badge>
            </div>
          </div>

          {/* Col 3: AI Teaching Suite */}
          <div className="space-y-3">
            <h4 className="font-display font-semibold text-white text-sm uppercase tracking-wider">
              AI Pedagogical Suite
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#ai-studio" className="hover:text-indigo-400 transition-colors">CBSE & ICSE Worksheet Maker</a></li>
              <li><a href="#ai-studio" className="hover:text-indigo-400 transition-colors">Step-Marking Rubric Engine</a></li>
              <li><a href="#vision-demo" className="hover:text-indigo-400 transition-colors">Snap Textbook to Quiz (Vision)</a></li>
              <li><a href="#ai-studio" className="hover:text-indigo-400 transition-colors">Indian Concept Simplifier</a></li>
              <li><a href="#fee-os" className="hover:text-indigo-400 transition-colors">Automated WhatsApp Reports</a></li>
            </ul>
          </div>

          {/* Col 4: Administrative OS */}
          <div className="space-y-3">
            <h4 className="font-display font-semibold text-white text-sm uppercase tracking-wider">
              Fee & Administrative OS
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><a href="#fee-os" className="hover:text-emerald-400 transition-colors">1-Tap WhatsApp Fee Reminders</a></li>
              <li><a href="#fee-os" className="hover:text-emerald-400 transition-colors">Embedded UPI Deep-Links</a></li>
              <li><a href="#fee-os" className="hover:text-emerald-400 transition-colors">Digital PDF Fee Receipts</a></li>
              <li><a href="#features" className="hover:text-emerald-400 transition-colors">1-Tap Attendance & Alerts</a></li>
              <li><a href="#features" className="hover:text-emerald-400 transition-colors">Batch & Student Rosters</a></li>
            </ul>
          </div>

          {/* Col 5: Curriculum & Contact */}
          <div className="space-y-3">
            <h4 className="font-display font-semibold text-white text-sm uppercase tracking-wider">
              Curriculum & Contact
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li className="flex items-center gap-1.5 text-xs text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                <span>CBSE (Classes 6–12)</span>
              </li>
              <li className="flex items-center gap-1.5 text-xs text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                <span>ICSE & ISC (Classes 8–12)</span>
              </li>
              <li className="flex items-center gap-1.5 text-xs text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0" />
                <span>JEE & NEET Foundation</span>
              </li>
              <li className="pt-2">
                <a
                  href="mailto:founder@tutorgate.in"
                  className="inline-flex items-center gap-2 text-xs text-indigo-300 hover:text-white transition-colors"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>founder@tutorgate.in</span>
                </a>
              </li>
              <li className="flex items-center gap-2 text-xs text-slate-500">
                <MapPin className="w-3.5 h-3.5" />
                <span>Delhi NCR & Bengaluru, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-2">
            <span>© 2026 TutorGate Technologies Pvt. Ltd. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-slate-400">
              <Sparkles className="w-3.5 h-3.5 text-claude-coral" />
              Engineered with Anthropic Claude 5.5
            </span>
            <span className="text-slate-700">|</span>
            <span className="text-slate-400">Built for Indian Private Educators</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
