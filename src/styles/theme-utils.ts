import { theme } from './theme';

// Utility functions for accessing theme values
export const getColor = (path: string) => {
  const keys = path.split('.');
  let value: any = theme.colors;

  for (const key of keys) {
    value = value[key];
    if (value === undefined) return undefined;
  }

  return value;
};

export const getGradient = (name: keyof typeof theme.gradients) => {
  return theme.gradients[name];
};

export const getSpacing = (size: keyof typeof theme.spacing) => {
  return theme.spacing[size];
};

export const getBorderRadius = (size: keyof typeof theme.borderRadius) => {
  return theme.borderRadius[size];
};

export const getShadow = (size: keyof typeof theme.shadows) => {
  return theme.shadows[size];
};

export const getTransition = (speed: keyof typeof theme.transitions) => {
  return theme.transitions[speed];
};

export const getFontSize = (size: keyof typeof theme.typography.fontSize) => {
  return theme.typography.fontSize[size];
};

export const getFontWeight = (weight: keyof typeof theme.typography.fontWeight) => {
  return theme.typography.fontWeight[weight];
};

export const getLineHeight = (height: keyof typeof theme.typography.lineHeight) => {
  return theme.typography.lineHeight[height];
};

// CSS custom property names for the theme
export const cssVars = {
  // Colors
  primary50: '--color-primary-50',
  primary100: '--color-primary-100',
  primary500: '--color-primary-500',
  primary600: '--color-primary-600',
  purple500: '--color-purple-500',
  gray50: '--color-gray-50',
  gray100: '--color-gray-100',
  gray200: '--color-gray-200',
  gray400: '--color-gray-400',
  gray500: '--color-gray-500',
  gray600: '--color-gray-600',
  gray700: '--color-gray-700',
  gray800: '--color-gray-800',
  gray900: '--color-gray-900',
  white: '--color-white',
  black: '--color-black',

  // Gradients
  gradientPrimary: '--gradient-primary',
  gradientHero: '--gradient-hero',
  gradientButton: '--gradient-button',

  // Typography
  fontSizeXs: '--font-size-xs',
  fontSizeSm: '--font-size-sm',
  fontSizeBase: '--font-size-base',
  fontSizeLg: '--font-size-lg',
  fontSizeXl: '--font-size-xl',
  fontSize2xl: '--font-size-2xl',
  fontSize5xl: '--font-size-5xl',
  fontSize7xl: '--font-size-7xl',
  fontWeightNormal: '--font-weight-normal',
  fontWeightMedium: '--font-weight-medium',
  lineHeightNormal: '--line-height-normal',
  lineHeightRelaxed: '--line-height-relaxed',

  // Spacing
  space1: '--space-1',
  space2: '--space-2',
  space3: '--space-3',
  space4: '--space-4',
  space6: '--space-6',
  space8: '--space-8',
  space12: '--space-12',
  space16: '--space-16',
  space20: '--space-20',
  space24: '--space-24',

  // Border radius
  radiusSm: '--radius-sm',
  radiusMd: '--radius-md',
  radiusLg: '--radius-lg',
  radiusXl: '--radius-xl',
  radius2xl: '--radius-2xl',
  radius3xl: '--radius-3xl',
  radiusFull: '--radius-full',

  // Shadows
  shadowSm: '--shadow-sm',
  shadowMd: '--shadow-md',
  shadowLg: '--shadow-lg',
  shadowXl: '--shadow-xl',

  // Transitions
  transitionFast: '--transition-fast',
  transitionNormal: '--transition-normal',
  transitionSlow: '--transition-slow',
} as const;
