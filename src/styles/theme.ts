// Apple-Inspired Minimal Theme Configuration
export const theme = {
  // Colors - Apple-like minimal palette
  colors: {
    // Primary brand colors (subtle blues)
    primary: {
      50: '#f8fafc',
      100: '#f1f5f9',
      200: '#e2e8f0',
      300: '#cbd5e1',
      400: '#94a3b8',
      500: '#64748b', // slate-500 - subtle blue-gray
      600: '#475569', // slate-600
      700: '#334155',
      800: '#1e293b',
      900: '#0f172a',
    },
    // Accent color (subtle blue)
    accent: {
      500: '#3b82f6',
      600: '#2563eb',
    },
    // Neutral colors - Apple-like grays
    gray: {
      50: '#fafafa',  // Almost white
      100: '#f5f5f7', // Apple gray
      200: '#e5e5e7',
      300: '#d1d1d6',
      400: '#a1a1aa',
      500: '#8e8e93',
      600: '#636366',
      700: '#48484a',
      800: '#1c1c1e',
      900: '#000000',
    },
    // Semantic colors
    white: '#ffffff',
    black: '#000000',
  },

  // Gradients - Minimal, subtle gradients
  gradients: {
    primary: 'linear-gradient(135deg, #64748b 0%, #475569 100%)',
    hero: 'linear-gradient(to bottom, #fafafa 0%, #ffffff 100%)',
    button: 'linear-gradient(to right, #64748b 0%, #475569 100%)',
    subtle: 'linear-gradient(to bottom, #ffffff 0%, #fafafa 100%)',
  },

  // Typography
  typography: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
      '7xl': '4.5rem',
    },
    fontWeight: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
    lineHeight: {
      tight: '1.25',
      normal: '1.5',
      relaxed: '1.625',
    },
  },

  // Spacing
  spacing: {
    1: '0.25rem',
    2: '0.5rem',
    3: '0.75rem',
    4: '1rem',
    6: '1.5rem',
    8: '2rem',
    12: '3rem',
    16: '4rem',
    20: '5rem',
    24: '6rem',
  },

  // Border radius
  borderRadius: {
    none: '0',
    sm: '0.125rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    '3xl': '1.5rem',
    full: '9999px',
  },

  // Shadows
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  },

  // Transitions
  transitions: {
    fast: '150ms ease-in-out',
    normal: '300ms ease-in-out',
    slow: '500ms ease-in-out',
  },

  // Breakpoints (for reference)
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
} as const;

// Type definitions
export type Theme = typeof theme;
export type Colors = typeof theme.colors;
export type Gradients = typeof theme.gradients;
export type Typography = typeof theme.typography;
export type Spacing = typeof theme.spacing;
