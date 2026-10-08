import React from 'react'
import { Badge } from '../ui/Badge'
import { Star, MapPin, Quote } from 'lucide-react'

export const TutorTestimonials: React.FC = () => {
  const testimonials = [
    {
      name: 'Er. Rajesh Gupta',
      city: 'Kota, Rajasthan',
      teachingType: 'JEE Foundation & Class 11/12 Physics (3 Batches, 45 Students)',
      quote: 'I used to spend 2 hours every night modifying values in HC Verma and RD Sharma problems so students wouldn’t simply copy solutions from DoubtNut or Google. TutorGate’s Claude 5.5 generator creates pristine numerical variants with flawless step rubrics in 30 seconds.',
      rating: 5,
      impact: 'Saved 14 hrs/week • Zero Cheating'
    },
    {
      name: 'Meenakshi Sundaram',
      city: 'Indiranagar, Bengaluru',
      teachingType: '1-on-1 ICSE & CBSE Class 10 Maths (Home Visits)',
      quote: 'The most awkward part of private tutoring was chasing parents for monthly fees. With TutorGate’s 1-click WhatsApp reminder, the message opens with the student’s 100% attendance and test score, followed by a direct UPI button. 100% of my fees were cleared within 24 hours.',
      rating: 5,
      impact: '₹42,000 Reconciled • Zero Social Friction'
    },
    {
      name: 'Sunita Devi',
      city: 'Aliganj, Lucknow',
      teachingType: 'Class 9 & 10 Science (Living Room Neighborhood Batch)',
      quote: 'The CBSE Assertion-Reasoning and Competency questions generated here are genuinely identical to the official CBSE Board paper pattern. The 0.5-mark step marking rubrics help me train my students exactly how board evaluators grade test papers.',
      rating: 5,
      impact: '100% CBSE Blueprint Alignment'
    }
  ]

  return (
    <section id="testimonials" className="py-16 sm:py-20 bg-white border-t border-neutral-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <Badge variant="board">
            Field Tested in Kota, Bengaluru & Lucknow
          </Badge>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-text-primary tracking-tight">
            Built with Real Feedback from 10M+ Grassroots Educators
          </h2>
          <p className="text-text-secondary text-base sm:text-lg">
            Hear from home tutors and micro-batch coaches transforming their daily teaching routines.
          </p>
        </div>

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="bg-neutral-bg rounded-2xl border border-neutral-border p-6 shadow-elevation-low flex flex-col justify-between space-y-4 hover:shadow-elevation-medium transition-shadow"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-500">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-5 h-5 text-slate-300" />
                </div>

                <p className="text-xs sm:text-sm text-text-primary leading-relaxed italic font-body">
                  “{t.quote}”
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/80 space-y-1">
                <span className="font-display font-bold text-sm text-text-primary block">
                  {t.name}
                </span>
                <span className="text-xs text-text-secondary flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
                  <span>{t.city}</span>
                </span>
                <span className="text-xs text-primary font-medium block">
                  {t.teachingType}
                </span>

                <div className="pt-2">
                  <span className="inline-block text-xs font-semibold text-emerald-800 bg-emerald-100/80 px-2 py-0.5 rounded font-mono">
                    {t.impact}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
