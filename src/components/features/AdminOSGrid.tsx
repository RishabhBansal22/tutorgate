import React from 'react'
import { Badge } from '../ui/Badge'
import { Smartphone, Users, CheckSquare, Receipt, ShieldCheck, ChevronRight } from 'lucide-react'

export const AdminOSGrid: React.FC = () => {
  const adminFeatures = [
    {
      icon: <Smartphone className="w-5 h-5 text-whatsapp-green" />,
      tag: 'Zero-Awkwardness Cashflow',
      title: '1-Tap WhatsApp & UPI Ledger',
      description: 'Pairs positive academic achievements with 1-click UPI links (GPay/PhonePe). Direct settlement to tutor account with 0% gateway commission.',
      href: '#fee-os'
    },
    {
      icon: <Users className="w-5 h-5 text-primary" />,
      tag: 'Flexible Roster Organization',
      title: 'Batches & 1-on-1 Student Profiles',
      description: 'Seamlessly switch between traveling home-visit students and living-room batches. Track individual weaknesses like "Struggling with Trigonometry".',
      href: '#fee-os'
    },
    {
      icon: <CheckSquare className="w-5 h-5 text-accent-emerald" />,
      tag: 'Parent Transparency',
      title: '1-Tap Attendance & Arrival Alerts',
      description: 'Mark attendance with a single tap. Anxious Indian parents automatically receive an automated WhatsApp confirmation confirming student arrival.',
      href: '#fee-os'
    },
    {
      icon: <Receipt className="w-5 h-5 text-accent-amber" />,
      tag: 'Professional Accounting',
      title: 'Digital PDF Receipts & Tax Ledger',
      description: 'Auto-generates branded, verified digital payment receipts on UPI reconciliation. Eliminates handwritten receipt books and disputes.',
      href: '#fee-os'
    }
  ]

  return (
    <section id="admin-os" className="py-16 sm:py-20 bg-white border-t border-neutral-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Pillar Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <Badge variant="amber">
              Pillar 2: Financial & Operational Order
            </Badge>
            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-text-primary tracking-tight">
              The Administrative & Financial OS
            </h2>
            <p className="text-text-secondary text-base sm:text-lg">
              Say goodbye to dog-eared paper registers, forgotten cash fees, and awkward follow-up calls. Run your teaching practice with corporate efficiency.
            </p>
          </div>

          <div className="text-xs font-semibold text-text-muted flex items-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Bank-Grade UPI Deep-Link Protocol</span>
          </div>
        </div>

        {/* 4-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {adminFeatures.map((item, idx) => (
            <div
              key={idx}
              className="bg-neutral-bg rounded-2xl border border-neutral-border p-6 shadow-elevation-low hover:border-slate-300 hover:shadow-elevation-medium transition-all duration-200 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-white border border-slate-200 inline-block shadow-xs">
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

              <div className="pt-2 border-t border-slate-200/80">
                <a
                  href={item.href}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
                >
                  <span>Experience Interactive Demo</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
