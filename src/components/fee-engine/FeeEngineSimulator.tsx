import React, { useState } from 'react'
import { mockStudents } from '../../data/mockStudents'
import { WhatsAppPhoneSimulator } from './WhatsAppPhoneSimulator'
import { DigitalReceiptModal } from './DigitalReceiptModal'
import { Button } from '../ui/Button'
import { Badge } from '../ui/Badge'
import { Smartphone, CheckCircle2, AlertCircle, RefreshCw, ShieldCheck, CreditCard } from 'lucide-react'

export const FeeEngineSimulator: React.FC = () => {
  const [selectedStudentId, setSelectedStudentId] = useState<string>(mockStudents[0].id)
  const [isSent, setIsSent] = useState<boolean>(true)
  const [isPaid, setIsPaid] = useState<boolean>(false)
  const [isReceiptModalOpen, setIsReceiptModalOpen] = useState<boolean>(false)

  const activeStudent = mockStudents.find(s => s.id === selectedStudentId) || mockStudents[0]

  const handleSelectStudent = (studentId: string) => {
    setSelectedStudentId(studentId)
    setIsSent(true)
    setIsPaid(false)
  }

  const handleSendReminder = () => {
    setIsSent(true)
    setIsPaid(false)
  }

  const handleSimulatePayment = () => {
    setIsPaid(true)
  }

  const handleReset = () => {
    setIsSent(true)
    setIsPaid(false)
  }

  return (
    <section id="fee-os" className="py-16 sm:py-20 bg-neutral-bg relative overflow-hidden border-t border-neutral-border">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Headline */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <Badge variant="amber">
            The #1 Administrative Pain Point Solved
          </Badge>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-text-primary tracking-tight">
            The “Zero-Awkwardness” WhatsApp & UPI Fee Ledger
          </h2>
          <p className="text-text-secondary text-base sm:text-lg">
            Stop making uncomfortable fee calls. TutorGate turns awkward payment requests into polite, transparent WhatsApp academic updates with 1-click UPI deep-links (<code className="font-mono text-xs bg-slate-200 px-1 py-0.5 rounded">upi://pay</code>).
          </p>
        </div>

        {/* 12-Column Split: Ledger vs Phone Simulator */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column (7 cols): Tutor's 1-Tap Management Ledger */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Student Picker Tabs */}
            <div className="space-y-2">
              <span className="text-xs font-semibold text-text-muted uppercase tracking-wider block">
                Select Student from Roster
              </span>
              <div className="grid grid-cols-3 gap-2">
                {mockStudents.map(student => {
                  const isSelected = student.id === selectedStudentId
                  return (
                    <button
                      key={student.id}
                      onClick={() => handleSelectStudent(student.id)}
                      className={`p-3 rounded-xl border text-left transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-white border-primary shadow-elevation-low ring-2 ring-primary/10'
                          : 'bg-white/60 border-slate-200 hover:bg-white text-slate-600'
                      }`}
                    >
                      <span className="font-display font-bold text-sm block truncate text-text-primary">
                        {student.name}
                      </span>
                      <span className="text-xs text-text-secondary block truncate">
                        {student.grade} • {student.subject.split(' ')[0]}
                      </span>
                      <span className="text-xs font-bold text-accent-amber block mt-1 tabular-nums">
                        ₹{student.monthlyFee.toLocaleString('en-IN')}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Active Student Fee Detail Card */}
            <div className="bg-white rounded-2xl border border-neutral-border p-6 shadow-elevation-low space-y-5">
              
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-100">
                <div>
                  <h3 className="font-display font-extrabold text-xl text-text-primary">
                    {activeStudent.name}
                  </h3>
                  <p className="text-xs text-text-secondary mt-0.5">
                    {activeStudent.batchName} ({activeStudent.batchType})
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-amber-50 text-amber-800 border border-amber-200">
                    <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
                    {activeStudent.daysDelayed} Days Delayed
                  </span>
                  {isPaid ? (
                    <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      Reconciled
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full bg-indigo-50 text-primary border border-indigo-200">
                      Pending
                    </span>
                  )}
                </div>
              </div>

              {/* Attendance & Performance Transparency Pill */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-xs font-medium text-slate-500 uppercase block">Pending Fee</span>
                  <span className="font-display font-bold text-lg text-slate-900 tabular-nums">
                    ₹{activeStudent.monthlyFee.toLocaleString('en-IN')}
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-xs font-medium text-slate-500 uppercase block">Attendance</span>
                  <span className="font-display font-bold text-lg text-emerald-700 tabular-nums">
                    {activeStudent.sessionsAttended}/{activeStudent.totalSessions} Sessions
                  </span>
                </div>

                <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 col-span-2 sm:col-span-1">
                  <span className="text-xs font-medium text-slate-500 uppercase block">Last Test</span>
                  <span className="font-display font-bold text-lg text-primary tabular-nums">
                    {activeStudent.lastTestScorePct}% Score
                  </span>
                </div>
              </div>

              {/* Tutor UPI Configuration */}
              <div className="p-3.5 rounded-xl bg-indigo-50/70 border border-indigo-100 flex items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2">
                  <CreditCard className="w-4 h-4 text-primary shrink-0" />
                  <span className="font-medium text-indigo-950">
                    Settlement VPA: <strong className="font-mono text-primary">{activeStudent.tutorVpa}</strong>
                  </span>
                </div>
                <span className="text-xs font-semibold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded">
                  0% Commission
                </span>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                <Button
                  variant="whatsapp"
                  size="lg"
                  onClick={handleSendReminder}
                  icon={<Smartphone className="w-4 h-4" />}
                  fullWidth
                >
                  Send Polite WhatsApp Reminder
                </Button>

                <Button
                  variant="secondary"
                  size="lg"
                  onClick={handleReset}
                  icon={<RefreshCw className="w-4 h-4 text-slate-500" />}
                >
                  Reset Demo
                </Button>
              </div>

            </div>

            {/* Why Indian Tutors Love This Flow */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-text-secondary">
              <div className="p-3 rounded-lg bg-white border border-slate-200 flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong>Zero Social Friction:</strong> Anchored in student praise and real session counts rather than dry invoices.
                </span>
              </div>
              <div className="p-3 rounded-lg bg-white border border-slate-200 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                <span>
                  <strong>Direct Bank Settlement:</strong> Fees transfer instantly from parent UPI app straight to teacher’s account.
                </span>
              </div>
            </div>

          </div>

          {/* Right Column (5 cols): WhatsApp Phone Simulator */}
          <div className="lg:col-span-5 flex justify-center">
            <WhatsAppPhoneSimulator
              student={activeStudent}
              isSent={isSent}
              isPaid={isPaid}
              onSimulatePayment={handleSimulatePayment}
              onViewReceipt={() => setIsReceiptModalOpen(true)}
            />
          </div>

        </div>

      </div>

      {/* Digital Receipt Modal */}
      {isReceiptModalOpen && (
        <DigitalReceiptModal
          student={activeStudent}
          onClose={() => setIsReceiptModalOpen(false)}
        />
      )}

    </section>
  )
}
