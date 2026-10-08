---
name: TutorGate
description: The AI-Powered Operating System for Indian Home Tutors & Small Batches
colors:
  primary: "#4F46E5"
  primary-hover: "#4338CA"
  primary-light: "#EEF2FF"
  primary-dark: "#312E81"
  secondary-slate: "#0F172A"
  secondary-slate-muted: "#334155"
  accent-amber: "#F59E0B"
  accent-amber-hover: "#D97706"
  accent-amber-light: "#FEF3C7"
  accent-emerald: "#10B981"
  accent-emerald-hover: "#059669"
  accent-emerald-light: "#ECFDF5"
  claude-coral: "#D97757"
  claude-coral-light: "#FDF2EC"
  whatsapp-green: "#25D366"
  whatsapp-green-dark: "#128C7E"
  neutral-bg: "#F8FAFC"
  neutral-surface: "#FFFFFF"
  neutral-surface-muted: "#F1F5F9"
  neutral-border: "#E2E8F0"
  neutral-border-strong: "#CBD5E1"
  text-primary: "#0F172A"
  text-secondary: "#475569"
  text-muted: "#94A3B8"
  text-inverse: "#FFFFFF"
  dark-canvas: "#0B0F19"
  dark-surface: "#111827"
  dark-border: "#1F2937"
typography:
  display:
    fontFamily: "'Plus Jakarta Sans', system-ui, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "clamp(2.5rem, 5vw, 4rem)"
    fontWeight: 800
    lineHeight: "1.1"
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "'Plus Jakarta Sans', system-ui, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)"
    fontWeight: 700
    lineHeight: "1.2"
    letterSpacing: "-0.02em"
  title:
    fontFamily: "'Plus Jakarta Sans', system-ui, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: "1.4"
    letterSpacing: "-0.01em"
  body:
    fontFamily: "'Inter', system-ui, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: "1.6"
    letterSpacing: "-0.005em"
  label:
    fontFamily: "'Plus Jakarta Sans', system-ui, -apple-system, BlinkMacSystemFont, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: "1.4"
    letterSpacing: "0.02em"
  mono:
    fontFamily: "'JetBrains Mono', 'Fira Code', 'Roboto Mono', monospace"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: "1.5"
    letterSpacing: "0"
rounded:
  none: "0px"
  sm: "6px"
  md: "10px"
  lg: "16px"
  xl: "24px"
  full: "9999px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
  3xl: "64px"
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.text-inverse}"
    rounded: "{rounded.md}"
    padding: "14px 28px"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
  button-secondary:
    backgroundColor: "{colors.neutral-surface}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.md}"
    padding: "14px 28px"
  button-whatsapp:
    backgroundColor: "{colors.whatsapp-green}"
    textColor: "{colors.text-inverse}"
    rounded: "{rounded.md}"
    padding: "12px 24px"
  badge-claude:
    backgroundColor: "{colors.claude-coral-light}"
    textColor: "{colors.claude-coral}"
    rounded: "{rounded.full}"
    padding: "6px 14px"
  card-standard:
    backgroundColor: "{colors.neutral-surface}"
    rounded: "{rounded.lg}"
    padding: "24px"
  card-dark-simulator:
    backgroundColor: "{colors.dark-canvas}"
    rounded: "{rounded.lg}"
    padding: "24px"
  input-default:
    backgroundColor: "{colors.neutral-surface}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.md}"
    padding: "12px 16px"
---

# Design System: TutorGate

## Overview

**Creative North Star: "The Master Educator's Studio"**

TutorGate's visual identity unites the rigorous academic discipline of India’s top coaching ecosystems (*Kota institutes, ICSE & CBSE board examiners, NCERT master teachers*) with the intellectual sophistication and luminous clarity of Anthropic Claude frontier AI. Home tutoring in India is high-stakes, deeply personal, and academically rigorous. The interface must communicate unquestionable pedagogical authority, mathematical precision, and cultural warmth—instantly separating itself from juvenile gamified apps and generic Silicon Valley SaaS dashboards.

Every screen balances two distinct rhythms:
1. **The Crisp Daylight Workspace (The Pedagogical Slate)**: Clear, airy, high-contrast surfaces (`#F8FAFC` base with `#FFFFFF` elevation) engineered for effortless document scanning, question paper composition, step-marking rubrics, and rapid student roster management.
2. **The Frontier Intelligence Chamber (The Claude AI Lab)**: Focused obsidian surfaces (`#0B0F19` and `#111827`) reserved for live AI generation streams, textbook OCR parsing, prompt caching metrics, and UPI settlement flows. This dual-temperature system gives the product a sense of profound technical capability without sacrificing daily administrative comfort.

**Confirmed Visual Anti-References**:
- *No gamified pastel cartoon tropes*: No bouncing cartoon mascots, bubble fonts, or juvenile stickers.
- *No generic monochrome crypto/SaaS cynicism*: Avoid lifeless grayscale tables or neon-purple landing page tropes that feel distant from Indian tutors' real lives.
- *No unformatted math dumps*: Mathematical formulas, chemical equations, and marking rubrics must look as clean as an official CBSE Board paper.

**Key Characteristics:**
- **Academic Authority**: Razor-sharp typography (`Plus Jakarta Sans` for commanding titles, `Inter` for dense legibility, `JetBrains Mono` for rubrics & blueprint schemas).
- **Luminous Precision**: Intelligent use of Indigo (`#4F46E5`), Surya Gold (`#F59E0B`), and Emerald Verification (`#10B981`) to guide tutor attention directly to high-leverage actions.
- **Indian Cultural Nuance**: Native integration of WhatsApp messaging cards, UPI deep-link triggers (`upi://pay`), and CBSE/ICSE board exam typologies designed specifically for Indian mobile and desktop workflows.
- **Frontier AI Legitimacy**: Prominent, tastefully integrated Anthropic Claude branding (`#D97757`) that highlights prompt caching efficiencies, mathematical proof validation, and zero-hallucination confidence.

---

## Colors

The palette is engineered with intentional chromatic roles: deep intellectual indigo for platform authority, warm sunlit amber for teacher encouragement and urgent fee alerts, crisp emerald for fee settlements and verified STEM solutions, and Anthropic's signature terracotta coral for AI intelligence badges.

```
┌────────────────────────────────────────────────────────────────────────┐
│                        TUTORGATE COLOR PALETTE                         │
├────────────────────────────────┬───────────────────────────────────────┤
│ PRIMARY (Academic Indigo)      │ ANTHROPIC CLAUDE ACCENT (Coral)       │
│ #4F46E5 (Main) / #4338CA       │ #D97757 (Frontier Intelligence)       │
├────────────────────────────────┼───────────────────────────────────────┤
│ SECONDARY (Surya Amber)        │ STATUS (Settlement Emerald & WhatsApp)│
│ #F59E0B (Urgency & Energy)     │ #10B981 (Verified) / #25D366 (WhatsApp)│
├────────────────────────────────┼───────────────────────────────────────┤
│ NEUTRAL LIGHT (Editorial Paper)│ NEUTRAL DARK (Obsidian AI Chamber)   │
│ #F8FAFC (Bg) / #FFFFFF (Cards) │ #0B0F19 (Deep Canvas) / #111827 (Card)│
└────────────────────────────────┴───────────────────────────────────────┘
```

### Primary
- **Academic Indigo** (`#4F46E5`): The anchor of the TutorGate platform. Represents academic precision, deep trust, and administrative order. Used for primary CTAs, active navigation items, progress indicators, and key platform headers.
- **Academic Indigo Deep** (`#4338CA`): Primary button hover state, pressed states, and high-contrast emphasis.
- **Indigo Wash** (`#EEF2FF`): Subdued container backgrounds, active tab pills, and selected batch highlights.

### Secondary
- **Surya Amber** (`#F59E0B`): Inspired by sunrise, intellect (Surya), and urgency. Used for pending fee alerts, high-priority board exam notices, and conversion badges.
- **Surya Amber Hover** (`#D97706`): Interactive hover on amber actions.
- **Amber Whisper** (`#FEF3C7`): Background for pending fee cards, warning callouts, and student weak-topic tags.

### Tertiary
- **Anthropic Claude Coral** (`#D97757`): The official frontier intelligence accent. Used exclusively for "Powered by Claude" badges, AI Prompt Caching metrics, and AI model routing chips.
- **Claude Coral Tint** (`#FDF2EC`): Subtle background for Claude AI feature callouts and streaming generator headers.

### Neutral
- **Deep Midnight Slate** (`#0F172A`): Primary text ink on light surfaces, section headlines, and high-contrast borders.
- **Muted Slate** (`#475569`): Secondary body copy, subtitle text, and form helper descriptions.
- **Slate Subtle** (`#94A3B8`): Placeholder text, disabled icon states, and secondary metadata.
- **Border Hairline** (`#E2E8F0`): Clean container dividers and card outlines on light backgrounds.
- **Editorial Canvas** (`#F8FAFC`): The global body background in light mode—softer and more comfortable than pure `#FFFFFF`.
- **Pure Paper** (`#FFFFFF`): Elevated card surfaces, modal dialogs, and printable paper preview sheets.

### Dark AI Canvas (For Playground & Code Surfaces)
- **Obsidian Core** (`#0B0F19`): Background for the live AI generator playground, prompt caching metrics, and code/JSON blueprint viewers.
- **Obsidian Surface** (`#111827`): Card elevation within dark containers.
- **Obsidian Border** (`#1F2937`): Subtle hairline divider for dark surfaces.

### Semantic & Operational
- **Veracity Emerald** (`#10B981`): Marks fee collected, step-solution verified, 100% test score, and attendance present.
- **WhatsApp Green** (`#25D366`): Instant 1-tap WhatsApp reminder triggers, parent message share buttons, and chat previews.
- **UPI Deep-Link Indigo** (`#5A31F4`): Quick UPI payment badge (PhonePe, GPay, Paytm compatible).

### Named Rules
**The One Primary Rule.** Every screen must contain exactly one dominant primary action in Academic Indigo (`#4F46E5`). Subsidiary actions (such as "Preview on WhatsApp" or "Copy UPI Link") must use secondary outlined or semantic button variants.
**The Real-Money Emerald Rule.** Green (`#10B981` or `#25D366`) is reserved strictly for financial reconciliation (fees received), attendance confirmation (student present), and verified STEM proofs. It is never used as an arbitrary decorative accent.
**The Claude Distinction Rule.** Terracotta Coral (`#D97757`) is preserved solely for Anthropic Claude AI credentials and autonomous agent indicators. Never dilute it across generic platform controls.

---

## Typography

The typographic stack reflects modern intellectual craftsmanship: structural geometric confidence for headlines paired with humanist neutrality for long-form student text, marking rubrics, and mathematical notation.

### Font Stacks
- **Display & Headlines:** `'Plus Jakarta Sans', system-ui, -apple-system, BlinkMacSystemFont, sans-serif`
- **Body & Functional UI:** `'Inter', system-ui, -apple-system, BlinkMacSystemFont, sans-serif`
- **Monospace, Math & Schemas:** `'JetBrains Mono', 'Fira Code', 'Roboto Mono', monospace`

### Typographic Hierarchy

| Role | Font Family | Weight | Size (CSS / Rem) | Line Height | Tracking | Purpose & Usage |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Display** | Plus Jakarta Sans | 800 (Extrabold) | `clamp(2.5rem, 5vw, 4rem)` (40–64px) | 1.1 | -0.03em | Primary landing page value proposition & hero statement |
| **Headline 1** | Plus Jakarta Sans | 700 (Bold) | `clamp(1.75rem, 3vw, 2.5rem)` (28–40px) | 1.2 | -0.02em | Section titles, feature pillar introductions |
| **Headline 2** | Plus Jakarta Sans | 700 (Bold) | `1.5rem` (24px) | 1.3 | -0.015em | Sub-module headers, playground console title |
| **Title / Card** | Plus Jakarta Sans | 600 (Semibold) | `1.25rem` (20px) | 1.4 | -0.01em | Feature card titles, student names in roster |
| **Body Large** | Inter | 400 (Regular) | `1.125rem` (18px) | 1.6 | -0.005em | Hero subheadings, lead promotional paragraphs |
| **Body Standard** | Inter | 400 (Regular) | `1rem` (16px) | 1.6 | 0 | Default body text, question paper problems, parent updates |
| **Body Medium** | Inter | 500 (Medium) | `0.9375rem` (15px) | 1.5 | 0 | Interactive labels, table entries, filter dropdown items |
| **Small / Helper** | Inter | 400 (Regular) | `0.875rem` (14px) | 1.5 | 0 | Form hint text, timestamp, secondary metadata |
| **Label / Badge** | Plus Jakarta Sans | 600 (Semibold) | `0.75rem`–`0.8125rem` (12–13px) | 1.2 | +0.02em | Badges, pills, board tags (`CBSE Class 10`), button text |
| **Rubric / Mono** | JetBrains Mono | 500 (Medium) | `0.8125rem`–`0.875rem` (13–14px) | 1.5 | 0 | Mark distribution `[1 Mark]`, LaTeX formulas, UPI strings |

### Named Rules
**The Board Blueprint Legibility Rule.** Question papers and worksheet previews must never drop below 14px body size (`0.875rem`) with 1.6 line height. Test papers are printed on physical A4 paper or read on 6-inch mobile screens; cramped line-height causes mathematical confusion.
**The Strict Numbers Rule.** Financial sums (`₹3,500`), marks allocation (`[3 Marks]`), and prompt caching speed metrics (`0.42s`) must always use tabular figures (`font-variant-numeric: tabular-nums`) to preserve clean vertical alignment.

---

## Layout

TutorGate's layout is engineered for seamless scanning across desktop (for lesson planning & question paper compilation) and mobile (where Indian tutors check attendance, trigger WhatsApp reminders, and view UPI credits).

### Grid & Container Specs
- **Max Content Width**: `1280px` (`max-w-7xl` in Tailwind) with `24px` horizontal padding on desktop (`px-6`), `16px` on mobile (`px-4`).
- **Narrow Editorial / Form Width**: `896px` (`max-w-4xl`) for waitlist onboarding, step-by-step generators, and policy reading.
- **Worksheet Paper Container**: Standardized to `210mm x 297mm` aspect ratio (`A4` proportion: `1:1.414`) with a maximum preview width of `760px` centered on canvas.
- **12-Column Desktop Grid**: `gap-6` (24px) or `gap-8` (32px) gutter.
  - Hero & Dual Pillars: 6-column / 6-column split or 7-column / 5-column split.
  - Interactive Playground: 4-column control panel on left + 8-column live output canvas on right (stacks vertically on screens `< 1024px`).

### Breakpoints
- **Mobile (`< 640px`)**: Single column; full-width bottom sticky action drawer for primary CTAs; stacked cards.
- **Tablet (`640px`–`1023px`)**: 2-column card layouts; control bar collapsible; touch-friendly 44px tap targets.
- **Desktop (`1024px`–`1279px`)**: Standard 12-column split; sticky sidebars enabled.
- **Wide Desktop (`≥ 1280px`)**: Generous negative space; dual preview panes (Student Copy vs. Teacher Marking Rubric side-by-side).

### Spatial Rhythm Scale
All spacing derives from an **8px base grid** (with a 4px half-step for micro-alignment):
- `4px` (`xs`): Tag padding, icon-to-label gap.
- `8px` (`sm`): Badge vertical padding, compact form element gaps.
- `16px` (`md`): Card internal padding on mobile, form field spacing.
- `24px` (`lg`): Standard card internal padding on desktop, grid column gap.
- `32px` (`xl`): Section subsection spacing, header-to-content gap.
- `48px` (`2xl`): Major module separation on desktop.
- `64px`–`80px` (`3xl`): Landing page section vertical padding (`py-16` / `py-20`).

---

## Elevation & Depth

TutorGate avoids heavy, murky drop-shadows. Depth is communicated through **structural tonal layering** combined with **subtle hairline borders** (`1px solid #E2E8F0` on light, `1px solid #1F2937` on dark). This gives the interface an engineered, tactile feel resembling premium physical stationery and modern developer tools.

### Elevation Vocabulary

```css
/* Elevation 0: Canvas Base */
--elevation-flat: none;

/* Elevation 1: Resting Cards & Containers */
--elevation-low: 0 1px 3px 0 rgba(15, 23, 42, 0.05), 0 1px 2px -1px rgba(15, 23, 42, 0.05);

/* Elevation 2: Floating Controls, Dropdowns & Hover States */
--elevation-medium: 0 4px 6px -1px rgba(15, 23, 42, 0.07), 0 2px 4px -2px rgba(15, 23, 42, 0.05);

/* Elevation 3: Modals, Sticky Nav & Live Preview Canvas */
--elevation-high: 0 20px 25px -5px rgba(15, 23, 42, 0.08), 0 8px 10px -6px rgba(15, 23, 42, 0.04);

/* Elevation Claude: AI Intelligence Luminous Glow */
--elevation-claude-glow: 0 0 32px -4px rgba(79, 70, 229, 0.2), 0 0 16px -2px rgba(217, 119, 87, 0.15);
```

### Named Rules
**The Hairline Boundary Rule.** No card or floating panel may rely on shadow alone for boundary definition. Every elevated element must carry a crisp 1px border (`border border-slate-200/80` in light mode; `border border-slate-800/80` in dark mode).
**The Glassmorphism Discipline Rule.** Glassmorphic surfaces (`backdrop-blur-md bg-white/80` or `bg-slate-900/80`) are permitted *only* on sticky navigation headers and floating filter bars. Never apply blur filters to long-form reading text or printable test papers.

---

## Shapes

The geometric personality of TutorGate is balanced, precise, and approachable—avoiding brutal sharp corners while refusing overly bubbly pill-only layouts.

- **Primary Radius (`10px` / `rounded-lg`)**: Default for interactive controls, inputs, primary buttons, and tooltips.
- **Container Radius (`16px` / `rounded-xl`)**: Feature cards, interactive playground container, test paper preview wrapper.
- **Structural Radius (`24px` / `rounded-2xl`)**: Landing page hero callout boxes, modal popups, comparison matrix container.
- **Pill Radius (`9999px` / `rounded-full`)**: Board tags (`CBSE`), grade chips (`Class 10`), AI speed pills (`0.42s Prompt Cache`), and circular avatar badges.
- **Micro Radius (`4px`–`6px` / `rounded-sm`)**: Code snippet brackets, math formula bounding boxes, and mark allocation badges (`[3M]`).

---

## Components

### 1. Buttons

#### Primary Action Button ("Join Tutor Beta" / "Generate Worksheet")
- **Default State**:
  - Background: `colors.primary` (`#4F46E5`)
  - Text: `colors.text-inverse` (`#FFFFFF`), `Plus Jakarta Sans`, Semibold, 15px
  - Padding: `14px 28px` (desktop), `12px 24px` (mobile)
  - Radius: `10px` (`rounded-lg`)
  - Border: None
  - Shadow: `0 1px 2px 0 rgba(0, 0, 0, 0.05), inset 0 1px 0 0 rgba(255, 255, 255, 0.15)`
- **Hover State**:
  - Background: `colors.primary-hover` (`#4338CA`)
  - Transform: `translateY(-1px)`
  - Transition: `all 150ms cubic-bezier(0.4, 0, 0.2, 1)`
- **Active State**:
  - Background: `colors.primary-dark` (`#312E81`)
  - Transform: `translateY(0)`

#### Secondary Button ("Try Interactive Demo" / "Explore Architecture")
- **Default State**:
  - Background: `#FFFFFF`
  - Text: `colors.text-primary` (`#0F172A`), `Plus Jakarta Sans`, Semibold, 15px
  - Border: `1px solid #CBD5E1`
  - Radius: `10px`
  - Shadow: `0 1px 2px 0 rgba(15, 23, 42, 0.05)`
- **Hover State**:
  - Background: `#F8FAFC`
  - Border Color: `#94A3B8`

#### WhatsApp Action Button ("Send 1-Click Reminder")
- **Default State**:
  - Background: `#25D366`
  - Text: `#FFFFFF`, `Plus Jakarta Sans`, Semibold, 14px
  - Icon: Native WhatsApp SVG icon (`20px x 20px` in `#FFFFFF`, left margin `8px`)
  - Padding: `10px 20px`
  - Radius: `8px`
- **Hover State**:
  - Background: `#128C7E`

#### Claude AI Action Trigger ("Generate with Claude 5.5")
- **Default State**:
  - Background: `linear-gradient(135deg, #4F46E5 0%, #D97757 100%)`
  - Text: `#FFFFFF`, `Plus Jakarta Sans`, Bold, 14px
  - Icon: Sparkle / Claude Star icon (`18px x 18px`)
  - Shadow: `0 0 16px rgba(79, 70, 229, 0.3)`

---

### 2. Form Inputs & Selectors

#### Subject / Board / Grade Dropdown
- **Default State**:
  - Background: `#FFFFFF`
  - Border: `1px solid #CBD5E1`
  - Text: `#0F172A`, 14px, Medium
  - Height: `44px`
  - Padding: `0 14px`
  - Radius: `8px`
  - Chevron Icon: `16px`, `#64748B`
- **Focus State**:
  - Border Color: `#4F46E5`
  - Ring: `3px solid rgba(79, 70, 229, 0.15)`
  - Outline: None

#### Phone / WhatsApp Input (+91 Prefix)
- **Structure**:
  - Fixed Prefix Block: `+91` flag/badge on left with `#F1F5F9` background, `border-r border-slate-200`, text `#475569`.
  - Input field: Numerical only, formatted as `XXXXX XXXXX`, placeholder `98765 43210`.

---

### 3. Badges, Chips & Meta Pills

- **"Powered by Anthropic Claude" Badge**:
  - Background: `#FDF2EC`
  - Border: `1px solid #F5C6B5`
  - Text: `#D97757`, 12px, Semibold
  - Left Icon: Official Claude star symbol
  - Radius: `rounded-full`
- **Board Pill ("CBSE Class 10")**:
  - Background: `#EEF2FF`
  - Border: `1px solid #C7D2FE`
  - Text: `#4338CA`, 12px, Semibold
  - Radius: `rounded-full`
- **Prompt Cache Pill ("90% Cost Saved • Sub-second")**:
  - Background: `#ECFDF5`
  - Border: `1px solid #A7F3D0`
  - Text: `#065F46`, 12px, Medium
  - Radius: `rounded-full`

---

### 4. Interactive Showcase: The Live AI Playground Simulator

The website's primary technical centerpiece for the **Claude for Startups** submission:

```
┌────────────────────────────────────────────────────────────────────────┐
│  LIVE INTERACTIVE AI PLAYGROUND (CLAUDE 5.5 SONNET)                    │
├───────────────────────────────┬────────────────────────────────────────┤
│ INPUT CONTROLS (Left 35%)     │ REAL-TIME OUTPUT STREAM (Right 65%)    │
│                               │                                        │
│ Board: [CBSE ▼]               │ [STUDENT WORKSHEET]  [TEACHER RUBRIC]  │
│ Class: [Class 10 Science ▼]   │ ────────────────────────────────────── │
│ Chapter: [Electricity ▼]      │ SECTION A: ASSERTION & REASONING (3M)  │
│ Difficulty: [Board Exam ▼]    │ 1. Assertion (A): In a series circuit, │
│ Mode: [Worksheet + Rubric]    │    current is same throughout.         │
│                               │    Reason (R): Charges have only one   │
│ [⚡ Generate Worksheet]        │    continuous path to flow.            │
│                               │    (a) Both A and R are true...        │
│ Cache Status: 92% HIT (0.38s) │ ────────────────────────────────────── │
│ Verifier: Step-Math Validated │ [Download Student PDF] [Copy WhatsApp] │
└───────────────────────────────┴────────────────────────────────────────┘
```

- **Control Column (Left)**:
  - Clean card (`#FFFFFF` with `#E2E8F0` border in light mode or `#111827` in dark mode).
  - Selectors for Board, Class, Topic, and Assessment Type (Worksheet, Test Paper, Concept Analogy).
  - Prominent "Generate with Claude" trigger button with loading pulse state.
- **Output Paper Simulator (Right)**:
  - Styled to replicate authentic Indian CBSE/ICSE examination paper headers:
    - Center Header: *"TutorGate AI Examination Blueprint — Class X Science"*
    - Meta Bar: *"Time Allowed: 45 Mins | Maximum Marks: 25 | General Instructions"*
  - Dual Mode Switcher Tabs:
    - **Tab 1: Student Copy**: Shows cleanly numbered questions, blank response lines, and clear mark weights `[1M]`, `[3M]`.
    - **Tab 2: Teacher Solution Manual**: Displays step-by-step marking rubrics (e.g., `0.5M: Formula V = IR`, `1M: Substitution`, `0.5M: Correct SI Unit [Ampere]`).
  - Streaming effect simulator: Demonstrates typewriter animation of text arriving in real-time, highlighting Claude's ultra-fast prompt-cached generation.

---

### 5. Interactive Showcase: The WhatsApp & UPI Fee Reminder Simulator

Demonstrates TutorGate's solution to the #1 administrative pain point (awkward fee collection):

```
┌────────────────────────────────────────────────────────────────────────┐
│  INTERACTIVE WHATSAPP & UPI FEE ENGINE                                 │
├───────────────────────────────┬────────────────────────────────────────┤
│ TUTOR'S 1-TAP LEDGER (Left)   │ PARENT'S WHATSAPP VIEW (Right)         │
│                               │                                        │
│ Student: Aarav Sharma         │ [WhatsApp Chat: Sharma Tuition]        │
│ Batch: Class 9 Maths (Group)  │ "Namaste Mrs. Sharma,                  │
│ Month: October 2026           │  Aarav attended 12/12 sessions this    │
│ Pending Fee: ₹3,000           │  month and scored 92% in Polynomials.  │
│ Days Delayed: 4 Days          │                                        │
│                               │  Tuition fee for Oct (₹3,000) is due.  │
│ [ 📲 Send Polite WhatsApp ]   │  You can pay in 1 click below:         │
│                               │  ───────────────────────────────────── │
│ Status: UPI Deep-Link Active  │  [ ⚡ Pay ₹3,000 via UPI (GPay/PhonePe)]│
│ Reconciliation: Auto-Receipt  │  upi://pay?pa=tutor@okaxis&am=3000...  │
└───────────────────────────────┴────────────────────────────────────────┘
```

- **Interactive Triggers**:
  - Visitor can click "Send Polite Reminder" -> Instantly switches the phone simulator screen.
  - Generates the real `upi://pay` URI string with customizable tutor VPA and student remarks.
  - Shows instant status change to "Payment Received: ₹3,000" with automated green digital PDF receipt badge.

---

### 6. Architectural Deep-Dive: Built on Anthropic Claude

A structured visual flow card detailing the startup's agentic pipeline:
1. **Curriculum Blueprint Agent**: Cached CBSE/ICSE syllabus templates.
2. **Pedagogical Generation Engine (Claude 5.5 Sonnet)**: Multi-step assertion-reasoning questions.
3. **STEM Verifier Agent**: Near-zero hallucination mathematical step-solver.
4. **Multimodal Vision Engine**: NCERT textbook diagram and OCR parser.
5. **Interactive Doubt & Hinglish Agent (Claude 5 Haiku)**: Fast sub-second analogies.

---

### 7. Comparison Table: "The Old Way vs. The TutorGate Way"

| Aspect | The Old Way (Paper Diary & Late Nights) | The TutorGate Way (AI-Powered OS) |
| :--- | :--- | :--- |
| **Weekly Prep Time** | 15+ hours flipping through RD Sharma & NCERT Exemplar | **30 seconds** with Claude-generated board blueprints |
| **Fee Collection** | Awkward WhatsApp follow-ups; forgotten cash payments | **1-tap polite WhatsApp alert** with embedded UPI deep-link |
| **Question Papers** | Hand-written or photocopied; questions easily googled | **Fresh numerical variants** & instant step-marking schemes |
| **Parent Updates** | Fragmented, rushed calls; anxious parents | **Automated WhatsApp report cards** in professional Hinglish |
| **Attendance** | Dog-eared paper registers; zero parent transparency | **1-tap check-in** with automated WhatsApp arrival ping |

---

### 8. Navigation & Header

- **Desktop Header**:
  - Height: `72px`, fixed sticky top with `backdrop-blur-md bg-white/90` and `border-b border-slate-200/80`.
  - Left: TutorGate Logo (Indigo book-and-gateway icon + bold typographic wordmark) + "Claude 5.5 Inside" micro-pill.
  - Center: Nav links (`AI Studio`, `Fee & Admin OS`, `Claude Architecture`, `Comparison`, `For Tutors`).
  - Right: "Try Live Demo" (Secondary button) + "Join Tutor Beta" (Primary Indigo button).
- **Mobile Header**:
  - Height: `60px`, hamburger drawer menu + quick CTA button.

---

### 9. Waitlist Modal ("Join Early Access Beta")

- **Trigger**: "Join Tutor Beta (Free)" buttons across the landing page.
- **Fields**:
  - Full Name (Text input)
  - WhatsApp Number (Tel input with `+91` locked prefix)
  - City / State (e.g., Delhi NCR, Bengaluru, Kota, Lucknow)
  - Teaching Type (Radio pills: "Home Visits 1-on-1", "Neighborhood Batch", "Tuition Center")
  - Primary Board & Subjects (Multi-select chips: CBSE, ICSE, Science, Maths)
- **Submit Action**: Primary button ("Secure Free Early Access") -> Success state with WhatsApp confirmation simulation.

---

## Do's and Don'ts

### Do:
- **Do** maintain strict 16px horizontal screen padding on mobile devices (`px-4`) and 24px on desktop (`px-6`).
- **Do** render all currency figures in Indian Rupee format with standard commas (`₹3,000`, `₹15,000`) and tabular figures.
- **Do** provide both "Student Printable Copy" and "Teacher Marking Scheme" views whenever showing generated test papers.
- **Do** include the official Anthropic Claude star icon and terracotta coral accent (`#D97757`) alongside all Claude architecture references.
- **Do** keep tap targets at a minimum of `44px x 44px` on mobile devices for WhatsApp reminder and attendance buttons.
- **Do** use hairline borders (`1px solid #E2E8F0`) around all card containers to guarantee crisp separation.

### Don't:
- **Don't** use muddy drop-shadows with blur radius > 24px or opacity > 10%. Depth is established by hairline borders and tonal shifts.
- **Don't** use harsh saturated neon backgrounds; keep global canvases at `#F8FAFC` (light) and `#0B0F19` (dark AI chamber).
- **Don't** display mathematical formulas or question numbers with proportional fonts where subscripts and superscripts collide. Always use monospace or properly typeset math blocks.
- **Don't** hide the WhatsApp or UPI functionality behind complex sub-menus; Indian home tutors demand 1-tap mobile workflows.
- **Don't** invent artificial Silicon Valley jargon (e.g., "Synergistic EdTech Paradigm"). Speak directly to Indian tutoring realities: *CBSE Board, ICSE, Class 10, RD Sharma, UPI, WhatsApp, Batch Timings, Fee Dues*.
