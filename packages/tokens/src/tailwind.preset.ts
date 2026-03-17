import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

/**
 * @indigo/tokens — Tailwind Preset
 *
 * Consumes DS2 CSS custom properties defined in tokens.css.
 * Import this preset in any project's tailwind.config.ts:
 *
 *   import indigoPreset from '@indigo/tokens/tailwind';
 *   export default { presets: [indigoPreset] } satisfies Config;
 */
const indigoPreset: Omit<Config, 'content'> = {
    darkMode: ['selector', '[data-mode="dark"]'],

    theme: {
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
        },

        extend: {
            backgroundColor: {
                /* DS2 TOKENS  */

                /* ⚠️ DO NOT ADD CLASSES HERE ⚠️
                 *
                 * All color tokens are managed by the Design Team and synced with Figma.
                 *
                 * ✅ Use only the semantic tokens defined in this config.
                 * ❌ Do not add hardcoded hex values or custom color classes.
                 *
                 * If you notice a missing token or need a color not covered here,
                 * please leave a comment directly in the Design file in Figma.
                 * The Design team will review and update the tokens or designs as needed. */

                /* NEUTRALS */
                'ds2-neutral': 'var(--ds2-background-neutral, #091e420f)',
                'ds2-neutral-hover': 'var(--ds2-background-neutral-hover, #091e4223)',
                'ds2-neutral-pressed':
                    'var(--ds2-background-neutral-pressed, #091e424f)',
                'ds2-neutral-subtle': 'var(--ds2-background-neutral-subtle, #ffffff)',
                'ds2-neutral-subtle-hover':
                    'var(--ds2-background-neutral-subtle-hover, #091e420f)',
                'ds2-neutral-subtle-pressed':
                    'var(--ds2-background-neutral-subtle-pressed, #091e4223)',
                'ds2-neutral-bold': 'var(--ds2-background-neutral-bold, #44546f)',
                'ds2-neutral-bold-hover':
                    'var(--ds2-background-neutral-bold-hover, #2c3e5d)',
                'ds2-neutral-bold-pressed':
                    'var(--ds2-background-neutral-bold-pressed, #172b4d)',

                /* INPUT */
                'ds2-input': 'var(--ds2-background-input, #ffffff)',
                'ds2-input-hover': 'var(--ds2-background-input-hover, #f7f8f9)',
                'ds2-input-pressed': 'var(--ds2-background-input-pressed, #ffffff)',

                /* DISABLED */
                'ds2-disabled': 'var(--ds2-background-disabled, #091e4207)',

                /* SELECTED */
                'ds2-selected': 'var(--ds2-background-selected, #e9f2ff)',
                'ds2-selected-hover': 'var(--ds2-background-selected-hover, #cce0ff)',
                'ds2-selected-pressed':
                    'var(--ds2-background-selected-pressed, #85b8ff)',
                'ds2-selected-bold': 'var(--ds2-background-selected-bold, #1856f5)',
                'ds2-selected-bold-hover':
                    'var(--ds2-background-selected-bold-hover, #004ab1)',
                'ds2-selected-bold-pressed':
                    'var(--ds2-background-selected-bold-pressed, #09326c)',

                /* DANGER */
                'ds2-danger': 'var(--ds2-background-danger, #ffeceb)',
                'ds2-danger-hover': 'var(--ds2-background-danger-hover, #ffd5d2)',
                'ds2-danger-pressed': 'var(--ds2-background-danger-pressed, #fd9891)',
                'ds2-danger-bold': 'var(--ds2-background-danger-bold, #c9372c)',
                'ds2-danger-bold-hover':
                    'var(--ds2-background-danger-bold-hover, #ae2e24)',
                'ds2-danger-bold-pressed':
                    'var(--ds2-background-danger-bold-pressed, #5d1f1a)',

                /* WARNING */
                'ds2-warning': 'var(--ds2-background-warning, #fff7d6)',
                'ds2-warning-hover': 'var(--ds2-background-warning-hover, #f8e6a0)',
                'ds2-warning-pressed': 'var(--ds2-background-warning-pressed, #f5cd47)',
                'ds2-warning-bold': 'var(--ds2-background-warning-bold, #e2b203)',
                'ds2-warning-bold-hover':
                    'var(--ds2-background-warning-bold-hover, #cf9f02)',
                'ds2-warning-bold-pressed':
                    'var(--ds2-background-warning-bold-pressed, #b38600)',

                /* SUCCESS */
                'ds2-success': 'var(--ds2-background-success, #dcfff1)',
                'ds2-success-hover': 'var(--ds2-background-success-hover, #baf3db)',
                'ds2-success-pressed': 'var(--ds2-background-success-pressed, #7ee2b8)',
                'ds2-success-bold': 'var(--ds2-background-success-bold, #1f845a)',
                'ds2-success-bold-hover':
                    'var(--ds2-background-success-bold-hover, #216e4e)',
                'ds2-success-bold-pressed':
                    'var(--ds2-background-success-bold-pressed, #164b35)',

                /* DISCOVERY */
                'ds2-discovery': 'var(--ds2-background-discovery, #f3f0ff)',
                'ds2-discovery-hover': 'var(--ds2-background-discovery-hover, #dfd8fd)',
                'ds2-discovery-pressed':
                    'var(--ds2-background-discovery-pressed, #b8acf6)',
                'ds2-discovery-bold': 'var(--ds2-background-discovery-bold, #6e5dc6)',
                'ds2-discovery-bold-hover':
                    'var(--ds2-background-discovery-bold-hover, #5e4db2)',
                'ds2-discovery-bold-pressed':
                    'var(--ds2-background-discovery-bold-pressed, #352c63)',

                /* INFORMATION */
                'ds2-information': 'var(--ds2-background-information, #e9f2ff)',
                'ds2-information-hover':
                    'var(--ds2-background-information-hover, #cce0ff)',
                'ds2-information-pressed':
                    'var(--ds2-background-information-pressed, #85b8ff)',
                'ds2-information-bold':
                    'var(--ds2-background-information-bold, #1856f5)',
                'ds2-information-bold-hover':
                    'var(--ds2-background-information-bold-hover, #004ab1)',
                'ds2-information-bold-pressed':
                    'var(--ds2-background-information-bold-pressed, #09326c)',

                /* BRAND */
                'ds2-brand-subtlest': 'var(--ds2-background-brand-subtlest, #e9f2ff)',
                'ds2-brand-subtler': 'var(--ds2-background-brand-subtler, #85b8ff)',
                'ds2-brand-subtle': 'var(--ds2-background-brand-subtle, #388bff)',
                'ds2-brand-base': 'var(--ds2-background-brand-base, #1856f5)',
                'ds2-brand-bold': 'var(--ds2-background-brand-bold, #004ab1)',
                'ds2-brand-bolder': 'var(--ds2-background-brand-bolder, #09326c)',
                'ds2-brand-boldest': 'var(--ds2-background-brand-boldest, #1c2b41)',

                /* SKELETON */
                'ds2-skeleton-base': 'var(--ds2-skeleton-base, #091e420f)',
                'ds2-skeleton-subtle': 'var(--ds2-skeleton-subtle, #091e4207)',

                /* BLANKET */
                'ds2-blanket': 'var(--ds2-blanket-default, #091e427c)',
                'ds2-blanket-selected':
                    'var(--ds2-blanket-selected, rgba(56, 139, 255, 0.08))',

                /* ELEVATION */
                'ds2-surface': 'var(--ds2-elevation-surface, #f7f8f9)',
                'ds2-surface-hovered': 'var(--ds2-elevation-surface-hovered, #f1f2f4)',
                'ds2-surface-pressed': 'var(--ds2-elevation-surface-pressed, #dcdfe4)',
                'ds2-surface-registration':
                    'var(--ds2-elevation-surface-registration, #f4f8ff)',
                'ds2-surface-sunken': 'var(--ds2-elevation-surface-sunken, #f7f8f9)',
                'ds2-overlay': 'var(--ds2-elevation-overlay, #ffffff)',
                'ds2-overlay-hovered': 'var(--ds2-elevation-overlay-hovered, #f1f2f4)',
                'ds2-overlay-pressed': 'var(--ds2-elevation-overlay-pressed, #dcdfe4)',
                'ds2-raised': 'var(--ds2-elevation-raised, #ffffff)',
                'ds2-raised-hovered': 'var(--ds2-elevation-raised-hovered, #f1f2f4)',
                'ds2-raised-pressed': 'var(--ds2-elevation-raised-pressed, #dcdfe4)',

                /* CHART */
                /* Brand */
                'ds2-chart-brand': 'var(--ds2-chart-brand, #1856f5)',
                'ds2-chart-brand-hover': 'var(--ds2-chart-brand-hover, #668ff8)',

                /* Category */
                'ds2-chart-category-1': 'var(--ds2-chart-category-1, #388bff)',
                'ds2-chart-category-1-hover':
                    'var(--ds2-chart-category-1-hover, #1856f5)',
                'ds2-chart-category-1-pressed':
                    'var(--ds2-chart-category-1-pressed, #09326c)',

                'ds2-chart-category-2': 'var(--ds2-chart-category-2, #0eaca2)',
                'ds2-chart-category-2-hover':
                    'var(--ds2-chart-category-2-hover, #009083)',
                'ds2-chart-category-2-pressed':
                    'var(--ds2-chart-category-2-pressed, #006f63)',

                'ds2-chart-category-3': 'var(--ds2-chart-category-3, #e24471)',
                'ds2-chart-category-3-hover':
                    'var(--ds2-chart-category-3-hover, #cc2657)',
                'ds2-chart-category-3-pressed':
                    'var(--ds2-chart-category-3-pressed, #901a4a)',

                'ds2-chart-category-4': 'var(--ds2-chart-category-4, #8f7ee7)',
                'ds2-chart-category-4-hover':
                    'var(--ds2-chart-category-4-hover, #6e5dc6)',
                'ds2-chart-category-4-pressed':
                    'var(--ds2-chart-category-4-pressed, #352c63)',

                'ds2-chart-category-5': 'var(--ds2-chart-category-5, #f38a3f)',
                'ds2-chart-category-5-hover':
                    'var(--ds2-chart-category-5-hover, #aa5c00)',
                'ds2-chart-category-5-pressed':
                    'var(--ds2-chart-category-5-pressed, #552e00)',

                /* Status */
                'ds2-chart-success': 'var(--ds2-chart-success, #22a06b)',
                'ds2-chart-success-hover': 'var(--ds2-chart-success-hover, #1f845a)',

                'ds2-chart-warning': 'var(--ds2-chart-warning, #b38600)',
                'ds2-chart-warning-hover': 'var(--ds2-chart-warning-hover, #7f5f01)',

                'ds2-chart-danger': 'var(--ds2-chart-danger, #e2483d)',
                'ds2-chart-danger-hover': 'var(--ds2-chart-danger-hover, #c9372c)',

                'ds2-chart-discovery': 'var(--ds2-chart-discovery, #8270db)',
                'ds2-chart-discovery-hover':
                    'var(--ds2-chart-discovery-hover, #6e5dc6)',

                'ds2-chart-information': 'var(--ds2-chart-information, #1d7afc)',
                'ds2-chart-information-hover':
                    'var(--ds2-chart-information-hover, #1856f5)',

                /* ACCENT */
                // Green
                'ds2-accent-green-subtle': 'var(--ds2-background-accent-green-subtle)',
                'ds2-accent-green-subtle-hover':
                    'var(--ds2-background-accent-green-subtle-hover)',
                'ds2-accent-green-subtle-pressed':
                    'var(--ds2-background-accent-green-subtle-pressed)',
                'ds2-accent-green-bold': 'var(--ds2-background-accent-green-bold)',
                'ds2-accent-green-bold-hover':
                    'var(--ds2-background-accent-green-bold-hover)',
                'ds2-accent-green-bold-pressed':
                    'var(--ds2-background-accent-green-bold-pressed)',

                // Magenta
                'ds2-accent-magenta-subtle':
                    'var(--ds2-background-accent-magenta-subtle)',
                'ds2-accent-magenta-subtle-hover':
                    'var(--ds2-background-accent-magenta-subtle-hover)',
                'ds2-accent-magenta-subtle-pressed':
                    'var(--ds2-background-accent-magenta-subtle-pressed)',
                'ds2-accent-magenta-bold': 'var(--ds2-background-accent-magenta-bold)',
                'ds2-accent-magenta-bold-hover':
                    'var(--ds2-background-accent-magenta-bold-hover)',
                'ds2-accent-magenta-bold-pressed':
                    'var(--ds2-background-accent-magenta-bold-pressed)',

                // Orange
                'ds2-accent-orange-subtle':
                    'var(--ds2-background-accent-orange-subtle)',
                'ds2-accent-orange-subtle-hover':
                    'var(--ds2-background-accent-orange-subtle-hover)',
                'ds2-accent-orange-subtle-pressed':
                    'var(--ds2-background-accent-orange-subtle-pressed)',
                'ds2-accent-orange-bold': 'var(--ds2-background-accent-orange-bold)',
                'ds2-accent-orange-bold-hover':
                    'var(--ds2-background-accent-orange-bold-hover)',
                'ds2-accent-orange-bold-pressed':
                    'var(--ds2-background-accent-orange-bold-pressed)',

                // Yellow
                'ds2-accent-yellow-subtle':
                    'var(--ds2-background-accent-yellow-subtle)',
                'ds2-accent-yellow-subtle-hover':
                    'var(--ds2-background-accent-yellow-subtle-hover)',
                'ds2-accent-yellow-subtle-pressed':
                    'var(--ds2-background-accent-yellow-subtle-pressed)',
                'ds2-accent-yellow-bold': 'var(--ds2-background-accent-yellow-bold)',
                'ds2-accent-yellow-bold-hover':
                    'var(--ds2-background-accent-yellow-bold-hover)',
                'ds2-accent-yellow-bold-pressed':
                    'var(--ds2-background-accent-yellow-bold-pressed)',

                // Lime
                'ds2-accent-lime-subtle': 'var(--ds2-background-accent-lime-subtle)',
                'ds2-accent-lime-subtle-hover':
                    'var(--ds2-background-accent-lime-subtle-hover)',
                'ds2-accent-lime-subtle-pressed':
                    'var(--ds2-background-accent-lime-subtle-pressed)',
                'ds2-accent-lime-bold': 'var(--ds2-background-accent-lime-bold)',
                'ds2-accent-lime-bold-hover':
                    'var(--ds2-background-accent-lime-bold-hover)',
                'ds2-accent-lime-bold-pressed':
                    'var(--ds2-background-accent-lime-bold-pressed)',

                // Red
                'ds2-accent-red-subtle': 'var(--ds2-background-accent-red-subtle)',
                'ds2-accent-red-subtle-hover':
                    'var(--ds2-background-accent-red-subtle-hover)',
                'ds2-accent-red-subtle-pressed':
                    'var(--ds2-background-accent-red-subtle-pressed)',
                'ds2-accent-red-bold': 'var(--ds2-background-accent-red-bold)',
                'ds2-accent-red-bold-hover':
                    'var(--ds2-background-accent-red-bold-hover)',
                'ds2-accent-red-bold-pressed':
                    'var(--ds2-background-accent-red-bold-pressed)',

                // Blue
                'ds2-accent-blue-subtle': 'var(--ds2-background-accent-blue-subtle)',
                'ds2-accent-blue-subtle-hover':
                    'var(--ds2-background-accent-blue-subtle-hover)',
                'ds2-accent-blue-subtle-pressed':
                    'var(--ds2-background-accent-blue-subtle-pressed)',
                'ds2-accent-blue-bold': 'var(--ds2-background-accent-blue-bold)',
                'ds2-accent-blue-bold-hover':
                    'var(--ds2-background-accent-blue-bold-hover)',
                'ds2-accent-blue-bold-pressed':
                    'var(--ds2-background-accent-blue-bold-pressed)',

                // Purple
                'ds2-accent-purple-subtle':
                    'var(--ds2-background-accent-purple-subtle)',
                'ds2-accent-purple-subtle-hover':
                    'var(--ds2-background-accent-purple-subtle-hover)',
                'ds2-accent-purple-subtle-pressed':
                    'var(--ds2-background-accent-purple-subtle-pressed)',
                'ds2-accent-purple-bold': 'var(--ds2-background-accent-purple-bold)',
                'ds2-accent-purple-bold-hover':
                    'var(--ds2-background-accent-purple-bold-hover)',
                'ds2-accent-purple-bold-pressed':
                    'var(--ds2-background-accent-purple-bold-pressed)',

                // Teal
                'ds2-accent-teal-subtle': 'var(--ds2-background-accent-teal-subtle)',
                'ds2-accent-teal-subtle-hover':
                    'var(--ds2-background-accent-teal-subtle-hover)',
                'ds2-accent-teal-subtle-pressed':
                    'var(--ds2-background-accent-teal-subtle-pressed)',
                'ds2-accent-teal-bold': 'var(--ds2-background-accent-teal-bold)',
                'ds2-accent-teal-bold-hover':
                    'var(--ds2-background-accent-teal-bold-hover)',
                'ds2-accent-teal-bold-pressed':
                    'var(--ds2-background-accent-teal-bold-pressed)',
            },
            backgroundImage: {
                'ds2-ai':
                    'linear-gradient(135deg, #1856F5 0%, #563EE6 25.34%, #7532DF 54.53%, #9426D7 90.25%)',
            },
            borderColor: {

                'ds2-default': 'var(--ds2-border-default, #091e421f)',
                'ds2-subtle': 'var(--ds2-border-subtle, #091e420f)',
                'ds2-bold': 'var(--ds2-border-bold, #44546f)',
                'ds2-disabled': 'var(--ds2-border-disabled, #091e420f)',
                'ds2-input': 'var(--ds2-border-input, #091e424f)',
                'ds2-focused': 'var(--ds2-border-focused, #1d7afc)',
                'ds2-selected': 'var(--ds2-border-selected, #1856f5)',
                'ds2-brand': 'var(--ds2-border-brand, #1856f5)',

                /* STATUS */
                'ds2-danger': 'var(--ds2-border-danger, #e34935)',
                'ds2-warning': 'var(--ds2-border-warning, #f5cd47)',
                'ds2-success': 'var(--ds2-border-success, #22a06b)',
                'ds2-discovery': 'var(--ds2-border-discovery, #8270db)',
                'ds2-information': 'var(--ds2-border-information, #388bff)',

                /* ACCENT */
                'ds2-accent-blue': 'var(--ds2-border-accent-blue)',
                'ds2-accent-red': 'var(--ds2-border-accent-red)',
                'ds2-accent-orange': 'var(--ds2-border-accent-orange)',
                'ds2-accent-yellow': 'var(--ds2-border-accent-yellow)',
                'ds2-accent-lime': 'var(--ds2-border-accent-lime)',
                'ds2-accent-green': 'var(--ds2-border-accent-green)',
                'ds2-accent-teal': 'var(--ds2-border-accent-teal)',
                'ds2-accent-purple': 'var(--ds2-border-accent-purple)',
                'ds2-accent-magenta': 'var(--ds2-border-accent-magenta)',
            },
            borderRadius: {
                'ds2-none': 'var(--floats-none, 0px)',
                'ds2-s': 'var(--floats-20, 2px)',
                'ds2-m': 'var(--floats-40, 4px)',
                'ds2-l': 'var(--floats-80, 8px)',
                'ds2-full': 'var(--floats-circular, 9999px)',
            },
            borderWidth: {
                'ds2-none': 'var(--floats-none, 0px)',
                'ds2-s': 'var(--floats-10, 1px)',
                'ds2-m': 'var(--floats-20, 2px)',
                'ds2-l': 'var(--floats-30, 3px)',
            },
            fill: {
                'ds2-default': 'var(--ds2-icon-default, #44546f)',
                'ds2-subtle': 'var(--ds2-icon-subtle, #626f86)',
                'ds2-inverted': 'var(--ds2-icon-inverted, #ffffff)',
                'ds2-disabled': 'var(--ds2-icon-disabled, #091e424f)',
                'ds2-selected': 'var(--ds2-icon-selected, #1856f5)',
                'ds2-brand': 'var(--ds2-icon-brand, #1856f5)',

                /* Status */
                'ds2-danger': 'var(--ds2-icon-danger, #e2483d)',
                'ds2-warning': 'var(--ds2-icon-warning, #b38600)',
                'ds2-success': 'var(--ds2-icon-success, #22a06b)',
                'ds2-discovery': 'var(--ds2-icon-discovery, #8270db)',
                'ds2-information': 'var(--ds2-icon-information, #1d7afc)',

                /* Accent */
                'ds2-accent-blue': 'var(--ds2-icon-accent-blue)',
                'ds2-accent-lime': 'var(--ds2-icon-accent-lime)',
                'ds2-accent-red': 'var(--ds2-icon-accent-red)',
                'ds2-accent-yellow': 'var(--ds2-icon-accent-yellow)',
                'ds2-accent-green': 'var(--ds2-icon-accent-green)',
                'ds2-accent-teal': 'var(--ds2-icon-accent-teal)',
                'ds2-accent-purple': 'var(--ds2-icon-accent-purple)',
                'ds2-accent-magenta': 'var(--ds2-icon-accent-magenta)',
                'ds2-accent-orange': 'var(--ds2-icon-accent-orange)',

                /* AI */
                'ds2-ai':
                    'linear-gradient(135deg, #1856F5 0%, #563EE6 25.34%, #7532DF 54.53%, #9426D7 90.25%)',
            },
            fontFamily: {
                sans: ['Inter', 'ui-sans-serif', 'system-ui'],
            },
            spacing: {
                'ds2-none': 'var(--floats-none, 0px)',
                'ds2-xxs': 'var(--floats-40, 4px)',
                'ds2-xs': 'var(--floats-80, 8px)',
                'ds2-s': 'var(--floats-160, 16px)',
                'ds2-m': 'var(--floats-240, 24px)',
                'ds2-l': 'var(--floats-320, 32px)',
                'ds2-xl': 'var(--floats-480, 48px)',
                'ds2-xxl': 'var(--floats-640, 64px)',
            },
            textColor: {
                'ds2-default': 'var(--ds2-text-default, #172b4d)',
                'ds2-subtle': 'var(--ds2-text-subtle, #44546f)',
                'ds2-title': 'var(--ds2-text-title, #091e42)',
                'ds2-caption': 'var(--ds2-text-caption, #626f86)',
                'ds2-inverted': 'var(--ds2-text-inverted, #ffffff)',
                'ds2-disabled': 'var(--ds2-text-disabled, #091e4266)',
                'ds2-selected': 'var(--ds2-text-selected, #1856f5)',
                'ds2-brand': 'var(--ds2-text-brand, #1856f5)',
                'ds2-link': 'var(--ds2-text-brand, #1856f5)',

                /* Status */
                'ds2-danger': 'var(--ds2-text-danger, #c9372c)',
                'ds2-warning': 'var(--ds2-text-warning, #cf9f02)',
                'ds2-success': 'var(--ds2-text-success, #1f845a)',
                'ds2-discovery': 'var(--ds2-text-discovery, #8270db)',
                'ds2-information': 'var(--ds2-text-information, #1d7afc)',

                /* Accent */
                'ds2-accent-blue': 'var(--ds2-text-accent-blue)',
                'ds2-accent-lime': 'var(--ds2-text-accent-lime)',
                'ds2-accent-red': 'var(--ds2-text-accent-red)',
                'ds2-accent-yellow': 'var(--ds2-text-accent-yellow)',
                'ds2-accent-green': 'var(--ds2-text-accent-green)',
                'ds2-accent-teal': 'var(--ds2-text-accent-teal)',
                'ds2-accent-purple': 'var(--ds2-text-accent-purple)',
                'ds2-accent-magenta': 'var(--ds2-text-accent-magenta)',
                'ds2-accent-orange': 'var(--ds2-text-accent-orange)',
            },
        },
    },
    plugins: [
        plugin(function ({ addComponents }) {
            addComponents({
                /* Display */
                '.ds2-display-lg': { fontFamily: 'Inter, ui-sans-serif', fontSize: '57px', lineHeight: '68px', fontWeight: '700' },
                '.ds2-display-md': { fontFamily: 'Inter, ui-sans-serif', fontSize: '45px', lineHeight: '54px', fontWeight: '700' },
                '.ds2-display-sm': { fontFamily: 'Inter, ui-sans-serif', fontSize: '36px', lineHeight: '43px', fontWeight: '600' },

                /* Headline */
                '.ds2-headline-lg': { fontFamily: 'Inter, ui-sans-serif', fontSize: '32px', lineHeight: '33px', fontWeight: '600' },
                '.ds2-headline-md': { fontFamily: 'Inter, ui-sans-serif', fontSize: '28px', lineHeight: '30px', fontWeight: '600' },
                '.ds2-headline-sm': { fontFamily: 'Inter, ui-sans-serif', fontSize: '24px', lineHeight: '24px', fontWeight: '600' },

                /* Title */
                '.ds2-title-lg': { fontFamily: 'Inter, ui-sans-serif', fontSize: '22px', lineHeight: '26px', fontWeight: '600' },
                '.ds2-title-md': { fontFamily: 'Inter, ui-sans-serif', fontSize: '20px', lineHeight: '24px', fontWeight: '600' },
                '.ds2-title-sm': { fontFamily: 'Inter, ui-sans-serif', fontSize: '16px', lineHeight: '21px', fontWeight: '600' },

                /* Body */
                '.ds2-body-lg': { fontFamily: 'Inter, ui-sans-serif', fontSize: '18px', lineHeight: '26px', fontWeight: '400' },
                '.ds2-body-md': { fontFamily: 'Inter, ui-sans-serif', fontSize: '16px', lineHeight: '24px', fontWeight: '400' },
                '.ds2-body-sm': { fontFamily: 'Inter, ui-sans-serif', fontSize: '14px', lineHeight: '21px', fontWeight: '400' },

                /* Caption */
                '.ds2-caption-lg': { fontFamily: 'Inter, ui-sans-serif', fontSize: '14px', lineHeight: '20px', fontWeight: '500' },
                '.ds2-caption-md': { fontFamily: 'Inter, ui-sans-serif', fontSize: '12px', lineHeight: '18px', fontWeight: '400' },
                '.ds2-caption-sm': { fontFamily: 'Inter, ui-sans-serif', fontSize: '11px', lineHeight: '16px', fontWeight: '400' },

                /* Utility */
                '.ds2-button': { fontFamily: 'Inter, ui-sans-serif', fontSize: '14px', lineHeight: '16px', fontWeight: '600' },
                '.ds2-tag': { fontFamily: 'Inter, ui-sans-serif', fontSize: '11px', lineHeight: '16px', fontWeight: '500' },
                '.ds2-label': { fontFamily: 'Inter, ui-sans-serif', fontSize: '14px', fontWeight: '600', textTransform: 'uppercase' },
            });
        }),
    ],
};

export default indigoPreset;