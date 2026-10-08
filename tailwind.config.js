/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#4F46E5',
          hover: '#4338CA',
          light: '#EEF2FF',
          dark: '#312E81',
        },
        'secondary-slate': {
          DEFAULT: '#0F172A',
          muted: '#334155',
        },
        'accent-amber': {
          DEFAULT: '#F59E0B',
          hover: '#D97706',
          light: '#FEF3C7',
        },
        'accent-emerald': {
          DEFAULT: '#10B981',
          hover: '#059669',
          light: '#ECFDF5',
        },
        'claude-coral': {
          DEFAULT: '#D97757',
          hover: '#B5452B',
          light: '#FDF2EC',
          border: '#F5C6B5',
        },
        'whatsapp-green': {
          DEFAULT: '#25D366',
          hover: '#128C7E',
          light: '#DCF8C6',
        },
        'neutral-bg': '#F8FAFC',
        'neutral-surface': '#FFFFFF',
        'neutral-surface-muted': '#F1F5F9',
        'neutral-border': '#E2E8F0',
        'neutral-border-strong': '#CBD5E1',
        'text-primary': '#0F172A',
        'text-secondary': '#475569',
        'text-muted': '#94A3B8',
        'text-inverse': '#FFFFFF',
        'dark-canvas': '#0B0F19',
        'dark-surface': '#111827',
        'dark-border': '#1F2937',
      },
      fontFamily: {
        display: ["'Plus Jakarta Sans'", 'system-ui', '-apple-system', 'sans-serif'],
        headline: ["'Plus Jakarta Sans'", 'system-ui', '-apple-system', 'sans-serif'],
        body: ["'Inter'", 'system-ui', '-apple-system', 'sans-serif'],
        mono: ["'JetBrains Mono'", "'Fira Code'", "'Roboto Mono'", 'monospace'],
      },
      boxShadow: {
        'elevation-low': '0 1px 3px 0 rgba(15, 23, 42, 0.05), 0 1px 2px -1px rgba(15, 23, 42, 0.05)',
        'elevation-medium': '0 4px 6px -1px rgba(15, 23, 42, 0.07), 0 2px 4px -2px rgba(15, 23, 42, 0.05)',
        'elevation-high': '0 20px 25px -5px rgba(15, 23, 42, 0.08), 0 8px 10px -6px rgba(15, 23, 42, 0.04)',
        'elevation-claude-glow': '0 0 32px -4px rgba(79, 70, 229, 0.25), 0 0 16px -2px rgba(217, 119, 87, 0.2)',
      },
      borderRadius: {
        'card': '16px',
        'container': '24px',
      }
    },
  },
  plugins: [],
}
