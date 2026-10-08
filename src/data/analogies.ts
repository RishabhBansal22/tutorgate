import { AnalogyItem } from '../types'

export const analogies: AnalogyItem[] = [
  {
    id: 'analogy-series-parallel',
    topic: 'Series vs. Parallel Circuits',
    subject: 'Class 10 Science',
    abstractConcept: 'Current conservation in series vs. voltage conservation in parallel with independent branches.',
    indianRelatableHook: 'Diwali Fairy Lights vs. Room Fan & Bulb Switches',
    explanation: 'In old traditional Diwali string lights, if one miniature bulb fuses, the entire 50-foot string goes pitch black (Series). But in your bedroom, turning off the fan doesn’t turn off your study lamp—both get full 220V power directly from the main board (Parallel).',
    whyStudentsRemember: 'Connects directly to household festival frustrations every Indian kid has observed.'
  },
  {
    id: 'analogy-ap',
    topic: 'Arithmetic Progression (AP)',
    subject: 'Class 10 Mathematics',
    abstractConcept: 'Constant common difference (d) added at each subsequent discrete step (n).',
    indianRelatableHook: 'Delhi/Mumbai Auto-Rickshaw Meter Fare Calculation',
    explanation: 'When you sit in an auto, the meter drops at ₹30 for the first 1.5 km (a = first term). For every next kilometer, exactly ₹11 is added (d = common difference). So the fare for the n-th kilometer is a + (n - 1)d.',
    whyStudentsRemember: 'Turns abstract formulas into real street economics students relate to immediately.'
  },
  {
    id: 'analogy-catalyst',
    topic: 'Catalysts & Activation Energy',
    subject: 'Class 10 Chemistry',
    abstractConcept: 'Lowering the activation energy barrier without being consumed in the net chemical reaction.',
    indianRelatableHook: 'The "Jugaad" Uncle with Metro Token Counter Contacts',
    explanation: 'Imagine standing in an endless 45-minute queue for a platform ticket in 40°C heat (high activation energy barrier). Suddenly a polite uncle knows the token master, opens a side counter, and lets passengers through in 30 seconds without taking anything for himself (Catalyst).',
    whyStudentsRemember: 'Removes the dryness from chemical rate equations with quintessential Indian daily humor.'
  }
]
