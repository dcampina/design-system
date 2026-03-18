import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Tokens/TokenTest',
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const BackgroundColors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <h2 style={{ fontSize: '1.125rem', fontWeight: 600 }}>Background tokens (CSS variables)</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
        <div style={{ height: 48, width: 96, borderRadius: 4, backgroundColor: 'var(--ds2-background-brand-base)' }} title="ds2-background-brand-base" />
        <div style={{ height: 48, width: 96, borderRadius: 4, backgroundColor: 'var(--ds2-background-neutral)' }} title="ds2-background-neutral" />
        <div style={{ height: 48, width: 96, borderRadius: 4, backgroundColor: 'var(--ds2-background-selected)' }} title="ds2-background-selected" />
        <div style={{ height: 48, width: 96, borderRadius: 4, backgroundColor: 'var(--ds2-background-danger)' }} title="ds2-background-danger" />
        <div style={{ height: 48, width: 96, borderRadius: 4, backgroundColor: 'var(--ds2-background-success)' }} title="ds2-background-success" />
        <div style={{ height: 48, width: 96, borderRadius: 4, backgroundColor: 'var(--ds2-background-warning)' }} title="ds2-background-warning" />
        <div style={{ height: 48, width: 96, borderRadius: 4, backgroundColor: 'var(--ds2-elevation-surface)', border: '1px solid var(--ds2-border-default)' }} title="ds2-elevation-surface" />
      </div>
    </div>
  ),
};

export const TextColors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <h2 style={{ fontSize: '1.125rem', fontWeight: 600 }}>Text tokens</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
        <span style={{ color: 'var(--ds2-text-default)' }}>ds2-text-default</span>
        <span style={{ color: 'var(--ds2-text-subtle)' }}>ds2-text-subtle</span>
        <span style={{ color: 'var(--ds2-text-brand)' }}>ds2-text-brand</span>
        <span style={{ color: 'var(--ds2-text-danger)' }}>ds2-text-danger</span>
        <span style={{ color: 'var(--ds2-text-success)' }}>ds2-text-success</span>
      </div>
    </div>
  ),
};

export const All: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <h2 style={{ fontSize: '1.125rem', fontWeight: 600 }}>Background tokens</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          <div style={{ height: 48, width: 96, borderRadius: 4, backgroundColor: 'var(--ds2-background-brand-base)' }} />
          <div style={{ height: 48, width: 96, borderRadius: 4, backgroundColor: 'var(--ds2-background-neutral)' }} />
          <div style={{ height: 48, width: 96, borderRadius: 4, backgroundColor: 'var(--ds2-background-selected)' }} />
          <div style={{ height: 48, width: 96, borderRadius: 4, backgroundColor: 'var(--ds2-background-danger)' }} />
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <h2 style={{ fontSize: '1.125rem', fontWeight: 600 }}>Text tokens</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
          <span style={{ color: 'var(--ds2-text-default)' }}>Default</span>
          <span style={{ color: 'var(--ds2-text-subtle)' }}>Subtle</span>
          <span style={{ color: 'var(--ds2-text-brand)' }}>Brand</span>
        </div>
      </div>
    </div>
  ),
};
