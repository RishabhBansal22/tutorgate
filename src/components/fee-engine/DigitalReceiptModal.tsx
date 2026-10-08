import React from 'react'
import { StudentProfile } from '../../types'
import { Button } from '../ui/Button'
import { CheckCircle2, Download, X, ShieldCheck } from 'lucide-react'

interface DigitalReceiptModalProps {
  student: StudentProfile
  onClose: () => void
}

export const DigitalReceiptModal: React.FC<DigitalReceiptModalProps> = ({
  student,
  onClose
}) => {
  const receiptNumber = `TG-REC-2026-${Math.floor(1000 + Math.random() * 9000)}`
  const dateStr = new Date().toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  })

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full overflow-hidden border border-slate-200">
        
        {/* Header */}
        <div className="bg-emerald-600 text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>

          <div className="flex items-center gap-2 mb-2">
            <CheckCircle2 className="w-5 h-5 text-emerald-200" />
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-100">
              Payment Verified & Reconciled
            </span>
          </div>

          <h3 className="font-display font-extrabold text-2xl tracking-tight">
            ₹{student.monthlyFee.toLocaleString('en-IN')} Received
          </h3>
          <p className="text-xs text-emerald-100 mt-1">
            Auto-generated digital tuition fee receipt
          </p>
        </div>

        {/* Receipt Body */}
        <div className="p-6 space-y-4 text-xs text-text-secondary">
          
          <div className="flex justify-between border-b border-slate-100 pb-2">
            <span className="font-semibold text-text-muted">Receipt No:</span>
            <span className="font-mono font-bold text-text-primary">{receiptNumber}</span>
          </div>

          <div className="flex justify-between border-b border-slate-100 pb-2">
            <span className="font-semibold text-text-muted">Student Name:</span>
            <span className="font-bold text-text-primary">{student.name}</span>
          </div>

          <div className="flex justify-between border-b border-slate-100 pb-2">
            <span className="font-semibold text-text-muted">Batch:</span>
            <span className="text-text-primary">{student.batchName}</span>
          </div>

          <div className="flex justify-between border-b border-slate-100 pb-2">
            <span className="font-semibold text-text-muted">Billing Period:</span>
            <span className="text-text-primary">October 2026</span>
          </div>

          <div className="flex justify-between border-b border-slate-100 pb-2">
            <span className="font-semibold text-text-muted">Payment Channel:</span>
            <span className="font-semibold text-emerald-700">UPI Instant Settlement (GPay/PhonePe)</span>
          </div>

          <div className="flex justify-between border-b border-slate-100 pb-2">
            <span className="font-semibold text-text-muted">Attendance Record:</span>
            <span className="text-text-primary">{student.sessionsAttended}/{student.totalSessions} Sessions (100%)</span>
          </div>

          <div className="flex justify-between border-b border-slate-100 pb-2">
            <span className="font-semibold text-text-muted">Issue Date:</span>
            <span className="text-text-primary">{dateStr}</span>
          </div>

          {/* Watermark Verification */}
          <div className="pt-2 p-3 rounded-lg bg-slate-50 border border-slate-200 flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
            <div className="text-xs leading-tight">
              <span className="font-bold text-slate-800 block">TutorGate Cryptographic Verification</span>
              <span className="text-slate-500">Sent directly to {student.parentPhone} via WhatsApp</span>
            </div>
          </div>

        </div>

        {/* Modal Actions */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 flex items-center justify-end gap-2.5">
          <Button
            variant="secondary"
            size="sm"
            onClick={onClose}
          >
            Close
          </Button>

          <Button
            variant="whatsapp"
            size="sm"
            onClick={() => {
              alert(`Receipt PDF shared to ${student.parentName} (${student.parentPhone}) via WhatsApp!`)
              onClose()
            }}
            icon={<Download className="w-3.5 h-3.5" />}
          >
            Share to Parent WhatsApp
          </Button>
        </div>

      </div>
    </div>
  )
}
