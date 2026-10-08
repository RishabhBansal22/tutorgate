import React, { useState } from 'react'
import { Button } from '../ui/Button'
import { Badge } from '../ui/Badge'
import { X, CheckCircle2, Sparkles, Smartphone } from 'lucide-react'

interface WaitlistModalProps {
  isOpen: boolean
  onClose: () => void
}

export const WaitlistModal: React.FC<WaitlistModalProps> = ({
  isOpen,
  onClose
}) => {
  const [fullName, setFullName] = useState('')
  const [phone, setPhone] = useState('')
  const [city, setCity] = useState('Delhi NCR')
  const [teachingType, setTeachingType] = useState('Home Visits 1-on-1')
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>(['CBSE', 'Mathematics', 'Science'])
  const [isSubmitted, setIsSubmitted] = useState(false)

  if (!isOpen) return null

  const availableSubjects = [
    'CBSE',
    'ICSE',
    'State Board',
    'Mathematics',
    'Science (Class 9-10)',
    'Physics (Class 11-12)',
    'Chemistry',
    'JEE/NEET Foundation'
  ]

  const toggleSubject = (subj: string) => {
    if (selectedSubjects.includes(subj)) {
      setSelectedSubjects(selectedSubjects.filter(s => s !== subj))
    } else {
      setSelectedSubjects([...selectedSubjects, subj])
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!fullName || !phone) return

    // Save lead to localStorage
    const leadData = {
      fullName,
      phone: `+91 ${phone}`,
      city,
      teachingType,
      subjects: selectedSubjects,
      registeredAt: new Date().toISOString()
    }
    localStorage.setItem('tutorgate_beta_lead', JSON.stringify(leadData))

    setIsSubmitted(true)
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden border border-slate-200 relative animate-in fade-in zoom-in-95 duration-200">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-500 transition-colors z-10"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Modal Header */}
            <div className="bg-primary text-white p-6 sm:p-7 relative overflow-hidden">
              <div className="relative z-10 space-y-2">
                <Badge variant="claude" className="bg-white/10 text-white border-white/20">
                  Early Beta Access • 100% Free
                </Badge>
                <h3 className="font-display font-extrabold text-2xl tracking-tight">
                  Join the TutorGate Beta
                </h3>
                <p className="text-xs text-indigo-100 leading-relaxed max-w-md">
                  Get full access to the Claude 5.5 CBSE/ICSE Worksheet Maker and WhatsApp 1-Click UPI Fee OS.
                </p>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 sm:p-7 space-y-4 text-xs font-medium">
              
              {/* Full Name */}
              <div className="space-y-1.5">
                <label className="text-text-primary block font-semibold">
                  Educator / Tutor Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Ramesh Chandra / Meera Sen"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full bg-white border border-neutral-border-strong rounded-lg py-2.5 px-3 text-text-primary text-sm focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                />
              </div>

              {/* Phone with +91 Prefix */}
              <div className="space-y-1.5">
                <label className="text-text-primary block font-semibold">
                  WhatsApp Mobile Number
                </label>
                <div className="flex rounded-lg border border-neutral-border-strong overflow-hidden focus-within:border-primary focus-within:ring-2 focus-within:ring-primary/20 transition-all">
                  <span className="bg-slate-100 px-3 py-2.5 text-slate-700 font-mono font-semibold text-sm border-r border-slate-200 flex items-center">
                    +91
                  </span>
                  <input
                    type="tel"
                    required
                    pattern="[0-9]{10}"
                    placeholder="98765 43210 (10 digits)"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                    className="w-full bg-white py-2.5 px-3 text-text-primary text-sm outline-none"
                  />
                </div>
              </div>

              {/* City */}
              <div className="space-y-1.5">
                <label className="text-text-primary block font-semibold">
                  City / Coaching Hub
                </label>
                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="w-full bg-white border border-neutral-border-strong rounded-lg py-2.5 px-3 text-text-primary text-xs focus:border-primary outline-none cursor-pointer"
                >
                  <option value="Delhi NCR">Delhi NCR (New Delhi, Noida, Gurgaon)</option>
                  <option value="Bengaluru">Bengaluru</option>
                  <option value="Kota">Kota (Rajasthan)</option>
                  <option value="Lucknow">Lucknow</option>
                  <option value="Mumbai">Mumbai & Pune</option>
                  <option value="Hyderabad">Hyderabad</option>
                  <option value="Kolkata">Kolkata</option>
                  <option value="Jaipur">Jaipur</option>
                  <option value="Patna">Patna</option>
                  <option value="Other">Other City in India</option>
                </select>
              </div>

              {/* Teaching Type */}
              <div className="space-y-1.5">
                <label className="text-text-primary block font-semibold">
                  Primary Teaching Format
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['Home Visits 1-on-1', 'Neighborhood Batch', 'Tuition Center'] as const).map(type => (
                    <button
                      type="button"
                      key={type}
                      onClick={() => setTeachingType(type)}
                      className={`p-2 rounded-lg border text-center text-xs transition-all cursor-pointer ${
                        teachingType === type
                          ? 'bg-primary-light border-primary text-primary font-bold shadow-xs'
                          : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

              {/* Subject Chips */}
              <div className="space-y-1.5 pt-1">
                <label className="text-text-primary block font-semibold">
                  Boards & Subjects You Teach (Select all that apply)
                </label>
                <div className="flex flex-wrap gap-1.5">
                  {availableSubjects.map(subj => {
                    const active = selectedSubjects.includes(subj)
                    return (
                      <button
                        type="button"
                        key={subj}
                        onClick={() => toggleSubject(subj)}
                        className={`px-2.5 py-1 rounded-full text-xs transition-all cursor-pointer border ${
                          active
                            ? 'bg-primary text-white border-primary font-semibold'
                            : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'
                        }`}
                      >
                        {active ? `✓ ${subj}` : `+ ${subj}`}
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-3">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  fullWidth
                  icon={<Sparkles className="w-4 h-4" />}
                >
                  Secure Free Early Access
                </Button>
                <p className="text-xs text-center text-text-muted mt-2">
                  🔒 Zero spam guarantee. We will send you early onboarding details directly via WhatsApp.
                </p>
              </div>

            </form>
          </div>
        ) : (
          /* Success Confirmation State */
          <div className="p-8 text-center space-y-5 animate-in fade-in duration-300">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-9 h-9" />
            </div>

            <div className="space-y-2">
              <Badge variant="cache">Access Confirmed</Badge>
              <h3 className="font-display font-extrabold text-2xl text-text-primary">
                Welcome to TutorGate Beta!
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed max-w-sm mx-auto">
                Thank you, <strong className="text-text-primary">{fullName}</strong>. Your early access invite has been secured.
              </p>
            </div>

            {/* Simulated WhatsApp notification received */}
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-left text-xs space-y-1.5 max-w-xs mx-auto">
              <div className="flex items-center gap-1.5 font-bold text-emerald-900">
                <Smartphone className="w-4 h-4 text-whatsapp-green" />
                <span>WhatsApp Confirmation Sent:</span>
              </div>
              <p className="text-slate-700 leading-snug">
                “Namaste {fullName}, your TutorGate Beta workspace for {city} is ready. Welcome to 1-tap teaching superpower!”
              </p>
              <div className="text-xs text-slate-400 text-right pt-0.5">
                Sent to +91 {phone}
              </div>
            </div>

            <div className="pt-2">
              <Button
                variant="primary"
                onClick={onClose}
                fullWidth
              >
                Back to TutorGate Showcase
              </Button>
            </div>
          </div>
        )}

      </div>
    </div>
  )
}
