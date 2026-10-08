import React from 'react'
import { AssessmentBlueprint } from '../../types'
import { AssessmentPaperView } from './AssessmentPaperView'
import { Button } from '../ui/Button'
import { Printer, X } from 'lucide-react'

interface PrintablePaperModalProps {
  blueprint: AssessmentBlueprint
  activeTab: 'student' | 'teacher'
  onClose: () => void
}

export const PrintablePaperModal: React.FC<PrintablePaperModalProps> = ({
  blueprint,
  activeTab,
  onClose
}) => {
  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-3 sm:p-6 print:p-0 print:bg-white">
      
      {/* Floating control bar (hidden in print) */}
      <div className="fixed top-4 right-4 z-50 flex items-center gap-2 print:hidden">
        <Button
          variant="primary"
          onClick={handlePrint}
          icon={<Printer className="w-4 h-4" />}
          size="sm"
        >
          Print to PDF (A4)
        </Button>
        <button
          onClick={onClose}
          className="p-2 rounded-lg bg-white/90 hover:bg-white text-slate-700 shadow-md transition-colors"
          aria-label="Close Preview"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Modal Container formatted to A4 Aspect */}
      <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full my-8 print:my-0 print:shadow-none print:max-w-none print:w-full overflow-hidden">
        
        {/* Printable notification banner (hidden during actual print) */}
        <div className="bg-primary-light border-b border-indigo-100 px-6 py-3 flex items-center justify-between text-xs text-primary-dark print:hidden">
          <span className="font-semibold">
            📄 Standard A4 Printable Layout ({activeTab === 'student' ? 'Student Question Paper' : 'Teacher Solution Manual'})
          </span>
          <span className="text-slate-500">
            Click Print to PDF to save or distribute on WhatsApp
          </span>
        </div>

        {/* Paper Content */}
        <div className="p-6 sm:p-10 print:p-0">
          <AssessmentPaperView
            blueprint={blueprint}
            activeTab={activeTab}
            streamingQuestionIndex={999}
          />
        </div>

      </div>
    </div>
  )
}
