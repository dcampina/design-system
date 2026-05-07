import type { Config } from 'tailwindcss';

/**
 * NA Design System 3 Tailwind Preset
 *
 * This preset contains all DS3 tokens synced from Figma.
 * Use this as a preset in your tailwind.config to ensure consistent tokens across all na apps.
 *
 * Usage in consuming apps:
 * ```ts
 * import { naDesignTokensPreset } from '@na-frontend/na-storybook-react/tokens';
 *
 * export default {
 *   presets: [naDesignTokensPreset],
 *   content: [...],
 * } satisfies Config;
 * ```
 */

export const ds3BackgroundColors = {
  /* NEUTRALS */
  'ds3-neutral': 'var(--ds3-background-neutral, #091e420f)',
  'ds3-neutral-hover': 'var(--ds3-background-neutral-hover, #091e4223)',
  'ds3-neutral-pressed': 'var(--ds3-background-neutral-pressed, #091e424f)',
  'ds3-neutral-subtle': 'var(--ds3-background-neutral-subtle, #ffffff)',
  'ds3-neutral-subtle-hover':
    'var(--ds3-background-neutral-subtle-hover, #091e420f)',
  'ds3-neutral-subtle-pressed':
    'var(--ds3-background-neutral-subtle-pressed, #091e4223)',
  'ds3-neutral-bold': 'var(--ds3-background-neutral-bold, #44546f)',
  'ds3-neutral-bold-hover':
    'var(--ds3-background-neutral-bold-hover, #2c3e5d)',
  'ds3-neutral-bold-pressed':
    'var(--ds3-background-neutral-bold-pressed, #172b4d)',

  /* INPUT */
  'ds3-input': 'var(--ds3-background-input, #ffffff)',
  'ds3-input-hover': 'var(--ds3-background-input-hover, #f7f8f9)',
  'ds3-input-pressed': 'var(--ds3-background-input-pressed, #ffffff)',

  /* DISABLED */
  'ds3-disabled': 'var(--ds3-background-disabled, #091e4207)',

  /* SELECTED */
  'ds3-selected': 'var(--ds3-background-selected, #e9f2ff)',
  'ds3-selected-hover': 'var(--ds3-background-selected-hover, #cce0ff)',
  'ds3-selected-pressed': 'var(--ds3-background-selected-pressed, #85b8ff)',
  'ds3-selected-bold': 'var(--ds3-background-selected-bold, #1856f5)',
  'ds3-selected-bold-hover':
    'var(--ds3-background-selected-bold-hover, #004ab1)',
  'ds3-selected-bold-pressed':
    'var(--ds3-background-selected-bold-pressed, #09326c)',

  /* DANGER */
  'ds3-danger': 'var(--ds3-background-danger, #ffeceb)',
  'ds3-danger-hover': 'var(--ds3-background-danger-hover, #ffd5d2)',
  'ds3-danger-pressed': 'var(--ds3-background-danger-pressed, #fd9891)',
  'ds3-danger-bold': 'var(--ds3-background-danger-bold, #c9372c)',
  'ds3-danger-bold-hover': 'var(--ds3-background-danger-bold-hover, #ae2e24)',
  'ds3-danger-bold-pressed':
    'var(--ds3-background-danger-bold-pressed, #5d1f1a)',

  /* WARNING */
  'ds3-warning': 'var(--ds3-background-warning, #fff7d6)',
  'ds3-warning-hover': 'var(--ds3-background-warning-hover, #f8e6a0)',
  'ds3-warning-pressed': 'var(--ds3-background-warning-pressed, #f5cd47)',
  'ds3-warning-bold': 'var(--ds3-background-warning-bold, #e2b203)',
  'ds3-warning-bold-hover':
    'var(--ds3-background-warning-bold-hover, #cf9f02)',
  'ds3-warning-bold-pressed':
    'var(--ds3-background-warning-bold-pressed, #b38600)',

  /* SUCCESS */
  'ds3-success': 'var(--ds3-background-success, #dcfff1)',
  'ds3-success-hover': 'var(--ds3-background-success-hover, #baf3db)',
  'ds3-success-pressed': 'var(--ds3-background-success-pressed, #7ee2b8)',
  'ds3-success-bold': 'var(--ds3-background-success-bold, #1f845a)',
  'ds3-success-bold-hover':
    'var(--ds3-background-success-bold-hover, #216e4e)',
  'ds3-success-bold-pressed':
    'var(--ds3-background-success-bold-pressed, #164b35)',

  /* DISCOVERY */
  'ds3-discovery': 'var(--ds3-background-discovery, #f3f0ff)',
  'ds3-discovery-hover': 'var(--ds3-background-discovery-hover, #dfd8fd)',
  'ds3-discovery-pressed': 'var(--ds3-background-discovery-pressed, #b8acf6)',
  'ds3-discovery-bold': 'var(--ds3-background-discovery-bold, #6e5dc6)',
  'ds3-discovery-bold-hover':
    'var(--ds3-background-discovery-bold-hover, #5e4db2)',
  'ds3-discovery-bold-pressed':
    'var(--ds3-background-discovery-bold-pressed, #352c63)',

  /* INFORMATION */
  'ds3-information': 'var(--ds3-background-information, #e9f2ff)',
  'ds3-information-hover': 'var(--ds3-background-information-hover, #cce0ff)',
  'ds3-information-pressed':
    'var(--ds3-background-information-pressed, #85b8ff)',
  'ds3-information-bold': 'var(--ds3-background-information-bold, #1856f5)',
  'ds3-information-bold-hover':
    'var(--ds3-background-information-bold-hover, #004ab1)',
  'ds3-information-bold-pressed':
    'var(--ds3-background-information-bold-pressed, #09326c)',

  /* BRAND */
  'ds3-brand-subtlest': 'var(--ds3-background-brand-subtlest, #e9f2ff)',
  'ds3-brand-subtler': 'var(--ds3-background-brand-subtler, #85b8ff)',
  'ds3-brand-subtle': 'var(--ds3-background-brand-subtle, #388bff)',
  'ds3-brand-base': 'var(--ds3-background-brand-base, #1856f5)',
  'ds3-brand-bold': 'var(--ds3-background-brand-bold, #004ab1)',
  'ds3-brand-bolder': 'var(--ds3-background-brand-bolder, #09326c)',
  'ds3-brand-boldest': 'var(--ds3-background-brand-boldest, #1c2b41)',

  /* SKELETON */
  'ds3-skeleton-base': 'var(--ds3-skeleton-base, #091e420f)',
  'ds3-skeleton-subtle': 'var(--ds3-skeleton-subtle, #091e4207)',

  /* BLANKET */
  'ds3-blanket': 'var(--ds3-blanket-default, #091e427c)',
  'ds3-blanket-selected': 'var(--ds3-blanket-selected, rgba(56, 139, 255, 0.08))',

  /* ELEVATION */
  'ds3-surface': 'var(--ds3-elevation-surface, #f7f8f9)',
  'ds3-surface-hovered': 'var(--ds3-elevation-surface-hovered, #f1f2f4)',
  'ds3-surface-pressed': 'var(--ds3-elevation-surface-pressed, #dcdfe4)',
  'ds3-surface-registration':
    'var(--ds3-elevation-surface-registration, #f4f8ff)',
  'ds3-surface-sunken': 'var(--ds3-elevation-surface-sunken, #f7f8f9)',
  'ds3-overlay': 'var(--ds3-elevation-overlay, #ffffff)',
  'ds3-overlay-hovered': 'var(--ds3-elevation-overlay-hovered, #f1f2f4)',
  'ds3-overlay-pressed': 'var(--ds3-elevation-overlay-pressed, #dcdfe4)',
  'ds3-raised': 'var(--ds3-elevation-raised, #ffffff)',
  'ds3-raised-hovered': 'var(--ds3-elevation-raised-hovered, #f1f2f4)',
  'ds3-raised-pressed': 'var(--ds3-elevation-raised-pressed, #dcdfe4)',

  /* CHART - Brand */
  'ds3-chart-brand': 'var(--ds3-chart-brand, #1856f5)',
  'ds3-chart-brand-hover': 'var(--ds3-chart-brand-hover, #668ff8)',

  /* CHART - Category */
  'ds3-chart-category-1': 'var(--ds3-chart-category-1, #388bff)',
  'ds3-chart-category-1-hover': 'var(--ds3-chart-category-1-hover, #1856f5)',
  'ds3-chart-category-1-pressed': 'var(--ds3-chart-category-1-pressed, #09326c)',
  'ds3-chart-category-2': 'var(--ds3-chart-category-2, #0eaca2)',
  'ds3-chart-category-2-hover': 'var(--ds3-chart-category-2-hover, #009083)',
  'ds3-chart-category-2-pressed': 'var(--ds3-chart-category-2-pressed, #006f63)',
  'ds3-chart-category-3': 'var(--ds3-chart-category-3, #e24471)',
  'ds3-chart-category-3-hover': 'var(--ds3-chart-category-3-hover, #cc2657)',
  'ds3-chart-category-3-pressed': 'var(--ds3-chart-category-3-pressed, #901a4a)',
  'ds3-chart-category-4': 'var(--ds3-chart-category-4, #8f7ee7)',
  'ds3-chart-category-4-hover': 'var(--ds3-chart-category-4-hover, #6e5dc6)',
  'ds3-chart-category-4-pressed': 'var(--ds3-chart-category-4-pressed, #352c63)',
  'ds3-chart-category-5': 'var(--ds3-chart-category-5, #f38a3f)',
  'ds3-chart-category-5-hover': 'var(--ds3-chart-category-5-hover, #aa5c00)',
  'ds3-chart-category-5-pressed': 'var(--ds3-chart-category-5-pressed, #552e00)',

  /* CHART - Status */
  'ds3-chart-success': 'var(--ds3-chart-success, #22a06b)',
  'ds3-chart-success-hover': 'var(--ds3-chart-success-hover, #1f845a)',
  'ds3-chart-warning': 'var(--ds3-chart-warning, #b38600)',
  'ds3-chart-warning-hover': 'var(--ds3-chart-warning-hover, #7f5f01)',
  'ds3-chart-danger': 'var(--ds3-chart-danger, #e2483d)',
  'ds3-chart-danger-hover': 'var(--ds3-chart-danger-hover, #c9372c)',
  'ds3-chart-discovery': 'var(--ds3-chart-discovery, #8270db)',
  'ds3-chart-discovery-hover': 'var(--ds3-chart-discovery-hover, #6e5dc6)',
  'ds3-chart-information': 'var(--ds3-chart-information, #1d7afc)',
  'ds3-chart-information-hover': 'var(--ds3-chart-information-hover, #1856f5)',

  /* ACCENT - Green */
  'ds3-accent-green-subtle': 'var(--ds3-background-accent-green-subtle)',
  'ds3-accent-green-subtle-hover': 'var(--ds3-background-accent-green-subtle-hover)',
  'ds3-accent-green-subtle-pressed': 'var(--ds3-background-accent-green-subtle-pressed)',
  'ds3-accent-green-bold': 'var(--ds3-background-accent-green-bold)',
  'ds3-accent-green-bold-hover': 'var(--ds3-background-accent-green-bold-hover)',
  'ds3-accent-green-bold-pressed': 'var(--ds3-background-accent-green-bold-pressed)',

  /* ACCENT - Magenta */
  'ds3-accent-magenta-subtle': 'var(--ds3-background-accent-magenta-subtle)',
  'ds3-accent-magenta-subtle-hover': 'var(--ds3-background-accent-magenta-subtle-hover)',
  'ds3-accent-magenta-subtle-pressed': 'var(--ds3-background-accent-magenta-subtle-pressed)',
  'ds3-accent-magenta-bold': 'var(--ds3-background-accent-magenta-bold)',
  'ds3-accent-magenta-bold-hover': 'var(--ds3-background-accent-magenta-bold-hover)',
  'ds3-accent-magenta-bold-pressed': 'var(--ds3-background-accent-magenta-bold-pressed)',

  /* ACCENT - Orange */
  'ds3-accent-orange-subtle': 'var(--ds3-background-accent-orange-subtle)',
  'ds3-accent-orange-subtle-hover': 'var(--ds3-background-accent-orange-subtle-hover)',
  'ds3-accent-orange-subtle-pressed': 'var(--ds3-background-accent-orange-subtle-pressed)',
  'ds3-accent-orange-bold': 'var(--ds3-background-accent-orange-bold)',
  'ds3-accent-orange-bold-hover': 'var(--ds3-background-accent-orange-bold-hover)',
  'ds3-accent-orange-bold-pressed': 'var(--ds3-background-accent-orange-bold-pressed)',

  /* ACCENT - Yellow */
  'ds3-accent-yellow-subtle': 'var(--ds3-background-accent-yellow-subtle)',
  'ds3-accent-yellow-subtle-hover': 'var(--ds3-background-accent-yellow-subtle-hover)',
  'ds3-accent-yellow-subtle-pressed': 'var(--ds3-background-accent-yellow-subtle-pressed)',
  'ds3-accent-yellow-bold': 'var(--ds3-background-accent-yellow-bold)',
  'ds3-accent-yellow-bold-hover': 'var(--ds3-background-accent-yellow-bold-hover)',
  'ds3-accent-yellow-bold-pressed': 'var(--ds3-background-accent-yellow-bold-pressed)',

  /* ACCENT - Lime */
  'ds3-accent-lime-subtle': 'var(--ds3-background-accent-lime-subtle)',
  'ds3-accent-lime-subtle-hover': 'var(--ds3-background-accent-lime-subtle-hover)',
  'ds3-accent-lime-subtle-pressed': 'var(--ds3-background-accent-lime-subtle-pressed)',
  'ds3-accent-lime-bold': 'var(--ds3-background-accent-lime-bold)',
  'ds3-accent-lime-bold-hover': 'var(--ds3-background-accent-lime-bold-hover)',
  'ds3-accent-lime-bold-pressed': 'var(--ds3-background-accent-lime-bold-pressed)',

  /* ACCENT - Red */
  'ds3-accent-red-subtle': 'var(--ds3-background-accent-red-subtle)',
  'ds3-accent-red-subtle-hover': 'var(--ds3-background-accent-red-subtle-hover)',
  'ds3-accent-red-subtle-pressed': 'var(--ds3-background-accent-red-subtle-pressed)',
  'ds3-accent-red-bold': 'var(--ds3-background-accent-red-bold)',
  'ds3-accent-red-bold-hover': 'var(--ds3-background-accent-red-bold-hover)',
  'ds3-accent-red-bold-pressed': 'var(--ds3-background-accent-red-bold-pressed)',

  /* ACCENT - Blue */
  'ds3-accent-blue-subtle': 'var(--ds3-background-accent-blue-subtle)',
  'ds3-accent-blue-subtle-hover': 'var(--ds3-background-accent-blue-subtle-hover)',
  'ds3-accent-blue-subtle-pressed': 'var(--ds3-background-accent-blue-subtle-pressed)',
  'ds3-accent-blue-bold': 'var(--ds3-background-accent-blue-bold)',
  'ds3-accent-blue-bold-hover': 'var(--ds3-background-accent-blue-bold-hover)',
  'ds3-accent-blue-bold-pressed': 'var(--ds3-background-accent-blue-bold-pressed)',

  /* ACCENT - Purple */
  'ds3-accent-purple-subtle': 'var(--ds3-background-accent-purple-subtle)',
  'ds3-accent-purple-subtle-hover': 'var(--ds3-background-accent-purple-subtle-hover)',
  'ds3-accent-purple-subtle-pressed': 'var(--ds3-background-accent-purple-subtle-pressed)',
  'ds3-accent-purple-bold': 'var(--ds3-background-accent-purple-bold)',
  'ds3-accent-purple-bold-hover': 'var(--ds3-background-accent-purple-bold-hover)',
  'ds3-accent-purple-bold-pressed': 'var(--ds3-background-accent-purple-bold-pressed)',

  /* ACCENT - Teal */
  'ds3-accent-teal-subtle': 'var(--ds3-background-accent-teal-subtle)',
  'ds3-accent-teal-subtle-hover': 'var(--ds3-background-accent-teal-subtle-hover)',
  'ds3-accent-teal-subtle-pressed': 'var(--ds3-background-accent-teal-subtle-pressed)',
  'ds3-accent-teal-bold': 'var(--ds3-background-accent-teal-bold)',
  'ds3-accent-teal-bold-hover': 'var(--ds3-background-accent-teal-bold-hover)',
  'ds3-accent-teal-bold-pressed': 'var(--ds3-background-accent-teal-bold-pressed)',

  /* LEGACY ALIASES (for backwards compatibility - prefer non-default versions) */
  'ds3-neutral-default': 'var(--ds3-background-neutral, #091e420f)',
  'ds3-neutral-subtle-default': 'var(--ds3-background-neutral-subtle, #ffffff)',
  'ds3-neutral-bold-default': 'var(--ds3-background-neutral-bold, #44546f)',
  'ds3-input-default': 'var(--ds3-background-input, #ffffff)',
  'ds3-selected-default': 'var(--ds3-background-selected, #e9f2ff)',
  'ds3-selected-bold-default': 'var(--ds3-background-selected-bold, #1856f5)',
  'ds3-danger-default': 'var(--ds3-background-danger, #ffeceb)',
  'ds3-danger-bold-default': 'var(--ds3-background-danger-bold, #c9372c)',
  'ds3-warning-default': 'var(--ds3-background-warning, #fff7d6)',
  'ds3-warning-bold-default': 'var(--ds3-background-warning-bold, #e2b203)',
  'ds3-success-default': 'var(--ds3-background-success, #dcfff1)',
  'ds3-success-bold-default': 'var(--ds3-background-success-bold, #1f845a)',
  'ds3-discovery-default': 'var(--ds3-background-discovery, #f3f0ff)',
  'ds3-discovery-bold-default': 'var(--ds3-background-discovery-bold, #6e5dc6)',
  'ds3-information-default': 'var(--ds3-background-information, #e9f2ff)',
  'ds3-information-bold-default': 'var(--ds3-background-information-bold, #1856f5)',
  'ds3-background-success-default': 'var(--ds3-background-success, #dcfff1)',
  'ds3-background-discovery-default': 'var(--ds3-background-discovery, #f3f0ff)',
  'ds3-background-discovery-bold-default': 'var(--ds3-background-discovery-bold, #6e5dc6)',
  'ds3-background-disabled': 'var(--ds3-background-disabled, #091e4207)',
  'ds3-brand-hover': 'var(--ds3-background-brand-bold, #004ab1)',
  'ds3-background-danger-bold-default': 'var(--ds3-background-danger-bold, #c9372c)',
  'ds3-background-error-default': 'var(--ds3-background-danger, #ffeceb)',
  'ds3-background-neutral-bold-default': 'var(--ds3-background-neutral-bold, #44546f)',
  'ds3-blanket-graphic-error': 'var(--ds3-blanket-graphic-error, rgba(255, 255, 255, 0.80))',
  'ds3-default': 'var(--ds3-background-neutral, #091e420f)',
  'ds3-info-bold-default': 'var(--ds3-background-information-bold, #1856f5)',
  'ds3-skeleton': 'var(--ds3-skeleton-base, #091e420f)',
} as const;

export const ds3BackgroundImage = {
  'ds3-ai':
    'linear-gradient(135deg, #1856F5 0%, #563EE6 25.34%, #7532DF 54.53%, #9426D7 90.25%)',
} as const;

export const ds3BorderColors = {
  'ds3-default': 'var(--ds3-border-default, #091e421f)',
  'ds3-subtle': 'var(--ds3-border-subtle, #091e420f)',
  'ds3-bold': 'var(--ds3-border-bold, #44546f)',
  'ds3-disabled': 'var(--ds3-border-disabled, #091e420f)',
  'ds3-input': 'var(--ds3-border-input, #091e424f)',
  'ds3-focused': 'var(--ds3-border-focused, #1d7afc)',
  'ds3-selected': 'var(--ds3-border-selected, #1856f5)',
  'ds3-brand': 'var(--ds3-border-brand, #1856f5)',

  /* STATUS */
  'ds3-danger': 'var(--ds3-border-danger, #e34935)',
  'ds3-warning': 'var(--ds3-border-warning, #f5cd47)',
  'ds3-success': 'var(--ds3-border-success, #22a06b)',
  'ds3-discovery': 'var(--ds3-border-discovery, #8270db)',
  'ds3-information': 'var(--ds3-border-information, #388bff)',

  /* ACCENT */
  'ds3-accent-blue': 'var(--ds3-border-accent-blue)',
  'ds3-accent-red': 'var(--ds3-border-accent-red)',
  'ds3-accent-orange': 'var(--ds3-border-accent-orange)',
  'ds3-accent-yellow': 'var(--ds3-border-accent-yellow)',
  'ds3-accent-lime': 'var(--ds3-border-accent-lime)',
  'ds3-accent-green': 'var(--ds3-border-accent-green)',
  'ds3-accent-teal': 'var(--ds3-border-accent-teal)',
  'ds3-accent-purple': 'var(--ds3-border-accent-purple)',
  'ds3-accent-magenta': 'var(--ds3-border-accent-magenta)',

  /* LEGACY ALIASES (for backwards compatibility) */
  'ds3-neutral': 'var(--ds3-border-subtle, #091e420f)',
  'ds3-neutral-default': 'var(--ds3-border-subtle, #091e420f)',
  'ds3-neutral-stroke': 'var(--ds3-border-subtle, #091e420f)',
  'ds3-selected-default': 'var(--ds3-border-selected, #1856f5)',
  'ds3-brand-base': 'var(--ds3-border-brand, #1856f5)',
} as const;

export const ds3RingColors = {
  'ds3-focused': 'var(--ds3-border-focused, #1d7afc)',
  'ds3-danger': 'var(--ds3-border-danger, #e34935)',
  'ds3-warning': 'var(--ds3-border-warning, #f5cd47)',
  'ds3-success': 'var(--ds3-border-success, #22a06b)',
  'ds3-information': 'var(--ds3-border-information, #388bff)',
  'ds3-discovery': 'var(--ds3-border-discovery, #8270db)',
  'ds3-selected': 'var(--ds3-border-selected, #1856f5)',
  'ds3-brand': 'var(--ds3-border-brand, #1856f5)',
} as const;

export const ds3RingOffsetColors = {
  'ds3-surface': 'var(--ds3-elevation-surface, #f7f8f9)',
  'ds3-overlay': 'var(--ds3-elevation-overlay, #ffffff)',
  'ds3-raised': 'var(--ds3-elevation-raised, #ffffff)',
} as const;

export const ds3BorderRadius = {
  'ds3-none': 'var(--floats-none, 0px)',
  'ds3-s': 'var(--floats-20, 2px)',
  'ds3-m': 'var(--floats-40, 4px)',
  'ds3-l': 'var(--floats-80, 8px)',
  'ds3-full': 'var(--floats-circular, 9999px)',
} as const;

export const ds3BorderWidth = {
  'ds3-none': 'var(--floats-none, 0px)',
  'ds3-s': 'var(--floats-10, 1px)',
  'ds3-m': 'var(--floats-20, 2px)',
  'ds3-l': 'var(--floats-30, 3px)',
} as const;

export const ds3Spacing = {
  'ds3-none': 'var(--floats-none, 0px)',
  'ds3-xxs': 'var(--floats-40, 4px)',
  'ds3-xs': 'var(--floats-80, 8px)',
  'ds3-s': 'var(--floats-160, 16px)',
  'ds3-m': 'var(--floats-240, 24px)',
  'ds3-l': 'var(--floats-320, 32px)',
  'ds3-xl': 'var(--floats-480, 48px)',
  'ds3-xxl': 'var(--floats-640, 64px)',
} as const;

export const ds3TextColors = {
  'ds3-default': 'var(--ds3-text-default, #172b4d)',
  'ds3-subtle': 'var(--ds3-text-subtle, #44546f)',
  'ds3-title': 'var(--ds3-text-title, #091e42)',
  'ds3-caption': 'var(--ds3-text-caption, #626f86)',
  'ds3-inverted': 'var(--ds3-text-inverted, #ffffff)',
  'ds3-disabled': 'var(--ds3-text-disabled, #091e4266)',
  'ds3-selected': 'var(--ds3-text-selected, #1856f5)',
  'ds3-brand': 'var(--ds3-text-brand, #1856f5)',
  'ds3-link': 'var(--ds3-text-brand, #1856f5)',

  /* Status */
  'ds3-danger': 'var(--ds3-text-danger, #c9372c)',
  'ds3-warning': 'var(--ds3-text-warning, #cf9f02)',
  'ds3-success': 'var(--ds3-text-success, #1f845a)',
  'ds3-discovery': 'var(--ds3-text-discovery, #8270db)',
  'ds3-information': 'var(--ds3-text-information, #1d7afc)',

  /* Accent */
  'ds3-accent-blue': 'var(--ds3-text-accent-blue)',
  'ds3-accent-lime': 'var(--ds3-text-accent-lime)',
  'ds3-accent-red': 'var(--ds3-text-accent-red)',
  'ds3-accent-yellow': 'var(--ds3-text-accent-yellow)',
  'ds3-accent-green': 'var(--ds3-text-accent-green)',
  'ds3-accent-teal': 'var(--ds3-text-accent-teal)',
  'ds3-accent-purple': 'var(--ds3-text-accent-purple)',
  'ds3-accent-magenta': 'var(--ds3-text-accent-magenta)',
  'ds3-accent-orange': 'var(--ds3-text-accent-orange)',

  /* LEGACY ALIASES (for backwards compatibility) */
  'ds3-muted': 'var(--ds3-text-caption, #626f86)',
  'ds3-primary': 'var(--ds3-text-default, #172b4d)',
  'ds3-error': 'var(--ds3-text-danger, #c9372c)',
  'ds3-brand-base': 'var(--ds3-text-brand, #1856f5)',
  'ds3-warning-bold-default': 'var(--ds3-text-warning, #cf9f02)',
  'ds3-neutral-bold-default': 'var(--ds3-text-subtle, #44546f)',
} as const;

export const ds3FillColors = {
  'ds3-default': 'var(--ds3-icon-default, #44546f)',
  'ds3-subtle': 'var(--ds3-icon-subtle, #626f86)',
  'ds3-inverted': 'var(--ds3-icon-inverted, #ffffff)',
  'ds3-disabled': 'var(--ds3-icon-disabled, #091e424f)',
  'ds3-selected': 'var(--ds3-icon-selected, #1856f5)',
  'ds3-brand': 'var(--ds3-icon-brand, #1856f5)',

  'ds3-danger': 'var(--ds3-icon-danger, #e2483d)',
  'ds3-warning': 'var(--ds3-icon-warning, #b38600)',
  'ds3-success': 'var(--ds3-icon-success, #22a06b)',
  'ds3-discovery': 'var(--ds3-icon-discovery, #8270db)',
  'ds3-information': 'var(--ds3-icon-information, #1d7afc)',

  'ds3-accent-blue': 'var(--ds3-icon-accent-blue)',
  'ds3-accent-lime': 'var(--ds3-icon-accent-lime)',
  'ds3-accent-red': 'var(--ds3-icon-accent-red)',
  'ds3-accent-yellow': 'var(--ds3-icon-accent-yellow)',
  'ds3-accent-green': 'var(--ds3-icon-accent-green)',
  'ds3-accent-teal': 'var(--ds3-icon-accent-teal)',
  'ds3-accent-purple': 'var(--ds3-icon-accent-purple)',
  'ds3-accent-magenta': 'var(--ds3-icon-accent-magenta)',
  'ds3-accent-orange': 'var(--ds3-icon-accent-orange)',

  'ds3-ai':
    'linear-gradient(135deg, #1856F5 0%, #563EE6 25.34%, #7532DF 54.53%, #9426D7 90.25%)',

  /* LEGACY ALIASES (for backwards compatibility) */
  'ds3-caption': 'var(--ds3-icon-subtle, #626f86)',
  'ds3-success-bold-default': 'var(--ds3-icon-success, #22a06b)',
} as const;

export const ds3Typography = {
  '.font-ds3-display-lg': {
    fontSize: '57px',
    lineHeight: '68px',
    fontWeight: '700',
    fontFamily: 'var(--font-inter)',
  },
  '.font-ds3-display-md': {
    fontSize: '45px',
    lineHeight: '54px',
    fontWeight: '700',
    fontFamily: 'var(--font-inter)',
  },
  '.font-ds3-display-sm': {
    fontSize: '36px',
    lineHeight: '43px',
    fontWeight: '600',
    fontFamily: 'var(--font-inter)',
  },
  '.font-ds3-headline-lg': {
    fontSize: '32px',
    lineHeight: '38px',
    fontWeight: '600',
    fontFamily: 'var(--font-inter)',
  },
  '.font-ds3-headline-md': {
    fontSize: '28px',
    lineHeight: '32px',
    fontWeight: '600',
    fontFamily: 'var(--font-inter)',
  },
  '.font-ds3-headline-sm': {
    fontSize: '24px',
    lineHeight: '28px',
    fontWeight: '600',
    fontFamily: 'var(--font-inter)',
  },
  '.font-ds3-title-lg': {
    fontSize: '22px',
    lineHeight: '33px',
    fontWeight: '600',
    fontFamily: 'var(--font-inter)',
  },
  '.font-ds3-title-md': {
    fontSize: '20px',
    lineHeight: '30px',
    fontWeight: '600',
    fontFamily: 'var(--font-inter)',
  },
  '.font-ds3-title-sm': {
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: '600',
    fontFamily: 'var(--font-inter)',
  },
  '.font-ds3-body-lg': {
    fontSize: '18px',
    lineHeight: '26px',
    fontWeight: '400',
    fontFamily: 'var(--font-inter)',
  },
  '.font-ds3-body-md': {
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: '400',
    fontFamily: 'var(--font-inter)',
  },
  '.font-ds3-body-sm': {
    fontSize: '14px',
    lineHeight: '21px',
    fontWeight: '400',
    fontFamily: 'var(--font-inter)',
  },
  '.font-ds3-caption-lg': {
    fontSize: '14px',
    lineHeight: '20px',
    fontWeight: '500',
    fontFamily: 'var(--font-inter)',
  },
  '.font-ds3-caption-md': {
    fontSize: '12px',
    lineHeight: '18px',
    fontWeight: '400',
    fontFamily: 'var(--font-inter)',
  },
  '.font-ds3-caption-sm': {
    fontSize: '11px',
    lineHeight: '16px',
    fontWeight: '400',
    fontFamily: 'var(--font-inter)',
  },
  '.font-ds3-button': {
    fontSize: '16px',
    lineHeight: '20px',
    fontWeight: '600',
    fontFamily: 'var(--font-inter)',
  },
  '.font-ds3-tag': {
    fontSize: '11px',
    lineHeight: '16px',
    fontWeight: '500',
    fontFamily: 'var(--font-inter)',
  },
  '.font-ds3-label': {
    fontSize: '14px',
    fontWeight: '600',
    fontFamily: 'var(--font-inter)',
    textTransform: 'uppercase',
  },
} as const;

/**
 * NA Design System 3 Tailwind Preset
 *
 * Contains all ds3 tokens from Figma. Import this preset in your tailwind.config
 * to get consistent design tokens across all NA applications.
 */
export const naDesignTokensPreset: Partial<Config> = {
  theme: {
    extend: {
      backgroundColor: ds3BackgroundColors,
      backgroundImage: ds3BackgroundImage,
      borderColor: ds3BorderColors,
      borderRadius: ds3BorderRadius,
      borderWidth: ds3BorderWidth,
      ringColor: ds3RingColors,
      ringOffsetColor: ds3RingOffsetColors,
      spacing: ds3Spacing,
      textColor: ds3TextColors,
      fill: ds3FillColors,
    },
  },
  plugins: [
    function ({ addComponents }: { addComponents: (components: Record<string, Record<string, string>>) => void }) {
      addComponents(ds3Typography);
    },
  ],
};

export default naDesignTokensPreset;
