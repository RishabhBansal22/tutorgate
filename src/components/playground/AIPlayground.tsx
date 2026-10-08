import React, { useState } from 'react'
import { mockCurricula } from '../../data/mockCurriculum'
import { AssessmentPaperView } from './AssessmentPaperView'
import { PrintablePaperModal } from './PrintablePaperModal'
import { Button } from '../ui/Button'
import { Badge } from '../ui/Badge'
import { Sparkles, Printer, Copy, Check, ShieldCheck, Zap, RefreshCw, FileCode } from 'lucide-react'

export const AIPlayground: React.FC = () => {
  const [selectedCurriculumId, setSelectedCurriculumId] = useState<string>('cbse-10-science-electricity')
  const [selectedBoard, setSelectedBoard] = useState<'CBSE' | 'ICSE' | 'State Board'>('CBSE')
  const [assessmentType, setAssessmentType] = useState<string>('Worksheet + Rubric')
  const [activeTab, setActiveTab] = useState<'student' | 'teacher'>('student')

  // Streaming & Generation State
  const [isGenerating, setIsGenerating] = useState(false)
  const [streamingQuestionIndex, setStreamingQuestionIndex] = useState(999)
  const [copied, setCopied] = useState(false)
  const [isPrintModalOpen, setIsPrintModalOpen] = useState(false)

  const currentBlueprint = mockCurricula[selectedCurriculumId] || mockCurricula['cbse-10-science-electricity']

  // Handle generation trigger with typewriter streaming simulation
  const handleGenerate = () => {
    setIsGenerating(true)
    setStreamingQuestionIndex(0)

    let currentQ = 0
    const totalQ = currentBlueprint.sections.reduce((acc, s) => acc + s.questions.length, 0)

    const interval = setInterval(() => {
      currentQ += 1
      setStreamingQuestionIndex(currentQ)
      if (currentQ >= totalQ) {
        clearInterval(interval)
        setIsGenerating(false)
      }
    }, 280)
  }

  const handleCopyWhatsApp = () => {
    const text = `*${currentBlueprint.title}*\nBoard: ${currentBlueprint.board} | Marks: ${currentBlueprint.maxMarks}M | Time: ${currentBlueprint.timeAllowedMins}m\n\nGenerated via TutorGate (Powered by Claude 5.5).\n\nPractice Questions:\n${currentBlueprint.sections[0].questions.map(q => `Q${q.questionNumber}: ${q.questionText} [${q.marks}M]`).join('\n\n')}\n\nSolutions will be evaluated in the next batch session!`
    
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleExportJson = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(currentBlueprint, null, 2))
    const downloadAnchor = document.createElement('a')
    downloadAnchor.setAttribute("href", dataStr)
    downloadAnchor.setAttribute("download", `${currentBlueprint.id}.json`)
    document.body.appendChild(downloadAnchor)
    downloadAnchor.click()
    downloadAnchor.remove()
  }

  return (
    <section id="ai-studio" className="py-16 sm:py-20 bg-slate-900 text-slate-100 relative overflow-hidden">
      
      {/* Background illumination for Obsidian AI Chamber */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-claude-coral/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <Badge variant="claude" className="bg-[#1C1816] text-[#E8977F] border-[#3F170D]">
            Live Interactive Simulator
          </Badge>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight">
            The Claude 5.5 Teaching & Content Studio
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Turn 3 hours of late-night textbook prep into 30 seconds. Generate curriculum-aligned worksheets, assertion-reasoning questions, and step-marking schemes with near-zero hallucinations.
          </p>
        </div>

        {/* Main 12-Column Playground Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* LEFT 35% (lg:col-span-4): Control Panel */}
          <div className="lg:col-span-4 bg-dark-surface border border-slate-800 rounded-2xl p-5 sm:p-6 shadow-xl space-y-5">
            
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <span className="font-display font-bold text-white text-base">
                Curriculum Blueprint Controls
              </span>
              <span className="text-xs font-mono text-emerald-400 flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                Prompt Cache Active
              </span>
            </div>

            {/* Form Selectors */}
            <div className="space-y-4 text-xs font-medium text-slate-300">
              
              {/* Board Selector */}
              <div className="space-y-1.5">
                <label className="text-slate-400 block uppercase tracking-wider text-xs">
                  Educational Board
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['CBSE', 'ICSE', 'State Board'] as const).map(board => (
                    <button
                      key={board}
                      onClick={() => setSelectedBoard(board)}
                      className={`py-2 px-2.5 rounded-lg border text-center transition-all ${
                        selectedBoard === board
                          ? 'bg-primary text-white border-primary shadow-sm font-semibold'
                          : 'bg-slate-900/80 text-slate-400 border-slate-800 hover:border-slate-700'
                      }`}
                    >
                      {board}
                    </button>
                  ))}
                </div>
              </div>

              {/* Class & Subject Selector */}
              <div className="space-y-1.5">
                <label className="text-slate-400 block uppercase tracking-wider text-xs">
                  Grade & Subject
                </label>
                <select
                  value={selectedCurriculumId}
                  onChange={(e) => setSelectedCurriculumId(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg py-2.5 px-3 text-white text-xs focus:border-primary focus:ring-1 focus:ring-primary outline-none cursor-pointer"
                >
                  <option value="cbse-10-science-electricity">Class 10 Science (Electricity & Ohm’s Law)</option>
                  <option value="cbse-9-maths-polynomials">Class 9 Mathematics (Polynomials & Factor Theorem)</option>
                  <option value="cbse-12-physics-optics">Class 12 Physics (Ray Optics & Lens Maker)</option>
                </select>
              </div>

              {/* Assessment Type */}
              <div className="space-y-1.5">
                <label className="text-slate-400 block uppercase tracking-wider text-xs">
                  Assessment Typology (NEP 2020)
                </label>
                <select
                  value={assessmentType}
                  onChange={(e) => setAssessmentType(e.target.value)}
                  className="w-full bg-slate-900 border border-slate-700 rounded-lg py-2.5 px-3 text-white text-xs focus:border-primary focus:ring-1 focus:ring-primary outline-none cursor-pointer"
                >
                  <option value="Worksheet + Rubric">Full Assessment (MCQ + Derivation + Case Study)</option>
                  <option value="Assertion & Reasoning Matrix">CBSE Assertion & Reasoning Focus</option>
                  <option value="Chapter Mock Test">Timed 45-Min Mock Test Paper</option>
                </select>
              </div>

              {/* Difficulty & Question Diversity */}
              <div className="grid grid-cols-2 gap-2 pt-1">
                <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 space-y-1">
                  <span className="text-xs text-slate-500 uppercase block">Board Standard</span>
                  <span className="font-semibold text-slate-200">Official CBSE Marking</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800 space-y-1">
                  <span className="text-xs text-slate-500 uppercase block">Model Verification</span>
                  <span className="font-semibold text-emerald-400 flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    Zero Hallucination
                  </span>
                </div>
              </div>

            </div>

            {/* Prompt Caching Metrics Card */}
            <div className="p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 space-y-2 text-xs">
              <div className="flex items-center justify-between text-slate-300">
                <span className="flex items-center gap-1 font-semibold text-claude-coral">
                  <Zap className="w-3.5 h-3.5 text-claude-coral" />
                  Prompt Cache Efficiency
                </span>
                <span className="font-mono text-emerald-400 font-bold tabular-nums">
                  {currentBlueprint.cacheMetrics.costSavedPct}% Cheaper
                </span>
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs text-slate-400 font-mono">
                <div>
                  Cached Tokens: <strong className="text-white tabular-nums">{currentBlueprint.cacheMetrics.tokensCached.toLocaleString()}</strong>
                </div>
                <div>
                  Cache Latency: <strong className="text-emerald-400 tabular-nums">{currentBlueprint.cacheMetrics.latencySeconds}s</strong>
                </div>
              </div>
              <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-emerald-500 to-indigo-500 h-full rounded-full"
                  style={{ width: `${currentBlueprint.cacheMetrics.hitRate}%` }}
                />
              </div>
            </div>

            {/* Primary Generation Button */}
            <Button
              variant="claude"
              fullWidth
              size="lg"
              disabled={isGenerating}
              onClick={handleGenerate}
              icon={
                isGenerating ? (
                  <RefreshCw className="w-4 h-4 animate-spin" />
                ) : (
                  <Sparkles className="w-4 h-4 text-white" />
                )
              }
            >
              {isGenerating ? 'Streaming with Claude 5.5...' : '⚡ Generate with Claude 5.5'}
            </Button>

            <p className="text-xs text-center text-slate-500">
              Cached syllabus templates delivered in ~0.38 seconds
            </p>

          </div>

          {/* RIGHT 65% (lg:col-span-8): Real-Time Output Stream Canvas */}
          <div className="lg:col-span-8 space-y-4">
            
            {/* View Switcher Tabs & Quick Action Bar */}
            <div className="bg-dark-surface border border-slate-800 rounded-xl p-3 flex flex-wrap items-center justify-between gap-3">
              
              {/* Dual Mode Switcher Tabs */}
              <div className="flex items-center gap-1.5 p-1 bg-slate-900 rounded-lg border border-slate-800 text-xs">
                <button
                  onClick={() => setActiveTab('student')}
                  className={`px-3.5 py-1.5 rounded-md font-medium transition-all ${
                    activeTab === 'student'
                      ? 'bg-primary text-white shadow-sm font-semibold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  📝 Student Printable Copy
                </button>
                <button
                  onClick={() => setActiveTab('teacher')}
                  className={`px-3.5 py-1.5 rounded-md font-medium transition-all ${
                    activeTab === 'teacher'
                      ? 'bg-emerald-600 text-white shadow-sm font-semibold'
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  🎯 Teacher Marking Scheme
                </button>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2">
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={handleCopyWhatsApp}
                  icon={copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  className="bg-slate-800 text-slate-200 border-slate-700 hover:bg-slate-700"
                >
                  {copied ? 'Copied!' : 'WhatsApp'}
                </Button>

                <Button
                  variant="secondary"
                  size="sm"
                  onClick={handleExportJson}
                  icon={<FileCode className="w-3.5 h-3.5" />}
                  className="bg-slate-800 text-slate-200 border-slate-700 hover:bg-slate-700"
                >
                  JSON
                </Button>

                <Button
                  variant="primary"
                  size="sm"
                  onClick={() => setIsPrintModalOpen(true)}
                  icon={<Printer className="w-3.5 h-3.5" />}
                >
                  Print PDF (A4)
                </Button>
              </div>

            </div>

            {/* Paper Preview Canvas */}
            <div className="relative">
              {isGenerating && (
                <div className="absolute top-4 right-4 z-20 flex items-center gap-2 bg-slate-900/90 border border-primary/50 text-indigo-300 text-xs px-3 py-1.5 rounded-full shadow-lg backdrop-blur-sm">
                  <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
                  <span>Streaming tokens...</span>
                </div>
              )}

              {/* Assessment Paper View (rendered on light paper for authentic feel) */}
              <div className="transition-opacity duration-300">
                <AssessmentPaperView
                  blueprint={currentBlueprint}
                  activeTab={activeTab}
                  streamingQuestionIndex={streamingQuestionIndex}
                />
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Printable Modal (A4 Export) */}
      {isPrintModalOpen && (
        <PrintablePaperModal
          blueprint={currentBlueprint}
          activeTab={activeTab}
          onClose={() => setIsPrintModalOpen(false)}
        />
      )}

    </section>
  )
}
