import React from 'react'
import { StudentProfile } from '../../types'
import { Phone, Video, MoreVertical, CheckCheck, Zap, ShieldCheck, Download, ArrowRight } from 'lucide-react'

interface WhatsAppPhoneSimulatorProps {
  student: StudentProfile
  isSent: boolean
  isPaid: boolean
  onSimulatePayment: () => void
  onViewReceipt: () => void
}

export const WhatsAppPhoneSimulator: React.FC<WhatsAppPhoneSimulatorProps> = ({
  student,
  isSent,
  isPaid,
  onSimulatePayment,
  onViewReceipt
}) => {
  const upiDeepLink = `upi://pay?pa=${student.tutorVpa}&pn=SharmaTuitions&am=${student.monthlyFee}&cu=INR&tn=TuitionFeeOct${student.name.replace(/\s+/g, '')}`

  return (
    <div className="relative mx-auto max-w-[340px] sm:max-w-[380px] w-full">
      
      {/* Smartphone Outer Bezel */}
      <div className="rounded-[40px] border-[8px] border-slate-800 bg-slate-900 shadow-2xl overflow-hidden relative">
        
        {/* Smartphone Camera Notch */}
        <div className="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-4 bg-slate-800 rounded-full z-30 flex items-center justify-center">
          <div className="w-2.5 h-2.5 rounded-full bg-slate-950" />
        </div>

        {/* WhatsApp App Screen */}
        <div className="bg-[#EFEAE2] min-h-[520px] flex flex-col font-sans select-none relative pt-6">
          
          {/* WhatsApp Header Bar */}
          <div className="bg-whatsapp-green-dark text-white px-3 py-2.5 flex items-center justify-between shadow-sm z-20">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold text-white border border-white/30">
                ST
              </div>
              <div className="leading-tight">
                <span className="font-semibold text-sm block">Sharma Tuitions</span>
                <span className="text-xs text-emerald-100 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-300 inline-block" />
                  Online • Class Batch OS
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3 text-white/90">
              <Video className="w-4 h-4 cursor-pointer" />
              <Phone className="w-4 h-4 cursor-pointer" />
              <MoreVertical className="w-4 h-4 cursor-pointer" />
            </div>
          </div>

          {/* Chat Messages Body */}
          <div className="flex-1 p-3 space-y-3 overflow-y-auto text-xs">
            
            {/* Encryption Notice */}
            <div className="text-center my-2">
              <span className="inline-block bg-[#FFF5C4] text-[#54656F] text-xs px-2.5 py-1 rounded-md shadow-xs leading-tight max-w-[260px]">
                🔒 Messages are end-to-end encrypted. No one outside this chat can read them.
              </span>
            </div>

            {/* If reminder not sent yet */}
            {!isSent && (
              <div className="text-center py-12 px-4 space-y-2">
                <div className="w-10 h-10 rounded-full bg-slate-200 text-slate-500 mx-auto flex items-center justify-center">
                  <Phone className="w-5 h-5 text-slate-400" />
                </div>
                <p className="text-xs text-slate-500 font-medium">
                  Click <strong className="text-emerald-700">“Send Polite WhatsApp”</strong> on the ledger to trigger the 1-click fee reminder.
                </p>
              </div>
            )}

            {/* The Tutor's Polite Fee Reminder Message */}
            {isSent && (
              <div className="flex flex-col items-end space-y-1 animate-in fade-in slide-in-from-bottom-2 duration-200">
                <div className="bg-[#E7FFDB] text-slate-900 rounded-lg rounded-tr-none p-3 shadow-xs max-w-[92%] space-y-2 border border-[#D0F0C0]">
                  
                  {/* Message Greeting & Academic Tone */}
                  <div className="space-y-1.5 leading-relaxed text-xs">
                    <p className="font-semibold text-slate-900">
                      Namaste {student.parentName}, 🙏
                    </p>
                    <p className="text-slate-700">
                      Trust you are well. <strong className="text-slate-900">{student.name}</strong> attended{' '}
                      <span className="font-semibold text-emerald-800">{student.sessionsAttended}/{student.totalSessions} sessions</span> this month and scored{' '}
                      <span className="font-semibold text-emerald-800">{student.lastTestScorePct}% in {student.lastTestTopic}</span>.
                    </p>
                    <p className="text-slate-700">
                      The monthly tuition fee for October (<strong className="font-bold text-slate-900 tabular-nums">₹{student.monthlyFee.toLocaleString('en-IN')}</strong>) is due.
                    </p>
                    <p className="text-slate-700">
                      You can pay conveniently in 1 click via UPI below:
                    </p>
                  </div>

                  {/* 1-Click Embedded UPI Deep-Link Action Button */}
                  <div className="pt-1 space-y-1.5">
                    <button
                      onClick={onSimulatePayment}
                      disabled={isPaid}
                      className={`w-full py-2.5 px-3 rounded-lg font-display font-semibold text-xs flex items-center justify-center gap-2 shadow-sm transition-all ${
                        isPaid
                          ? 'bg-emerald-600 text-white cursor-default'
                          : 'bg-[#5A31F4] hover:bg-[#4924D0] active:scale-[0.98] text-white cursor-pointer'
                      }`}
                    >
                      <Zap className="w-3.5 h-3.5 text-amber-300" />
                      <span>{isPaid ? 'Payment Received' : `⚡ Pay ₹${student.monthlyFee.toLocaleString('en-IN')} via UPI`}</span>
                    </button>

                    <div className="text-xs font-mono text-slate-500 text-center truncate bg-white/70 py-0.5 px-1 rounded border border-slate-200">
                      {upiDeepLink}
                    </div>
                  </div>

                  {/* Timestamp & double ticks */}
                  <div className="flex items-center justify-end gap-1 text-xs text-slate-500 pt-0.5">
                    <span>10:42 AM</span>
                    <CheckCheck className="w-3 h-3 text-[#53BDEB]" />
                  </div>

                </div>
              </div>
            )}

            {/* Parent simulated reply & auto receipt when paid */}
            {isPaid && (
              <div className="space-y-2 animate-in fade-in slide-in-from-bottom-2 duration-300 pt-1">
                
                {/* Parent's WhatsApp Message */}
                <div className="flex flex-col items-start space-y-1">
                  <div className="bg-white text-slate-900 rounded-lg rounded-tl-none p-2.5 shadow-xs max-w-[85%] space-y-1 border border-slate-200">
                    <p className="text-xs text-slate-800 leading-snug">
                      Namaste sir, just sent <strong className="text-emerald-700">₹{student.monthlyFee.toLocaleString('en-IN')}</strong> via PhonePe. Thank you for helping {student.name}! 🙏
                    </p>
                    <div className="text-xs text-slate-400 text-right">
                      10:43 AM
                    </div>
                  </div>
                </div>

                {/* TutorGate Automated Digital Receipt Card */}
                <div className="flex flex-col items-end space-y-1">
                  <div className="bg-[#E7FFDB] text-slate-900 rounded-lg rounded-tr-none p-3 shadow-xs max-w-[90%] space-y-2 border border-emerald-300">
                    <div className="flex items-center gap-1.5 text-emerald-900 font-bold text-xs">
                      <ShieldCheck className="w-4 h-4 text-accent-emerald" />
                      <span>Digital Receipt Issued</span>
                    </div>

                    <div className="bg-white p-2 rounded border border-emerald-200 text-xs space-y-0.5 font-mono">
                      <div className="text-slate-500 font-sans">Payment Confirmed:</div>
                      <div className="font-bold text-slate-900 text-xs">₹{student.monthlyFee.toLocaleString('en-IN')}</div>
                      <div className="text-slate-600">ID: UPI-AXIS-{Math.floor(100000 + Math.random() * 900000)}</div>
                    </div>

                    <button
                      onClick={onViewReceipt}
                      className="w-full py-1.5 px-2 bg-emerald-700 text-white rounded text-xs font-semibold flex items-center justify-center gap-1 hover:bg-emerald-800 cursor-pointer"
                    >
                      <Download className="w-3 h-3" />
                      <span>View Official Digital Receipt</span>
                    </button>

                    <div className="flex items-center justify-end gap-1 text-xs text-slate-500">
                      <span>10:43 AM</span>
                      <CheckCheck className="w-3 h-3 text-[#53BDEB]" />
                    </div>
                  </div>
                </div>

              </div>
            )}

          </div>

          {/* WhatsApp bottom input bar simulator */}
          <div className="bg-[#F0F2F5] px-2 py-2 flex items-center gap-2 border-t border-slate-200 text-slate-400 text-xs">
            <div className="flex-1 bg-white rounded-full py-1.5 px-3 text-slate-400 text-xs shadow-xs">
              Type a message...
            </div>
            <div className="w-7 h-7 rounded-full bg-whatsapp-green text-white flex items-center justify-center shrink-0">
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

        </div>

      </div>

    </div>
  )
}
