import React from 'react'
import { AssessmentBlueprint } from '../../types'
import { CheckCircle2, Award } from 'lucide-react'

interface AssessmentPaperViewProps {
  blueprint: AssessmentBlueprint
  activeTab: 'student' | 'teacher'
  streamingQuestionIndex: number // For progressive typewriter streaming effect
}

export const AssessmentPaperView: React.FC<AssessmentPaperViewProps> = ({
  blueprint,
  activeTab,
  streamingQuestionIndex
}) => {
  return (
    <div className="bg-white rounded-xl border border-slate-200/90 shadow-sm p-6 sm:p-8 font-body print:border-none print:shadow-none print:p-0">
      
      {/* Official CBSE/ICSE Examination Paper Header */}
      <div className="text-center pb-5 border-b-2 border-slate-900 space-y-1.5">
        <div className="text-xs font-semibold tracking-widest text-primary uppercase">
          TutorGate Verified Assessment Blueprint
        </div>
        <h2 className="font-display font-extrabold text-xl sm:text-2xl text-text-primary tracking-tight">
          {blueprint.title}
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm font-semibold text-slate-700 pt-1">
          <span>Board: <strong className="text-primary">{blueprint.board}</strong></span>
          <span>•</span>
          <span>Time Allowed: <strong className="tabular-nums">{blueprint.timeAllowedMins} Mins</strong></span>
          <span>•</span>
          <span>Maximum Marks: <strong className="tabular-nums">{blueprint.maxMarks} Marks</strong></span>
        </div>
      </div>

      {/* General Instructions Box */}
      <div className="my-5 p-3.5 rounded-lg bg-slate-50 border border-slate-200 text-xs text-text-secondary space-y-1">
        <span className="font-semibold text-text-primary block uppercase tracking-wide text-xs">
          General Instructions:
        </span>
        <ul className="list-disc pl-4 space-y-0.5">
          {blueprint.generalInstructions.map((instruction, idx) => (
            <li key={idx}>{instruction}</li>
          ))}
        </ul>
      </div>

      {/* Sections & Questions */}
      <div className="space-y-8 mt-6">
        {blueprint.sections.map((section, sIdx) => {
          let globalQuestionCounter = 0
          for (let i = 0; i < sIdx; i++) {
            globalQuestionCounter += blueprint.sections[i].questions.length
          }

          return (
            <div key={sIdx} className="space-y-4">
              {/* Section Divider & Weight Banner */}
              <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-slate-300">
                <span className="font-display font-bold text-sm tracking-wide text-text-primary">
                  {section.sectionName}
                </span>
                <span className="text-xs font-semibold text-primary bg-indigo-50 px-2.5 py-0.5 rounded-full border border-indigo-100">
                  {section.sectionWeight}
                </span>
              </div>

              {section.instructions && (
                <p className="text-xs italic text-text-muted">
                  {section.instructions}
                </p>
              )}

              {/* Questions in Section */}
              <div className="space-y-6">
                {section.questions.map((q, qLocalIdx) => {
                  const currentGlobalIdx = globalQuestionCounter + qLocalIdx
                  // Progressive streaming reveal
                  if (currentGlobalIdx > streamingQuestionIndex) {
                    return null
                  }

                  return (
                    <div
                      key={q.id}
                      className="space-y-2.5 pt-2 border-t border-slate-100 first:border-t-0 first:pt-0"
                    >
                      {/* Question Prompt */}
                      <div className="flex items-start justify-between gap-4">
                        <div className="space-y-1 text-sm text-text-primary leading-relaxed flex-1">
                          <p className="font-medium whitespace-pre-line">
                            <span className="font-bold text-slate-900 mr-1.5 tabular-nums">
                              Q{q.questionNumber}.
                            </span>
                            {q.questionText}
                          </p>

                          {q.assertionText && (
                            <div className="p-3 space-y-1 text-xs font-medium text-slate-800 bg-slate-50 rounded-lg border border-slate-200/80 my-1.5">
                              <p>{q.assertionText}</p>
                              <p>{q.reasonText}</p>
                            </div>
                          )}

                          {/* Options if MCQ */}
                          {q.options && (
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 pl-4 text-xs font-medium text-slate-700">
                              {q.options.map((opt, optIdx) => (
                                <div key={optIdx} className="p-1.5 rounded bg-slate-50 border border-slate-200">
                                  {opt}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>

                        {/* Marks Allocation Badge */}
                        <span className="shrink-0 px-2.5 py-1 text-xs font-mono font-bold text-primary bg-indigo-50 rounded border border-indigo-200 tabular-nums">
                          [{q.marks} {q.marks === 1 ? 'Mark' : 'Marks'}]
                        </span>
                      </div>

                      {/* View 1: Student Copy Mode (Blank ruled response area) */}
                      {activeTab === 'student' && (
                        <div className="mt-2 pt-1">
                          <div className="space-y-4 py-2">
                            {Array.from({ length: q.studentAnswerSpaceLines || 3 }).map((_, lIdx) => (
                              <div
                                key={lIdx}
                                className="border-b border-dashed border-slate-200 w-full h-4"
                              />
                            ))}
                          </div>
                          <span className="text-xs text-text-muted italic block text-right">
                            (Space for student response & rough calculation)
                          </span>
                        </div>
                      )}

                      {/* View 2: Teacher Solution Manual Mode (Step Marking Rubric) */}
                      {activeTab === 'teacher' && (
                        <div className="mt-3 p-3.5 rounded-lg bg-emerald-50/70 border border-emerald-200 text-xs space-y-2">
                          <div className="flex items-center justify-between text-emerald-900 font-semibold">
                            <span className="flex items-center gap-1.5">
                              <CheckCircle2 className="w-3.5 h-3.5 text-accent-emerald" />
                              Official CBSE Marking Rubric & Model Solution
                            </span>
                            <span className="text-xs font-mono bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded">
                              Max {q.marks}M
                            </span>
                          </div>

                          {q.teacherRubric.formula && (
                            <div className="font-mono text-emerald-950 bg-white p-2 rounded border border-emerald-100">
                              <strong className="text-emerald-700">Formula:</strong> {q.teacherRubric.formula}
                            </div>
                          )}

                          {q.teacherRubric.stepCalculations && q.teacherRubric.stepCalculations.length > 0 && (
                            <div className="space-y-1 bg-white p-2 rounded border border-emerald-100 font-mono text-xs text-slate-800">
                              <strong className="text-slate-600 block text-xs uppercase font-sans">
                                Step Calculations:
                              </strong>
                              {q.teacherRubric.stepCalculations.map((step, sIdx) => (
                                <p key={sIdx}>{step}</p>
                              ))}
                            </div>
                          )}

                          <div className="bg-emerald-100/60 p-2 rounded text-emerald-950 font-medium">
                            <strong>Final Answer:</strong> {q.teacherRubric.finalAnswer}
                          </div>

                          {/* Granular Marks Allocation Table */}
                          <div className="pt-1">
                            <span className="text-xs font-bold text-emerald-900 uppercase tracking-wider block mb-1">
                              Step-by-Step Mark Distribution:
                            </span>
                            <div className="space-y-1">
                              {q.teacherRubric.markBreakdown.map((item, mIdx) => (
                                <div
                                  key={mIdx}
                                  className="flex items-center justify-between text-xs text-emerald-900/90 bg-white/70 px-2 py-1 rounded"
                                >
                                  <span>• {item.label}</span>
                                  <span className="font-mono font-bold text-emerald-700 shrink-0 ml-2 tabular-nums">
                                    +{item.marks} M
                                  </span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>

      {/* Footer watermark */}
      <div className="mt-10 pt-4 border-t border-slate-200 flex items-center justify-between text-xs text-text-muted">
        <span className="flex items-center gap-1.5 font-semibold text-slate-600">
          <Award className="w-3.5 h-3.5 text-primary" />
          Generated by TutorGate • Powered by Claude 5.5 Sonnet
        </span>
        <span className="font-mono">
          Page 1 of 1 • CBSE Blueprint Verified
        </span>
      </div>

    </div>
  )
}
