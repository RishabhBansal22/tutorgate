import { TextbookVisionSample } from '../types'

export const textbookExamples: TextbookVisionSample[] = [
  {
    id: 'circuit-resistors',
    title: 'NCERT Resistor Network Circuit Diagram',
    gradeAndSubject: 'Class 10 Science (Physics)',
    chapter: 'Chapter 12 — Electricity',
    diagramType: 'Circuit Schematic with Mixed Series-Parallel Resistors',
    sourceBook: 'NCERT Exemplar Class 10 (Page 214, Q14)',
    originalSnippet: 'In the circuit shown, R₁ = 10 Ω, R₂ = 40 Ω, R₃ = 30 Ω, R₄ = 20 Ω, R₅ = 60 Ω, and a 12 V battery is connected. Calculate (a) the total resistance, and (b) total current flowing in the circuit.',
    parsedFormula: '1/R_p1 = 1/R₁ + 1/R₂; 1/R_p2 = 1/R₃ + 1/R₄ + 1/R₅; R_total = R_p1 + R_p2',
    parallelVariant: {
      title: 'Variant 1A (Anti-Cheating Numerical Mutation)',
      problemText: 'A closed circuit has two parallel resistor clusters in series with an 18 V DC power source. Group A has two parallel resistors of 15 Ω and 30 Ω. Group B has three parallel resistors of 20 Ω, 30 Ω, and 60 Ω. Calculate: (i) Equivalent resistance of Group A and Group B, (ii) Total circuit impedance, and (iii) Current drawn from the 18 V source.',
      modifiedValues: 'Volt: 12V ➔ 18V | R₁-R₅ shifted to 15Ω, 30Ω, 20Ω, 30Ω, 60Ω (Preserves integer arithmetic)',
      solutionSummary: 'R_pA = (15×30)/(15+30) = 10 Ω. R_pB = 1/(1/20+1/30+1/60) = 10 Ω. Total R = 20 Ω. Current I = 18V / 20Ω = 0.9 A.'
    }
  },
  {
    id: 'geometry-thales',
    title: 'Basic Proportionality Theorem (Thales Theorem)',
    gradeAndSubject: 'Class 10 Mathematics',
    chapter: 'Chapter 6 — Triangles',
    diagramType: 'Triangle with transversal DE parallel to base BC',
    sourceBook: 'NCERT Mathematics Class 10 (Page 124, Theorem 6.1)',
    originalSnippet: 'In ΔABC, DE || BC intersecting AB at D and AC at E. If AD = 1.5 cm, DB = 3 cm, and AE = 1 cm, find EC.',
    parsedFormula: 'AD / DB = AE / EC (by BPT)',
    parallelVariant: {
      title: 'Variant 2B (Algebraic Extension with Unknown x)',
      problemText: 'In ΔPQR, a line segment XY is drawn parallel to QR intersecting PQ at X and PR at Y. If PX = x, XQ = x - 2, PY = x + 2, and YR = x - 1, determine the numerical value of x and the length of PQ.',
      modifiedValues: 'Numeric constants replaced with algebraic linear expressions in x',
      solutionSummary: 'By BPT: x / (x - 2) = (x + 2) / (x - 1)  ⇒  x(x - 1) = (x - 2)(x + 2)  ⇒  x² - x = x² - 4  ⇒  -x = -4  ⇒  x = 4 cm. Length PQ = 4 + (4 - 2) = 6 cm.'
    }
  }
]
