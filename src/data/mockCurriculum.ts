import { AssessmentBlueprint } from '../types'

export const mockCurricula: Record<string, AssessmentBlueprint> = {
  'cbse-10-science-electricity': {
    id: 'cbse-10-science-electricity',
    board: 'CBSE',
    grade: 'Class 10',
    subject: 'Science (Physics)',
    chapter: 'Electricity & Ohm’s Law',
    title: 'TutorGate AI Examination Blueprint — Class X Science',
    timeAllowedMins: 45,
    maxMarks: 25,
    generalInstructions: [
      'This question paper comprises 3 Sections: A, B, and C.',
      'Section A consists of Objective & Assertion-Reasoning questions of 1 mark each.',
      'Section B consists of Short Answer & Numerical questions of 3 marks each.',
      'Section C consists of 1 Competency/Case-Study problem of 4 marks.',
      'All calculations must include SI units. Use of calculators is strictly prohibited.'
    ],
    cacheMetrics: {
      hitRate: 92.4,
      latencySeconds: 0.38,
      tokensTotal: 38400,
      tokensCached: 35480,
      costSavedPct: 89.6
    },
    sections: [
      {
        sectionName: 'SECTION A: OBJECTIVE & ASSERTION-REASONING',
        sectionWeight: '5 Questions × 1 Mark = 5 Marks',
        instructions: 'Select the most appropriate option. For Assertion-Reason questions, choose (a), (b), (c), or (d).',
        questions: [
          {
            id: 'q1',
            questionNumber: 1,
            questionType: 'assertion_reason',
            marks: 1,
            questionText: 'Given below are two statements labeled as Assertion (A) and Reason (R):',
            assertionText: 'Assertion (A): In a series electrical circuit, the electric current is identical through all connected resistors.',
            reasonText: 'Reason (R): Charge has only a single continuous closed path to flow in a series arrangement.',
            options: [
              '(a) Both (A) and (R) are true and (R) is the correct explanation of (A).',
              '(b) Both (A) and (R) are true but (R) is NOT the correct explanation of (A).',
              '(c) (A) is true but (R) is false.',
              '(d) (A) is false but (R) is true.'
            ],
            studentAnswerSpaceLines: 2,
            teacherRubric: {
              finalAnswer: '(a) Both (A) and (R) are true and (R) is the correct explanation of (A).',
              markBreakdown: [
                { label: 'Correct identification of series current constancy and single pathway conservation of charge', marks: 1.0 }
              ]
            }
          },
          {
            id: 'q2',
            questionNumber: 2,
            questionType: 'mcq',
            marks: 1,
            questionText: 'A cylindrical wire of length L and uniform cross-sectional area A has electrical resistance R. What is the resistance of another wire of the same material having length 2L and cross-sectional area A/2?',
            options: [
              '(a) R',
              '(b) 2R',
              '(c) 4R',
              '(d) R/4'
            ],
            studentAnswerSpaceLines: 2,
            teacherRubric: {
              formula: 'R = ρ(L / A)',
              stepCalculations: [
                'New resistance R\' = ρ(2L / (A/2)) = ρ(4L / A) = 4R'
              ],
              finalAnswer: '(c) 4R',
              markBreakdown: [
                { label: 'Correct formula application and ratio calculation', marks: 1.0 }
              ]
            }
          }
        ]
      },
      {
        sectionName: 'SECTION B: SHORT ANSWER & NUMERICAL DERIVATIONS',
        sectionWeight: '4 Questions × 3 Marks = 12 Marks',
        instructions: 'Show all intermediate steps, formula substitutions, and final answers with SI units.',
        questions: [
          {
            id: 'q3',
            questionNumber: 3,
            questionType: 'numerical_derivation',
            marks: 3,
            questionText: 'An electric iron consumes energy at a rate of 840 W when heating is at the maximum rate and 360 W when heating is at the minimum rate. The connected line voltage is 220 V. Calculate the electric current and the resistance in each case.',
            studentAnswerSpaceLines: 7,
            teacherRubric: {
              formula: 'P = V × I  ⇒  I = P / V  and  R = V / I (or R = V² / P)',
              stepCalculations: [
                'Case 1 (Max Heating): I₁ = 840 W / 220 V = 3.82 A; R₁ = 220 V / 3.82 A = 57.60 Ω',
                'Case 2 (Min Heating): I₂ = 360 W / 220 V = 1.64 A; R₂ = 220 V / 1.64 A = 134.15 Ω'
              ],
              finalAnswer: 'Case 1: I₁ = 3.82 A, R₁ = 57.6 Ω | Case 2: I₂ = 1.64 A, R₂ = 134.15 Ω',
              markBreakdown: [
                { label: 'Stating formulas P = VI and Ohm’s Law V = IR', marks: 0.5 },
                { label: 'Correct numerical computation for maximum power case with SI units (Ampere & Ohm)', marks: 1.0 },
                { label: 'Correct numerical computation for minimum power case with SI units', marks: 1.0 },
                { label: 'Accuracy of final rounded values to 2 decimal places', marks: 0.5 }
              ]
            }
          },
          {
            id: 'q4',
            questionNumber: 4,
            questionType: 'short_answer',
            marks: 3,
            questionText: '(a) State Joule\'s Law of Heating.\n(b) Why are alloys like nichrome preferentially used in electric heating devices (toasters, irons) rather than pure copper or aluminium?',
            studentAnswerSpaceLines: 6,
            teacherRubric: {
              formula: 'H = I²Rt',
              stepCalculations: [
                'Statement: Heat produced in a resistor is directly proportional to square of current (I²), resistance (R), and time (t).',
                'Reason 1: Alloys have substantially higher resistivity than pure metals.',
                'Reason 2: Alloys do not oxidize (burn) easily at high temperatures (red-hot states).'
              ],
              finalAnswer: 'Joule’s formula statement with proportionality + two specific alloy properties (high resistivity & thermal oxidation resistance).',
              markBreakdown: [
                { label: 'Accurate statement of Joule’s Law with mathematical expression H = I²Rt', marks: 1.0 },
                { label: 'Higher resistivity of alloys explained clearly', marks: 1.0 },
                { label: 'Resistance to oxidation/burning at elevated temperatures noted', marks: 1.0 }
              ]
            }
          }
        ]
      },
      {
        sectionName: 'SECTION C: COMPETENCY CASE-STUDY (NEP 2020)',
        sectionWeight: '1 Case Study = 4 Marks',
        instructions: 'Read the real-world household circuit context carefully and answer the sub-questions.',
        questions: [
          {
            id: 'q5',
            questionNumber: 5,
            questionType: 'competency_case',
            marks: 4,
            questionText: 'CASE STUDY: Household Domestic Circuit Management\nIn a 2-BHK apartment in Delhi, a family uses three 60 W CFL lamps, one 1000 W geyser, and one 1500 W air conditioner connected in parallel to a 220 V supply line.\n(i) Why are domestic appliances connected in parallel rather than in series? Give two distinct practical advantages.\n(ii) If a 5 A fuse is connected to the geyser line, state with calculation whether the fuse will melt when the geyser is operated.',
            studentAnswerSpaceLines: 8,
            teacherRubric: {
              formula: 'I = P / V',
              stepCalculations: [
                '(i) Parallel Advantages: 1. Each appliance receives the full rated line voltage (220 V). 2. Independent on/off control; failure of one appliance does not disrupt the circuit.',
                '(ii) Geyser current: I = 1000 W / 220 V = 4.55 A. Since 4.55 A < 5 A fuse rating, the fuse will NOT melt during normal continuous operation.'
              ],
              finalAnswer: '(i) Full voltage & independent switching; (ii) Geyser draws 4.55 A, so 5 A fuse will NOT melt.',
              markBreakdown: [
                { label: 'Two valid engineering advantages of parallel domestic wiring', marks: 2.0 },
                { label: 'Correct formula and calculation for geyser current (4.55 A)', marks: 1.0 },
                { label: 'Correct logical deduction regarding 5 A fuse threshold', marks: 1.0 }
              ]
            }
          }
        ]
      }
    ]
  },

  'cbse-9-maths-polynomials': {
    id: 'cbse-9-maths-polynomials',
    board: 'CBSE',
    grade: 'Class 9',
    subject: 'Mathematics',
    chapter: 'Polynomials (Chapter 2)',
    title: 'TutorGate AI Examination Blueprint — Class IX Mathematics',
    timeAllowedMins: 45,
    maxMarks: 25,
    generalInstructions: [
      'All questions are compulsory.',
      'Show clear algebraic derivations, factorizations, and identity statements.',
      'Full step marks awarded based on standard CBSE Board marking rubrics.'
    ],
    cacheMetrics: {
      hitRate: 94.1,
      latencySeconds: 0.35,
      tokensTotal: 41200,
      tokensCached: 38700,
      costSavedPct: 91.2
    },
    sections: [
      {
        sectionName: 'SECTION A: CONCEPT CHECK & MCQs',
        sectionWeight: '2 Questions × 1 Mark = 2 Marks',
        questions: [
          {
            id: 'm1',
            questionNumber: 1,
            questionType: 'mcq',
            marks: 1,
            questionText: 'If x + 2 is a factor of the polynomial p(x) = 2x² + 3x + k, find the value of k.',
            options: [
              '(a) 2',
              '(b) -2',
              '(c) -1',
              '(d) 1'
            ],
            studentAnswerSpaceLines: 3,
            teacherRubric: {
              formula: 'By Factor Theorem: p(-2) = 0',
              stepCalculations: [
                '2(-2)² + 3(-2) + k = 0  ⇒  2(4) - 6 + k = 0  ⇒  8 - 6 + k = 0  ⇒  2 + k = 0  ⇒  k = -2'
              ],
              finalAnswer: '(b) -2',
              markBreakdown: [
                { label: 'Factor theorem application p(-2)=0 and correct solution k = -2', marks: 1.0 }
              ]
            }
          }
        ]
      },
      {
        sectionName: 'SECTION B: ALGEBRAIC IDENTITIES & PROOFS',
        sectionWeight: '3 Questions × 3 Marks = 9 Marks',
        questions: [
          {
            id: 'm2',
            questionNumber: 2,
            questionType: 'numerical_derivation',
            marks: 3,
            questionText: 'Without actually calculating the cubes, evaluate: (28)³ + (-15)³ + (-13)³ using an appropriate algebraic identity.',
            studentAnswerSpaceLines: 6,
            teacherRubric: {
              formula: 'If a + b + c = 0, then a³ + b³ + c³ = 3abc',
              stepCalculations: [
                'Let a = 28, b = -15, c = -13.',
                'a + b + c = 28 + (-15) + (-13) = 28 - 28 = 0.',
                'Therefore, (28)³ + (-15)³ + (-13)³ = 3 × 28 × (-15) × (-13)',
                '= 3 × 28 × 195 = 84 × 195 = 16,380.'
              ],
              finalAnswer: '16,380',
              markBreakdown: [
                { label: 'Stating conditional identity: if a+b+c=0 then a³+b³+c³ = 3abc', marks: 1.0 },
                { label: 'Verifying that 28 + (-15) + (-13) = 0', marks: 0.5 },
                { label: 'Accurate multiplication step with sign check', marks: 1.5 }
              ]
            }
          }
        ]
      }
    ]
  },

  'cbse-12-physics-optics': {
    id: 'cbse-12-physics-optics',
    board: 'CBSE',
    grade: 'Class 12',
    subject: 'Physics',
    chapter: 'Ray Optics & Optical Instruments',
    title: 'TutorGate AI Examination Blueprint — Class XII Physics',
    timeAllowedMins: 60,
    maxMarks: 30,
    generalInstructions: [
      'Questions require ray diagrams with arrows indicating direction of propagation.',
      'Show Cartesian sign convention explicitly in all numerical substitutions.'
    ],
    cacheMetrics: {
      hitRate: 91.8,
      latencySeconds: 0.42,
      tokensTotal: 46000,
      tokensCached: 42200,
      costSavedPct: 88.5
    },
    sections: [
      {
        sectionName: 'SECTION A: DERIVATIONS & CORE THEOREMS',
        sectionWeight: '5 Marks',
        questions: [
          {
            id: 'p1',
            questionNumber: 1,
            questionType: 'numerical_derivation',
            marks: 5,
            questionText: 'Derive the Lens Maker’s Formula for a thin convex lens of focal length f and refractive index n₂ placed in a medium of refractive index n₁ with radii of curvature R₁ and R₂.',
            studentAnswerSpaceLines: 12,
            teacherRubric: {
              formula: '1/f = (n₂/n₁ - 1) × (1/R₁ - 1/R₂)',
              stepCalculations: [
                '1. Refraction at first spherical surface: n₂/v₁ - n₁/u = (n₂ - n₁)/R₁',
                '2. Refraction at second surface (virtual object): n₁/v - n₂/v₁ = (n₁ - n₂)/R₂',
                '3. Adding equations eliminates v₁: n₁(1/v - 1/u) = (n₂ - n₁)(1/R₁ - 1/R₂)',
                '4. Using thin lens formula 1/v - 1/u = 1/f yields final result.'
              ],
              finalAnswer: '1/f = (n₂/n₁ - 1) [1/R₁ - 1/R₂]',
              markBreakdown: [
                { label: 'Neat labelled ray diagram with proper arrow directions', marks: 1.0 },
                { label: 'Equation at first refracting surface with sign convention', marks: 1.5 },
                { label: 'Equation at second refracting surface with virtual object concept', marks: 1.5 },
                { label: 'Elimination and final formulation of Lens Maker’s relationship', marks: 1.0 }
              ]
            }
          }
        ]
      }
    ]
  }
}
