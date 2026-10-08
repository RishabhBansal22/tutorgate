export interface RubricMarkItem {
  label: string
  marks: number
}

export interface AssessmentQuestion {
  id: string
  questionNumber: number
  questionType: 'mcq' | 'assertion_reason' | 'short_answer' | 'numerical_derivation' | 'competency_case'
  marks: number
  questionText: string
  options?: string[]
  assertionText?: string
  reasonText?: string
  studentAnswerSpaceLines?: number
  teacherRubric: {
    formula?: string
    stepCalculations?: string[]
    finalAnswer: string
    markBreakdown: RubricMarkItem[]
  }
}

export interface AssessmentSection {
  sectionName: string
  sectionWeight: string
  instructions?: string
  questions: AssessmentQuestion[]
}

export interface AssessmentBlueprint {
  id: string
  board: 'CBSE' | 'ICSE' | 'State Board'
  grade: string
  subject: string
  chapter: string
  title: string
  timeAllowedMins: number
  maxMarks: number
  generalInstructions: string[]
  sections: AssessmentSection[]
  cacheMetrics: {
    hitRate: number
    latencySeconds: number
    tokensTotal: number
    tokensCached: number
    costSavedPct: number
  }
}

export interface StudentProfile {
  id: string
  name: string
  batchName: string
  batchType: '1-on-1 In-Home' | 'Neighborhood Batch' | 'Tuition Center'
  grade: string
  board: string
  subject: string
  monthlyFee: number
  daysDelayed: number
  sessionsAttended: number
  totalSessions: number
  lastTestTopic: string
  lastTestScorePct: number
  parentName: string
  parentPhone: string
  tutorVpa: string
  status: 'pending' | 'settled'
}

export interface TextbookVisionSample {
  id: string
  title: string
  gradeAndSubject: string
  chapter: string
  diagramType: string
  sourceBook: string
  originalSnippet: string
  parsedFormula: string
  parallelVariant: {
    title: string
    problemText: string
    modifiedValues: string
    solutionSummary: string
  }
}

export interface AnalogyItem {
  id: string
  topic: string
  subject: string
  abstractConcept: string
  indianRelatableHook: string
  explanation: string
  whyStudentsRemember: string
}
