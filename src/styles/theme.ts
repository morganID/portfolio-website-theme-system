// Dark Theme Configuration - Black Background, Green Text
export const theme = {
  // Colors - Simple black background, green text theme
  colors: {
    // Primary brand colors (various shades of green)
    primary: {
      50: '#00ff00',   // Bright green
      100: '#00e600',  // Slightly darker green
      200: '#00cc00',  // Medium green
      300: '#00b300',  // Darker green
      400: '#009900',  // Dark green
      500: '#00ff41',  // Classic hacker green
      600: '#00e639',  // Slightly darker
      700: '#00cc30',  // Medium dark green
      800: '#00b327',  // Darker green
      900: '#00991e',  // Very dark green
    },
    // Accent colors (subtle variations)
    accent: {
      500: '#00ff88',  // Light green
      600: '#00cc66',  // Medium light green
    },
    warning: {
      500: '#ff4444',  // Red for warnings
      600: '#cc3333',  // Dark red
    },
    // Neutral colors - Dark grays for subtle variations
    gray: {
      50: '#1a1a1a',   // Very dark gray
      100: '#2a2a2a',  // Dark gray
      200: '#3a3a3a',  // Medium dark gray
      300: '#4a4a4a',  // Gray
      400: '#5a5a5a',  // Light gray
      500: '#6a6a6a',  // Lighter gray
      600: '#7a7a7a',  // Even lighter
      700: '#8a8a8a',  // Light gray
      800: '#9a9a9a',  // Near white gray
      900: '#aaaaaa',  // Off white gray
    },
    // Semantic colors - Dark theme
    white: '#ffffff',
    black: '#000000',
    terminal: '#000000', // Pure black for terminal
  },

  // Gradients - Simple dark theme gradients
  gradients: {
    primary: 'linear-gradient(135deg, #00ff00 0%, #00cc33 100%)',
    hero: 'linear-gradient(to bottom, #000000 0%, #0a0a0a 100%)',
    button: 'linear-gradient(to right, #00ff00 0%, #00cc33 100%)',
    terminal: 'linear-gradient(90deg, #000000 0%, #0a0a0a 50%, #000000 100%)',
    scanline: 'linear-gradient(to bottom, transparent 50%, rgba(0, 255, 0, 0.03) 50%)',
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
